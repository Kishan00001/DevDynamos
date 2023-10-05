using Microsoft.AspNetCore.Mvc;
using QuizWiz.Models;

namespace QuizWiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OptionController : Controller
    {
        private readonly IComponent comp;
        public OptionController(IComponent comp)
        {
            this.comp = comp;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Option>> GetOptionByIdAPI(int id) => await comp.GetOption(id);


        //[HttpGet("{id}")]
        [HttpGet]
        [Route("normal")]
        public async Task<ActionResult<Option>> GetOptionsByQuestionIdAPI([FromQuery] int quesId) => await comp.GetAllOptions(quesId);

        [HttpGet]
        [Route("shuffle")]
        public async Task<ActionResult<Option>> GetShuffledOptionByQuestionIdAPI([FromQuery] int quesId) => await comp.GetShuffledOptions(quesId);


        [HttpPost]
        public async Task<ActionResult<Option>> AddOptionAPI(Option opt)
        {
            await comp.AddOption(opt);
            return CreatedAtAction(nameof(GetOptionByIdAPI), new { id = opt.OptionId }, opt);
        }

        [HttpPut("{optId}")]
        public async Task<ActionResult<Option>> UpdateOptionAPI(int optId, Option opt)
        {
            return await comp.UpdateOption(optId, opt);
        }

        [HttpDelete("{optId}")]
        public async Task<ActionResult<string>> DeleteOptionAPI(int optId)
        {
            await comp.DeleteOption(optId);
            return await new Task<ActionResult<string>>(() => "Option is Deleted successfully");
        }
    }
}