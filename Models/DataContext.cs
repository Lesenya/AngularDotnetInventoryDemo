using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AngularDotnetInventoryDemo.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOne<Supplier>(p => p.Supplier)
                .WithMany(s => s.Products)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
