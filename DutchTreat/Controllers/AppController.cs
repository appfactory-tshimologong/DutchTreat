using DutchTreat.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    public class AppController :Controller
    {
        private readonly IMailService _mailService;
        public AppController(IMailService mailService)
        {
            _mailService = mailService;
        }
        public IActionResult Index()
        {
            //throw new InvalidOperationException(); 
            return View();
        }


        [HttpGet("contact")]
        public IActionResult Contact()
        {

            //throw new InvalidOperationException();

            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                _mailService.SendMessage("barbara@tshimologong.joburg", model.Subject, $"From: {model.Name} - {model.Email}, Message:{model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }

            return View();

        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us";
            return View();
        }

    }
}
