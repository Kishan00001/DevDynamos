﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizWiz.Models;

namespace QuizWiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OtpController : Controller
    {
        private readonly IComponent comp;
        public OtpController(IComponent comp)
        {
            this.comp = comp;
        }

        [HttpGet]
        [Route("generateOTP")]
        public IActionResult generateOTPAPI([FromQuery] string email,string pwd)
        {
            try
            {
                comp.sendOTP(email, pwd);
                Console.WriteLine("OTP sent");
                return Ok("OTP sent successfully.");
            }catch (Exception ex)
            {
                //return StatusCode(500, $"Internal server error: {ex.Message}");
                return Ok($"{ex.Message}");
            }
            //return await comp.GetUserByEmail(email);
            //return CreatedAtAction(nameof(GetUserByIdAPI), new { id = user.UserId }, user)
        }
        [HttpGet]
        [Route("validateOTP")]
        public IActionResult validateOTPAPI([FromQuery] string email,int otp)
        {
            try
            {
                comp.validateOTP(email,otp);
                return Ok("OTP validated successfully.");
            }
            catch (Exception ex)
            {
                //return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
                return Ok($"{ex.Message}");
            }
            //comp.validateOTP(email,otp);
            //return await comp.GetUserByEmail(email);
        }
    }
}
