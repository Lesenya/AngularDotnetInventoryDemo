using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularDotnetInventoryDemo.Models
{
    public class SeedData
    {
        public static void SeedDatabase(DataContext context) {
            context.Database.Migrate();
            if (context.Products.Count() == 0) {
                Supplier supplier1 = new Supplier { 
                    Name = "Lesenya",
                    Surname = "Mokhubu",
                    Location = "Pretoria"
                };
                Supplier supplier2 = new Supplier
                {
                    Name = "Mamorare",
                    Surname = "Matekane",
                    Location = "Pretoria"
                };
                Supplier supplier3 = new Supplier
                {
                    Name = "Ikaneng",
                    Surname = "Mokhubu",
                    Location = "Maseru Lesotho"
                };
                Product product;
                for (int i = 0; i <= 60; i++) {
                    if (i < 20)
                    {
                        product = new Product
                        {
                            Name = $"Product {i}",
                            Description = $"Description for Product {i}",
                            Category = "Soccer",
                            Supplier = supplier1
                        };
                    }
                    else if (i < 40)
                    {
                        product = new Product
                        {
                            Name = $"Product {i}",
                            Description = $"Description for Product {i}",
                            Category = "Chess",
                            Supplier = supplier2
                        };
                    }
                    else 
                    {
                        product = new Product
                        {
                            Name = $"Product {i}",
                            Description = $"Description for Product {i}",
                            Category = "Water",
                            Supplier = supplier3
                        };
                    }
                    context.Products.Add(product);
                }
                context.SaveChanges();
            }
        }
    }
}
