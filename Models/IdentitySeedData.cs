using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AngularDotnetInventoryDemo.Models
{
    public class IdentitySeedData
    {
        private const string adminUser = "Ika";
        private const string adminPassword = "@Les123";
        private const string adminRole = "Administrator";

        public static async Task SeedDataBase(IServiceProvider serviceProvider) {
            serviceProvider.GetRequiredService<IdentityDataContext>().Database.Migrate();

            UserManager<IdentityUser> userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            RoleManager<IdentityRole> roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            IdentityRole role = await roleManager.FindByNameAsync(adminRole);
            IdentityUser user = await userManager.FindByNameAsync(adminUser);

            if (role == null) {
                role = new IdentityRole(adminRole);
                IdentityResult result = await roleManager.CreateAsync(role);
                if (!result.Succeeded) {
                    throw new Exception($"Can not create role because: {result.Errors.FirstOrDefault()}");
                }
            }
            if (user == null) {
                user = new IdentityUser(adminUser);
                IdentityResult result = await userManager.CreateAsync(user, adminPassword);
                if (!result.Succeeded) {
                    throw new Exception($"Can not create user because: {result.Errors.FirstOrDefault()}");
                }
            }
            if (! await userManager.IsInRoleAsync(user, adminRole)) {
                IdentityResult result = await userManager.AddToRoleAsync(user, adminRole);
                if (!result.Succeeded)
                {
                    throw new Exception($"Can not add user to the role because: {result.Errors.FirstOrDefault()}");
                }
            }
        }
    }
}
