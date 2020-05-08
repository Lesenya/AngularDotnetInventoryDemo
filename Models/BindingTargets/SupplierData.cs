using System.ComponentModel.DataAnnotations;

namespace AngularDotnetInventoryDemo.Models.BindingTargets
{
    public class SupplierData
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Location { get; set; }
        public Supplier Supplier => new Supplier { 
            Name = Name,
            Surname = Surname,
            Location = Location
        };
    }
}
