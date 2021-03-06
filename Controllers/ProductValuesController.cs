﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularDotnetInventoryDemo.Models;
using Microsoft.EntityFrameworkCore;
using AngularDotnetInventoryDemo.Models.BindingTargets;
using Microsoft.AspNetCore.Authorization;

namespace AngularDotnetInventoryDemo.Controllers
{
    [ApiController]
    [Route("api/products")]
    [Authorize(Roles = "Administrator")]
    public class ProductValuesController: Controller
    {
        private DataContext context;
        public ProductValuesController(DataContext ctx) {
            this.context = ctx;
        }
        [HttpGet("{id}")]
        [AllowAnonymous]
        public Product GetProduct(long id) {
            Product product = context.Products.Include(p => p.Supplier).FirstOrDefault(p => p.ProductId == id);
            if (product != null) {
                if (product.Supplier != null) {
                    product.Supplier.Products = null;
                }
            }
            return product;
        }

        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Product> GetProducts(bool related = false) {
            IQueryable<Product> products = context.Products;
            if (related && HttpContext.User.IsInRole("Administrator")) {
                products = products.Include(p => p.Supplier);
                List<Product> productList = products.ToList();
                productList.ForEach(p => {
                    if (p.Supplier != null) {
                        p.Supplier.Products = null;
                    }
                });
                return productList;
            }
            return products;
        }

        [HttpPost]
        public IActionResult CreateProduct([FromBody] ProductData productData) {
            if (ModelState.IsValid) {
                Product product = productData.Product;
                if (product.Supplier != null && product.Supplier.SupplierId != 0) {
                    context.Attach(product.Supplier);
                }
                context.Products.Add(product);
                context.SaveChanges();
                return Ok(product.ProductId);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(long id, [FromBody] ProductData productData) {
            if (ModelState.IsValid) {
                Product product = productData.Product;
                if (product.Supplier != null && product.Supplier.SupplierId != 0) {
                    context.Attach(product.Supplier);
                }
                context.Products.Update(product);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public void DeleteProduct(long id) {
            context.Products.Remove(new Product { ProductId = id});
            context.SaveChanges();
        }
    }
}
