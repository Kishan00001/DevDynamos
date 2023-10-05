using Microsoft.EntityFrameworkCore;

namespace QuizWiz.Models
{
    public class MyDbContext:DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        public DbSet<User> UserTables { get; set; }
        public DbSet<Topic> TopicTables { get; set; }
        public DbSet<Question> QuestionTables { get; set; }
        public DbSet<Option> OptionTables { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Question>()
                .HasIndex(q => q.QName)
                .IsUnique();
        }
    }
}
