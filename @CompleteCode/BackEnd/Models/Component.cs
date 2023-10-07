using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.Security.Cryptography;
using OfficeOpenXml;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;
using OfficeOpenXml.Style;
using System.Resources;
using System.Threading.Tasks;

namespace QuizWiz.Models
{
    public class Component : IComponent
    {
        private readonly MyDbContext _dbContext;

        public Component(MyDbContext context)
        {
            _dbContext = context;
        }

        /**********************************  F  O  R  ***** U  S  E  R **************************************/
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
                upduser.Otp = user.Otp;
                upduser.OtpTime = user.OtpTime;
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


        /********************************  F  O  R  ***** T  O  P  I  C **************************************/
        
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


        /*****************************  F  O  R  ***** Q  U  E  S  T  I  O  N  ******************************/

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
            Random rand = new Random();
            List<Question> list = await _dbContext.QuestionTables.Where(q=>q.TopicId==topicId).ToListAsync();
            for(int i = list.Count - 1; i > 0; i--)
            {
                int j = rand.Next(0, i + 1);
                Question que = list[i];
                list[i] = list[j];
                list[j] = que;
            }
            return list;
        }
        public async Task<Question> GetQuestionByQId(int qid)
        {
            return await _dbContext.QuestionTables.FindAsync(qid) ?? throw new Exception("Question with that question id is not found");
        }
        public async Task<Question> GetQuestionByQName(string qname)
        {
            return await _dbContext.QuestionTables.Where(q => q.QName == qname).FirstAsync() ?? throw new Exception("No Question found with that Question Name Entered");
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
                return await GetQuestionByQId(id);
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


        /******************************  F  O  R  ***** O  P  T  I  O  N  ***********************************/
        
        
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
           ;
        }

        /******************************  M  I  S  C  E  L  L  A  N  E  O  U  S  ****************************/
        public void readExcelFile(string filename,int topicId)
        {
            string filePath = "C:/Users/kkumarmaharana/source/repos/QuizWiz/QuizWiz/Resources/ExcelFiles/"+filename;
            
            if (filePath == null || filePath == "" || !File.Exists(filePath))
                throw new Exception("File Not uploaded Correctly.. Upload again");

            using (var package = new ExcelPackage(new FileInfo(filePath)))
            {
                //Getting the first worksheet in the excel file.
                var worksheet = package.Workbook.Worksheets[0];

                //looping throw rows in the worksheet ... starting from 2 as the first row is about specifying the column name...data starts from second row & Accessing cell values by specifying column index 1-based
                for (int row=2; row<=worksheet.Dimension.Rows; row++)
                {
                    string qname = worksheet.Cells[row, 1].Value.ToString()??"";
                    string qans = worksheet.Cells[row, 6].Value.ToString()??"";
                    string qdiff = worksheet.Cells[row, 7].Value.ToString()??"";
                    Question ques = new Question {QName=qname,QAns=qans,QDiff=qdiff,TopicId=topicId};
                    _dbContext.QuestionTables.Add(ques);
                }
                _dbContext.SaveChanges();
                for (int row = 2; row <= worksheet.Dimension.Rows; row++)
                {
                    string qname = worksheet.Cells[row, 1].Value.ToString() ?? "";
                    string opta = worksheet.Cells[row, 2].Value.ToString() ?? "";
                    string optb = worksheet.Cells[row, 3].Value.ToString() ?? "";
                    string optc = worksheet.Cells[row, 4].Value.ToString() ?? "";
                    string optd = worksheet.Cells[row, 5].Value.ToString() ?? "";
                    
                    Option Opt = new Option { OptionA = opta, OptionB = optb, OptionC = optc, OptionD = optd, QId = _dbContext.QuestionTables.Where(q=>q.QName==qname)?.First().QId??0};
                    _dbContext.OptionTables.Add(Opt);
                }
                _dbContext.SaveChanges();
                File.Delete(filePath);
            }
        }

        public void sendOTP(string recipientemail, string password)
        {
            User user = _dbContext.UserTables.Where(u => u.UserEmail == recipientemail).First();
            
            const string sendermail = "kishanmaharana04@gmail.com";
            const string senderpassword = "Lk9dc4nX6V7fCZhm";
            int otp = new Random().Next(100000, 999999);
            
            user.Otp = otp;
            user.OtpTime = DateTime.Now.AddMinutes(5);
            _dbContext.SaveChanges();

            SmtpClient smtpClient = new SmtpClient("smtp-relay.brevo.com")
            {
                Port = 587,
                Credentials = new NetworkCredential(sendermail, senderpassword),
                EnableSsl = true
            };
            MailMessage msg = new MailMessage(sendermail, recipientemail)
            {
                Subject = "Welcome to QuizWiz",
                IsBodyHtml = true,
                Body = HTMLSendOTP(_dbContext.UserTables.Where(user => user.UserEmail == recipientemail)?.First().UserName ?? "", otp)
            };
            try
            {
                if(user.Password != password)
                {
                    throw new Exception("Wrong Password Entered");
                }
                else
                {
                smtpClient.Send(msg);
                Console.WriteLine("Mail Sent Successfully");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error" + ex.Message);
                throw new Exception(ex.Message);
            }
        }

        public void validateOTP(string email, int otp)
        {
            User user = _dbContext.UserTables.FirstOrDefault(u => u.UserEmail == email)!;
            if (user == null)
                throw new Exception("No User found with the Mail Id");
            else if (user.OtpTime <= DateTime.Now)
                throw new Exception("Your OTP has expired... Try again");
            else if (user.Otp != otp)
                throw new Exception("Wrong OTP entered... Try Again");
        }

        public void resetTest()
        {
            try
            {
                _dbContext.Database.ExecuteSqlRaw("TRUNCATE TABLE OptionTable");
                _dbContext.Database.ExecuteSqlRaw("TRUNCATE TABLE QuestionTable");
                _dbContext.Database.ExecuteSqlRaw("TRUNCATE TABLE TopicTable");
                _dbContext.SaveChanges();

                System.IO.DirectoryInfo di = new DirectoryInfo("C:/Users/kkumarmaharana/source/repos/QuizWiz/QuizWiz/Resources/ExcelFiles/");
                foreach (FileInfo file in di.GetFiles())
                    file.Delete();
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    
        public string HTMLSendOTP(string name,int otp)
        {
            string content = $"<html><body>    <div style=\"font-family: Helvetica,Arial,sans-serif;overflow:auto;line-height:2;background-color: rgba(204, 176, 231, 0.564); margin:30px;text-align:center\">        <div style=\"margin:30px auto;padding:5px \">            <div style=\"border-bottom:1px solid #eee\">                <a href=\"\" style=\"font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600\">QuizWiz</a>            </div>            <p style=\"font-size:1.1em\"><i>Hi,{name}👋</i></p>            <p>A login attempt was made using this mail Id. OTP for logging successfully is </p>            <h2 style=\"background:rgb(58, 13, 103);margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;\">{otp}</h2><br>            <p>This OTP will expire in 5 minitues.Ignore if the attempt was not made by you.<br>Thank you for using QuizWiz</p>            <p style=\"font-size:0.9em;\">                Regards,<br>                Team QuizWiz            </p>        </div>    </div></body></html>";
            return content;
        }
    }


}