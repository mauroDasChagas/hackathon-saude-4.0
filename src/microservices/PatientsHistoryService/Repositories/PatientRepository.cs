using MongoDB.Driver;
using PatientsHistoryService.Models;
using PatientsHistoryService.Settings;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace PatientsHistoryService.Repositories
{
    public class PatientRepository
    {
        private readonly IMongoCollection<Patient> _patients;

        public PatientRepository(IOptions<MongoDBSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);
            _patients = database.GetCollection<Patient>("Patients");
        }
        public async Task<List<Patient>> GetAsync() =>
            await _patients.Find(p => true).ToListAsync();
        public async Task<Patient> GetAsync(string id) =>
            await _patients.Find<Patient>(p => p.Id == id).FirstOrDefaultAsync();
        public async Task<Patient> CreateAsync(Patient patient)
        {
            patient.Id = ObjectId.GenerateNewId().ToString();
            foreach (var treatment in patient.Treatments)
            {
                treatment.TreatmentId = ObjectId.GenerateNewId().ToString();
                treatment.StartDate = treatment.StartDate == default ? DateTime.Now : treatment.StartDate;
            }

            await _patients.InsertOneAsync(patient);
            return patient;
        }
        public async Task UpdateAsync(string id, Patient patientIn) =>
            await _patients.ReplaceOneAsync(p => p.Id == id, patientIn);
        public async Task RemoveAsync(string id) =>
            await _patients.DeleteOneAsync(p => p.Id == id);
    }
}
