using Microsoft.AspNetCore.Mvc;
using QuizWiz.Models;

namespace QuizWiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicController : Controller
    {
        private readonly IComponent comp;
        public TopicController(IComponent comp)
        {
            this.comp = comp;
        }

        [HttpGet]
        public async Task<ActionResult<List<Topic>>> GetTopicsAPI() => await comp.GetAllTopics();

        [HttpGet("{id}")]
        public async Task<ActionResult<Topic>> GetTopicByIdAPI(int id) => await comp.GetTopicById(id);

        [HttpPost]
        public async Task<ActionResult<Topic>> AddTopicAPI(Topic topic)
        {
            await comp.AddTopic(topic);
            comp.readExcelFile(topic.TopicFile,topic.TopicID);
            return CreatedAtAction(nameof(GetTopicByIdAPI), new { id = topic.TopicID }, topic);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Topic>> UpdateTopicAPI(int id, Topic topic)
        {
            return await comp.UpdateTopic(id, topic);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> DeleteTopicAPI(int id)
        {
            await comp.DeleteTopic(id);
            return await new Task<string>(() => "Topic is Deleted successfully");
        }

        [HttpGet("reset")]
        public IActionResult resetTest()
        {
            try
            {
                comp.resetTest();
                Console.WriteLine("Test Reset Successfully");
                return Ok("Everything reset successfully");
            }
            catch (Exception ex)
            {
                return Ok($"{ex.Message}");
            }
        }
    }
}
