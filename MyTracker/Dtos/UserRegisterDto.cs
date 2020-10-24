using System.ComponentModel.DataAnnotations;

namespace MyTracker.Dtos
{
    public class UserRegisterDto
    {
        [Required]
        [StringLength(8, MinimumLength=1,ErrorMessage="Username is required a minimum 1 character")]
        public string Username { get; set; }
        public string Password { get; set; }
    }
}