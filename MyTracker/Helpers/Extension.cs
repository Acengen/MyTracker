using System;
using Microsoft.AspNetCore.Http;

namespace MyTracker.Helpers
{
    public static class Extension
    {
        public static void AddAppError(this HttpResponse response, string message) 
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
        }

        public static int CalcAge(this DateTime ThedateTime) {
            var age = DateTime.Today.Year - ThedateTime.Year;
            if(ThedateTime.AddYears(age) > DateTime.Today) {
                age--;
            }

            return age;
        }
    }
}