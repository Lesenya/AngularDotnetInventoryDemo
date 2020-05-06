using System;
using System.Collections.Generic;

namespace AngularDotnetInventoryDemo.Models
{
    public class Supplier
    {
        public long SupplierId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Location { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
}
