using Mailjet.Client;
using Mailjet.Client.Resources;
using Microsoft.AspNetCore.Identity.UI.Services;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchedulingAppointment.Utility
{
    public class EmailSender : IEmailSender
    {
        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            MailjetClient client = new MailjetClient("6122497ea6c4fabdf4e178c42bcaae3a", "6eca972a371f39df83a22f79250dbecf")
            {
                
            };
            
            MailjetRequest request = new MailjetRequest
            {
                Resource = Send.Resource,
            }

            .Property(Send.FromEmail, "trajce.ivanov@gmail.com")
            .Property(Send.FromName, "Scheduling Appointment")
            .Property(Send.Subject, subject)
            .Property(Send.HtmlPart, htmlMessage)
            .Property(Send.Recipients, new JArray { 
                new JObject {
                 {"Email", email}
                 }
                });
            MailjetResponse response = await client.PostAsync(request);


        }
    }
}
