using System.Collections.Generic;
using System.Linq;
using MyTracker.Models;
using Newtonsoft.Json;

namespace MyTracker.Data
{
    public class Seed
    {
        public static void SeedUsers(MyDbContex contex) {
            if(!contex.Users.Any()) 
            {
                var userData = System.IO.File.ReadAllText("Data/user.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                foreach (var user in users)
                {
                    byte[] passwordHash,passwordSalt;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();
                    contex.Users.Add(user);
                }
                contex.SaveChanges();
            }
        }
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmc = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmc.Key;
                passwordHash = hmc.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}