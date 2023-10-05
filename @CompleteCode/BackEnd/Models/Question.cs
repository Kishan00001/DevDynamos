using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizWiz.Models
{
    [Table("QuestionTable")]
    public class Question
    {
        [Key]
        public int QId { get; set; }
        public string QName { get; set; } = string.Empty;
        public string QDiff { get; set; } = string.Empty;
        public string QAns { get; set; } = string.Empty;
        public int TopicId { get; set; }
    }
}
