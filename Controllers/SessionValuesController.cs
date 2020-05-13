using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using AngularDotnetInventoryDemo.Models;
using AngularDotnetInventoryDemo.Models.BindingTargets;

namespace AngularDotnetInventoryDemo.Controllers
{
    [ApiController]
    [Route("/api/session")]
    public class SessionValuesController: Controller
    {
        [HttpGet("cart")]
        public IActionResult GetCart() {
            return Ok(HttpContext.Session.GetString("cart"));
        }
        [HttpPost("cart")]
        public void SetCart([FromBody] CartProductSelection[] cartProducts) {
            string jsonData = JsonConvert.SerializeObject(cartProducts);
            HttpContext.Session.SetString("cart", jsonData);
        }

        [HttpGet("checkout")]
        public IActionResult GetCheckout() {
            return Ok(HttpContext.Session.GetString("checkout"));
        }
        [HttpPost("checkout")]
        public void SetCheckout([FromBody] CheckoutState checkout) {
            HttpContext.Session.SetString("checkout", JsonConvert.SerializeObject(checkout));
        }
    }
}
