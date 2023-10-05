using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using QuizWiz.Models;

namespace QuizWiz
{
    public class Program
    {
        public static void Main(string[] args)
        {
            const string policy = "mypolicy";
            var builder = WebApplication.CreateBuilder(args);
            var connectionString = builder.Configuration.GetConnectionString("conString");
            // Add services to the container.

            builder.Services.AddDbContext<MyDbContext>((options) =>
            {
                options.UseSqlServer(connectionString);
            });

            builder.Services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            builder.Services.AddTransient<IComponent, Component>();

            builder.Services.AddCors((options) =>
            {
                options.AddPolicy("mypolicy", options =>
                {
                    options.AllowAnyHeader();
                    options.AllowAnyMethod();
                    options.AllowAnyOrigin();
                });
            });
            
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseAuthorization();
            app.UseCors(policy);
            app.MapControllers();
            app.Run();
        }
    }
}

