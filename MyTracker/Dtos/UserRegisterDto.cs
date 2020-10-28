using System.ComponentModel.DataAnnotations;

namespace MyTracker.Dtos
{
    public class UserRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12,MinimumLength=3,ErrorMessage="Password must contain min 3 chars")]
        public string Password { get; set; }
    }
}