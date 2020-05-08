using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularDotnetInventoryDemo.Models;
using AngularDotnetInventoryDemo.Models.BindingTargets;

namespace AngularDotnetInventoryDemo.Controllers
{
    [ApiController]
    [Route("api/suppliers")]
    public class SupplierValuesController: Controller
    {
        private DataContext context;
        public SupplierValuesController(DataContext ctx) {
            context = ctx;
        }

        [HttpGet("{id}")]
        public Supplier GetSupplier(long id) {
            return context.Suppliers.Find(id);
        }

        [HttpGet]
        public IEnumerable<Supplier> GetSuppliers() {
            return context.Suppliers;
        }

        [HttpPost]
        public IActionResult CreateSupplier([FromBody] SupplierData supplierData)
        {
            if (ModelState.IsValid) {
                Supplier supplier = supplierData.Supplier;
                context.Suppliers.Add(supplier);
                context.SaveChanges();
                return Ok(supplier.SupplierId);
            }
            return BadRequest(ModelState);
        }
    }
}
