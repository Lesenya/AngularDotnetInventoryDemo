using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AngularDotnetInventoryDemo.Controllers
{
    public class AccountController: Controller
    {
        private SignInManager<IdentityUser> signInManager;
        private UserManager<IdentityUser> userManager;

        public AccountController(SignInManager<IdentityUser> signInMgm, UserManager<IdentityUser> userMgm) {
            signInManager = signInMgm;
            userManager = userMgm;
        }

        private async Task<bool> DoLogin(LoginViewModel creds) {
            IdentityUser user = await userManager.FindByNameAsync(creds.Name);
            if (user != null) {
                await signInManager.SignOutAsync();
                Microsoft.AspNetCore.Identity.SignInResult result = await signInManager.PasswordSignInAsync(user, creds.Password, false,false);
                return result.Succeeded;
            }
            return false;
        }
        [HttpPost("/api/account/login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel creds)
        {
            if (ModelState.IsValid && await DoLogin(creds))
            {
                return Ok("true");
            }
            return BadRequest();
        }
        [HttpPost("/api/account/logout")]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }
    }
    public class LoginViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
