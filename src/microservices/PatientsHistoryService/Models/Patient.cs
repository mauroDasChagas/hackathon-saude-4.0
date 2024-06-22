using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace PatientsHistoryService.Models
{
    public class Patient
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public List<Diagnosis> Diagnosis { get; set; } = new List<Diagnosis>();
        public FamilyHistory FamilyHistory { get; set; }
        public List<Medication> CurrentMedications { get; set; } = new List<Medication>();
        public List<string> Symptoms { get; set; } = new List<string>();
        public Lifestyle Lifestyle { get; set; }
        public List<Exam> RecentExams { get; set; } = new List<Exam>();
        public List<Treatment> Treatments { get; set; } = new List<Treatment>();
        public List<string> GeneralRecommendations { get; set; } = new List<string>();
    }
}
