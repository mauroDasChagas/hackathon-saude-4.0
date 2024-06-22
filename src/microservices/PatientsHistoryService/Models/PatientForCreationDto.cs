using System.Collections.Generic;

namespace PatientsHistoryService.Models
{
    public class PatientForCreationDto
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public List<TreatmentForCreationDto> Treatments { get; set; }
    }

    public class TreatmentForCreationDto
    {
        public string Description { get; set; }
        public string Doctor { get; set; }
        public DateTime? NextAppointment { get; set; }
        public string Status { get; set; }
    }
}
