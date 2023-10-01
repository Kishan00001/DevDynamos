using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.Security.Cryptography;
using OfficeOpenXml;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace QuizWiz.Models
{
    public class Component : IComponent
    {
        private readonly MyDbContext _dbContext;

        public Component(MyDbContext context)
        {
            _dbContext = context;
        }

        /**********************************F  O  R  ***** U  S  E  R**************************************/
        public async Task<User> AddUser(User user)
        {
            _dbContext.UserTables.Add(user);
            await _dbContext.SaveChangesAsync();
            return user;
        }
        public async Task<List<User>> GetAllUsers()
        {
            return await _dbContext.UserTables.ToListAsync();
        }
        public async Task<User> GetUserById(int id)
        {
            return await _dbContext.UserTables.FindAsync(id) ?? throw new Exception("User with that id is not found");
        }
        public async Task<User> GetUserByEmail(string email)
        {
            var users = _dbContext.UserTables;
            return await users.Where(u => u.UserEmail == email).FirstAsync() ?? throw new Exception("User with that Email Id is not found");
        }
        public async Task<User> UpdateUser(int id, User user)
        {
            var upduser = await _dbContext.UserTables.FindAsync(id);
            if (upduser == null)
                throw new Exception("User is not found to update");
            else
            {
                upduser.UserName = user.UserName;
                upduser.UserEmail = user.UserEmail;
                upduser.Password = user.Password;
                upduser.Role = user.Role;
                await _dbContext.SaveChangesAsync();
                return await GetUserById(id);
            }
        }
        public async Task DeleteUser(int userid)
        {
            var user = _dbContext.UserTables.Find(userid);
            if (user != null)
                _dbContext.UserTables.Remove(user);
            else
                throw new Exception("User with that userid is not found");
            await _dbContext.SaveChangesAsync();
        }


        /********************************F  O  R  ***** T  O  P  I  C**************************************/
        
        
        public async Task<Topic> AddTopic(Topic topic)
        {
            _dbContext.TopicTables.Add(topic);
            await _dbContext.SaveChangesAsync();
            return topic;
        }
        public async Task<List<Topic>> GetAllTopics()
        {
            return await _dbContext.TopicTables.ToListAsync();
        }
        public async Task<Topic> GetTopicById(int id)
        {
            return await _dbContext.TopicTables.FindAsync(id) ?? throw new Exception("Topic with that id is not found");
        }
        public async Task<Topic> UpdateTopic(int id, Topic topic)
        {
            var updtopic = await _dbContext.TopicTables.FindAsync(id);
            if (updtopic == null)
                throw new Exception("Topic is not found to update");
            else
            {
                updtopic.TopicName = topic.TopicName;
                updtopic.TopicFile = topic.TopicFile;
                await _dbContext.SaveChangesAsync();
                return await GetTopicById(id);
            }
        }
        public async Task DeleteTopic(int topicid)
        {
            var topic = _dbContext.TopicTables.Find(topicid);
            if (topic != null)
                _dbContext.TopicTables.Remove(topic);
            else
                throw new Exception("Topic with that id is not found");
            await _dbContext.SaveChangesAsync();
        }


        /*****************************F  O  R  ***** Q  U  E  S  T  I  O  N  ******************************/


        public async Task<Question> AddQuestion(Question ques)
        {
            _dbContext.QuestionTables.Add(ques);
            await _dbContext.SaveChangesAsync();
            return ques;
        }

        public async Task<List<Question>> GetAllQuestions(int topicId)
        {
            return await _dbContext.QuestionTables.Where(q => q.TopicId == topicId).ToListAsync() ?? throw new Exception("Questions with that topic Id is not found");
        }

        public async Task<List<Question>> GetShuffledQuestions(int topicId)
        {
            //return await _dbContext.Questions.ToList().OrderBy(_ => Guid.NewGuid()).ToListAsync();
            Random rand = new Random();
            List<Question> list = await _dbContext.QuestionTables.ToListAsync();
            for(int i = list.Count - 1; i > 0; i--)
            {
                int j = rand.Next(0, i + 1);
                Question que = list[i];
                list[i] = list[j];
                list[j] = que;
            }
            return list;
        }
        public async Task<Question> GetQuestion(int qid)
        {
            return await _dbContext.QuestionTables.FindAsync(qid) ?? throw new Exception("Question with that question id is not found");
        }

        public async Task<Question> UpdateQuestion(int id, Question ques)
        {
            var updques = await _dbContext.QuestionTables.FindAsync(id);
            if (updques == null)
                throw new Exception("Question is not found to update");
            else
            {
                updques.QName = ques.QName;
                updques.QDiff = ques.QDiff;
                updques.QAns = ques.QAns;
                updques.TopicId = ques.TopicId;
                await _dbContext.SaveChangesAsync();
                return await GetQuestion(id);
            }
        }
        public async Task DeleteQuestion(int qid)
        {
            var ques = _dbContext.QuestionTables.Find(qid);
            if (ques != null)
                _dbContext.QuestionTables.Remove(ques);
            else
                throw new Exception("Question with that id is not found");
            await _dbContext.SaveChangesAsync();
        }


        /******************************F  O  R  ***** O  P  T  I  O  N***********************************/
        
        
        public async Task<Option> AddOption(Option opt)
        {
            _dbContext.OptionTables.Add(opt);
            await _dbContext.SaveChangesAsync();
            return opt;
        }
        public async Task<Option> GetAllOptions(int QuesId)
        {
            return await _dbContext.OptionTables.Where(opt => opt.QId == QuesId).FirstAsync() ?? throw new Exception("Invalid Question ... No options found");
        }
        public async Task<Option> GetShuffledOptions(int QId)
        {
            Random rand = new Random();
            Option option = await _dbContext.OptionTables.Where(opt=>opt.QId==QId).FirstAsync() ?? throw new Exception("Invalid Question ... No options found"); ;

            //return await users.Where(u => u.UserEmail == email).FirstAsync() ?? throw new Exception("User with that Email Id is not found");
            //List<Option> optList = await _dbContext.Q.FindAsync(QId) ?? throw new Exception("Question with that question id is not found");


            List<String> optValues = new List<string>{option.OptionA, option.OptionB, option.OptionC, option.OptionD};

            for (int i = optValues.Count - 1; i > 0; i--)
            {
                int j = rand.Next(0, i + 1);
                String opt = optValues[i];
                optValues[i] = optValues[j];
                optValues[j] = opt;
            }
            option.OptionA = optValues[0];
            option.OptionB = optValues[1];
            option.OptionC = optValues[2];
            option.OptionD = optValues[3];
            await _dbContext.SaveChangesAsync();
            return option;
        }
        public async Task<Option> GetOption(int Optid)
        {
            return await _dbContext.OptionTables.FindAsync(Optid) ?? throw new Exception("Options with that Option id is not found");
        }
        public async Task<Option> UpdateOption(int optId, Option opt)
        {
            var updopt = await _dbContext.OptionTables.FindAsync(optId);
            if (updopt == null)
                throw new Exception("Options are not found to update");
            else
            {
                updopt.OptionA = opt.OptionA;
                updopt.OptionB = opt.OptionB;
                updopt.OptionC = opt.OptionC;
                updopt.OptionD = opt.OptionD;
                updopt.QId = opt.QId;
                await _dbContext.SaveChangesAsync();
                return await GetOption(optId);
            }
        }
        public async Task DeleteOption(int optId)
        {
            var opt = _dbContext.OptionTables.Find(optId);
            if (opt != null)
                _dbContext.OptionTables.Remove(opt);
            else
                throw new Exception("Option with that option id is not found");
            await _dbContext.SaveChangesAsync();
            //return Task<string>
            //return Ok("File Deleted Successfully");
        }

        public void readExcelFile(string filePath)
        {
            if (filePath == null || filePath=="" || !File.Exists(filePath))
            filePath = "C:/Users/kkumarmaharana/OneDrive - First American Corporation/Desktop/TestExcel.xlsx";

            using (var package = new ExcelPackage(new FileInfo(filePath)))
            {
                //Getting the first worksheet in the excel file.
                var worksheet = package.Workbook.Worksheets[0];
                
                //looping throw rows in the worksheet ... starting from 2 as the first row is about specifying the column name...data starts from second row
                for(int row=2; row<=worksheet.Dimension.Rows; row++)
                {
                    //Accessing cell values by specifying row and column index 1-based
                    string qname = worksheet.Cells[row, 2].Value.ToString()??"";
                    string qans = worksheet.Cells[row, 7].Value.ToString()??"";
                    string qdiff = worksheet.Cells[row, 8].Value.ToString()??"";
                    int topicId = int.Parse(worksheet.Cells[row, 9].Value.ToString() ?? "0");
                    Question ques = new Question {QName=qname,QAns=qans,QDiff=qdiff,TopicId=topicId};
                    _dbContext.QuestionTables.Add(ques);
                }
                _dbContext.SaveChanges();
                for (int row = 2; row <= worksheet.Dimension.Rows; row++)
                {
                    //Accessing cell values by specifying row and column index 1-based
                    string qname = worksheet.Cells[row, 2].Value.ToString() ?? "";
                    string opta = worksheet.Cells[row, 3].Value.ToString() ?? "";
                    string optb = worksheet.Cells[row, 4].Value.ToString() ?? "";
                    string optc = worksheet.Cells[row, 5].Value.ToString() ?? "";
                    string optd = worksheet.Cells[row, 6].Value.ToString() ?? "";
                    
                    Option Opt = new Option { OptionA = opta, OptionB = optb, OptionC = optc, OptionD = optd, QId = _dbContext.QuestionTables.Where(q=>q.QName==qname)?.First().QId??0};
                    _dbContext.OptionTables.Add(Opt);
                }
                _dbContext.SaveChanges();
            }
        }
    }
}