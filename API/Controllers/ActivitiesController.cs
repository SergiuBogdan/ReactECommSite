using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {


        [HttpGet] //End points
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {

            return await Mediator.Send(new List.Query());

        }

    }
}