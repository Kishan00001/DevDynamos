namespace QuizWiz.Models
{
    public interface IComponent
    {
        /*User Class Methods*/
        Task<User> AddUser(User user);
        Task<List<User>> GetAllUsers();
        Task<User> GetUserById(int id);
        Task<User> GetUserByEmail(string email);
        Task<User> UpdateUser(int id, User user);
        Task DeleteUser(int id);

        /*Topic Class Methods*/

        Task<Topic> AddTopic(Topic topic);
        Task<List<Topic>> GetAllTopics();
        Task<Topic> GetTopicById(int id);
        Task<Topic> UpdateTopic(int id, Topic topic);
        Task DeleteTopic(int id);

        /*Question Class Methods*/
        Task<Question> AddQuestion(Question ques);
        Task<List<Question>> GetAllQuestions(int topicId);
        Task<List<Question>> GetShuffledQuestions(int topicId);
        Task<Question> GetQuestionByQName(string qname);
        Task<Question> GetQuestionByQId(int id);
        Task<Question> UpdateQuestion(int id, Question ques);
        Task DeleteQuestion(int id);


        /*Option Class Methods*/
        Task<Option> GetAllOptions(int QId);
        Task<Option> GetShuffledOptions(int QId);
        Task<Option> GetOption(int Qid);
        Task DeleteOption(int id);
        Task<Option> UpdateOption(int id, Option opt);
        Task<Option> AddOption(Option opt);
        void readExcelFile(string filePath,int topicId);
        void sendOTP(string email, string password);
        void validateOTP(string email, int otp);
        void resetTest();
    }
}