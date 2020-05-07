using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularDotnetInventoryDemo.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularDotnetInventoryDemo.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductValuesController: Controller
    {
        private DataContext context;
        public ProductValuesController(DataContext ctx) {
            this.context = ctx;
        }
        [HttpGet("{id}")]
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
        public IEnumerable<Product> GetProducts(bool related = false) {
            IQueryable<Product> products = context.Products;
            if (related) {
                products = products.Include(p => p.Supplier);
                List<Product> productList = products.ToList();
                productList.ForEach(p => {
                    if (p.Supplier != null) {
                        p.Supplier.Products = null;
                    }
                });
            }
            return products;
        }
    }
}
