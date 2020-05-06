using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AngularDotnetInventoryDemo.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
    }
}
