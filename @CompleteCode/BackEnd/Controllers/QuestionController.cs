using Microsoft.AspNetCore.Mvc;
using QuizWiz.Models;

namespace QuizWiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : Controller
    {
        private readonly IComponent comp;
        public QuestionController(IComponent comp)
        {
            this.comp = comp;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestionByIdAPI(int id) => await comp.GetQuestionByQId(id);
        //[HttpGet("{id}")]

        [HttpGet]
        [Route("qname")]
        public async Task<ActionResult<Question>> GetQuestionByQNameAPI([FromQuery] string qname)
        {
            return await comp.GetQuestionByQName(qname);
        }
        [HttpGet]
        [Route("normal")]
        public async Task<ActionResult<List<Question>>> GetQuestionsByTopicIdAPI([FromQuery] int topicId) => await comp.GetAllQuestions(topicId);

        [HttpGet]
        [Route("shuffle")]
        public async Task<ActionResult<List<Question>>> GetShuffledQuestionByTopicIdAPI([FromQuery] int topicId) => await comp.GetShuffledQuestions(topicId);


        [HttpPost]
        public async Task<ActionResult<Question>> AddQuestionAPI(Question ques)
        {
            await comp.AddQuestion(ques);
            return CreatedAtAction(nameof(GetQuestionByIdAPI), new { id = ques.QId }, ques);
        }
        
        [HttpPut("{id}")]
        public async Task<ActionResult<Question>> UpdateQuestionAPI(int id, Question ques)
        {
            return await comp.UpdateQuestion(id, ques);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> DeleteQuestionAPI(int id)
        {
            await comp.DeleteQuestion(id);
            return await new Task<string>(() => "Question is Deleted successfully");
        }
    }
}