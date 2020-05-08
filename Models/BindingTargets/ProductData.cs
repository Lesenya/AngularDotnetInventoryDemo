using System.ComponentModel.DataAnnotations;

namespace AngularDotnetInventoryDemo.Models.BindingTargets
{
    public class ProductData
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Category { get; set; }
        [Range(1, int.MaxValue, ErrorMessage = "Price must at least be 1")]
        public decimal Price { get; set; }
        public long Supplier { get; set; }

        public Product Product => new Product { 
            Name = Name,
            Description = Description,
            Category = Category,
            Price = Price,
            Supplier = Supplier == 0 ? null : new Supplier { SupplierId = Supplier}
        };
    }
}
