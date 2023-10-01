using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizWiz.Models
{
    [Table("OptionTable")]
    public class Option
    {
        [Key]
        public int OptionId { get; set; }
        public string OptionA { get; set; } = string.Empty;
        public string OptionB { get; set; } = string.Empty;
        public string OptionC { get; set; } = string.Empty;
        public string OptionD { get; set; } = string.Empty;
        public int QId { get; set; }
    }
}
