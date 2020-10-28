using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyTracker.Models
{
    public interface IUserRepo
    {
         void Add<T>(T entity) where T : class;
         void Delete<T>(T entity) where T : class;

         Task<User> GetUser(int id);
         Task<IEnumerable<User>> GetUsers();

         Task<bool> SaveAll();
    }
}