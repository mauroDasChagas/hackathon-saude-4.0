using Microsoft.AspNetCore.Mvc;
using PatientsHistoryService.Models;
using PatientsHistoryService.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PatientsHistoryService.Controllers
{
    [Route("patientsHistoryService/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly PatientRepository _patientRepository;
        public PatientsController(PatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Patient>>> Get() =>
            await _patientRepository.GetAsync();

        [HttpGet("{id:length(24)}", Name = "GetPatient")]
        public async Task<ActionResult<Patient>> Get(string id)
        {
            var patient = await _patientRepository.GetAsync(id);

            if (patient == null) 
            { 
                return NotFound();
            }

            return patient;
        }

        [HttpPost]
        public async Task<ActionResult<Patient>> Create(Patient patient)
        {
            await _patientRepository.CreateAsync(patient);

            return CreatedAtRoute("GetPatient", new { id = patient.Id.ToString() }, patient);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Patient patientIn)
        {
            var patient = await _patientRepository.GetAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            await _patientRepository.UpdateAsync(id, patientIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var patient = await _patientRepository.GetAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            await _patientRepository.RemoveAsync(id);

            return NoContent();
        }
    }
}
