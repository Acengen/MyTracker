using Microsoft.EntityFrameworkCore;
using MyTracker.Models;

namespace MyTracker.Data
{
    public class MyDbContex: DbContext
    {
        public MyDbContex(DbContextOptions<MyDbContex> opt):base(opt)
        {
            
        }

        public DbSet<Value> Values {get;set;}
    }
}