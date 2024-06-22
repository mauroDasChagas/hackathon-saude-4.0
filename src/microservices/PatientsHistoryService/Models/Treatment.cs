using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace PatientsHistoryService.Models
{
    public class Treatment
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string TreatmentId { get; set; } = ObjectId.GenerateNewId().ToString();
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Doctor { get; set; }
        public DateTime? NextAppointment { get; set; }
        public string Status { get; set; }
    }
}
