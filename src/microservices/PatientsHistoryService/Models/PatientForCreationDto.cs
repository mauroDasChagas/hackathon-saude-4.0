using System;
using System.Collections.Generic;

namespace PatientsHistoryService.Models
{
    public class DiagnosisDto
    {
        public string Condition { get; set; }
        public DateTime DiagnosedDate { get; set; }
    }

    public class MedicationDto
    {
        public string MedicationName { get; set; }
        public string Dosage { get; set; }
        public string Frequency { get; set; }
        public string Response { get; set; }
    }

    public class ExamDto
    {
        public string ExamName { get; set; }
        public DateTime Date { get; set; }
        public Dictionary<string, object> Results { get; set; }
    }

    public class LifestyleDto
    {
        public string Diet { get; set; }
        public string ExerciseHabits { get; set; }
        public string Smoking { get; set; }
        public string AlcoholConsumption { get; set; }
    }

    public class FamilyHistoryDto
    {
        public bool Hypertension { get; set; }
        public bool Diabetes { get; set; }
        public bool HeartDisease { get; set; }
    }

    public class TreatmentForCreationDto
    {
        public string Description { get; set; }
        public string Doctor { get; set; }
        public DateTime? NextAppointment { get; set; }
        public string Status { get; set; }
    }

    public class PatientForCreationDto
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Sex { get; set; }
        public List<DiagnosisDto> Diagnosis { get; set; } = new List<DiagnosisDto>();
        public FamilyHistoryDto FamilyHistory { get; set; }
        public List<MedicationDto> CurrentMedications { get; set; } = new List<MedicationDto>();
        public List<string> Symptoms { get; set; } = new List<string>();
        public LifestyleDto Lifestyle { get; set; }
        public List<ExamDto> RecentExams { get; set; } = new List<ExamDto>();
        public List<TreatmentForCreationDto> Treatments { get; set; } = new List<TreatmentForCreationDto>();
        public List<string> GeneralRecommendations { get; set; } = new List<string>();
    }
}
