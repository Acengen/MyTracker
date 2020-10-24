using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyTracker.Dtos;
using MyTracker.Models;

namespace MyTracker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepo _repo;
        public AuthController(IAuthRepo repo)
        {
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterDto userRegisterDto)
        {
            userRegisterDto.Username = userRegisterDto.Username.ToLower();
            if(await _repo.UserExists(userRegisterDto.Username)) return BadRequest("Username already exists");

            var userToCreate = new User 
            {
                Username = userRegisterDto.Username
            };

            var createdUSer = await _repo.Register(userToCreate, userRegisterDto.Password);

            return StatusCode(201);    
        }
    }
}