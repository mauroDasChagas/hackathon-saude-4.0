using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
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
        public async Task<ActionResult<Patient>> Create(PatientForCreationDto patientDto)
        {
            var patient = new Patient
            {
                Name = patientDto.Name,
                Age = patientDto.Age,
                Sex = patientDto.Sex,
                Diagnosis = patientDto.Diagnosis.ConvertAll(d => new Diagnosis
                {
                    Condition = d.Condition,
                    DiagnosedDate = d.DiagnosedDate
                }),
                FamilyHistory = new FamilyHistory
                {
                    Hypertension = patientDto.FamilyHistory.Hypertension,
                    Diabetes = patientDto.FamilyHistory.Diabetes,
                    HeartDisease = patientDto.FamilyHistory.HeartDisease
                },
                CurrentMedications = patientDto.CurrentMedications.ConvertAll(m => new Medication
                {
                    MedicationName = m.MedicationName,
                    Dosage = m.Dosage,
                    Frequency = m.Frequency,
                    Response = m.Response
                }),
                Symptoms = patientDto.Symptoms,
                Lifestyle = new Lifestyle
                {
                    Diet = patientDto.Lifestyle.Diet,
                    ExerciseHabits = patientDto.Lifestyle.ExerciseHabits,
                    Smoking = patientDto.Lifestyle.Smoking,
                    AlcoholConsumption = patientDto.Lifestyle.AlcoholConsumption
                },
                RecentExams = patientDto.RecentExams.ConvertAll(e => new Exam
                {
                    ExamName = e.ExamName,
                    Date = e.Date,
                    Results = new BsonDocument(e.Results)
                }),
                Treatments = patientDto.Treatments.ConvertAll(t => new Treatment
                {
                    Description = t.Description,
                    Doctor = t.Doctor,
                    NextAppointment = t.NextAppointment,
                    Status = t.Status,
                    StartDate = DateTime.Now
                }),
                GeneralRecommendations = patientDto.GeneralRecommendations
            };

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
