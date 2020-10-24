﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MyTracker.Data;

namespace MyTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly MyDbContex _context;

        public WeatherForecastController(MyDbContex context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Values.ToListAsync();

            return Created("http://localhost:5000/WeatherForecast", values);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingleVaule(int id) {
            var value = await _context.Values.SingleOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }
    }
}
