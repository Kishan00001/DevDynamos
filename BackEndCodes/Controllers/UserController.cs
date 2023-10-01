using Microsoft.AspNetCore.Mvc;
using QuizWiz.Models;

namespace QuizWiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IComponent comp;
        public UserController(IComponent comp)
        {
            this.comp = comp;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsersAPI() => await comp.GetAllUsers();

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserByIdAPI(int id) => await comp.GetUserById(id);

        [HttpGet]
        [Route("email")]
        public async Task<ActionResult<User>> GetUserByEmailAPI([FromQuery] string email)
        {
           return await comp.GetUserByEmail(email);
        }

        [HttpPost]
        public async Task<ActionResult<User>> AddUserAPI(User user)
        {
            await comp.AddUser(user);
            return CreatedAtAction(nameof(GetUserByIdAPI), new { id = user.UserId }, user);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<User>> UpdateUserAPI(int id, User user)
        {
            return await comp.UpdateUser(id, user);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> DeleteUserAPI(int id)
        {
            await comp.DeleteUser(id);
            return await new Task<string>(() => "User is Deleted successfully");
        }
    }
}