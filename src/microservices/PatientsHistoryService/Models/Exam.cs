using MongoDB.Bson;

namespace PatientsHistoryService.Models
{
    public class Exam
    {
        public string ExamName { get; set; }
        public DateTime Date { get; set; }
        public BsonDocument Results { get; set; }
    }
}
