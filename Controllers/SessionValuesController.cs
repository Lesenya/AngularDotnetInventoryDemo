using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using AngularDotnetInventoryDemo.Models;

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
    }
}
