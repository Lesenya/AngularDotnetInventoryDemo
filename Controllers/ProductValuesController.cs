using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularDotnetInventoryDemo.Models;

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
        public Product GetProduct(long id) => context.Products.Find(id);
    }
}
