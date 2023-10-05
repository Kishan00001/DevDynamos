using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizWiz.Models
{
    [Table("TopicTable")]
    public class Topic
    {
        [Key]
        public int TopicID { get; set; }
        public string TopicName { get; set; } = string.Empty;
        public string TopicFile { get; set; } = string.Empty;

    }
}
