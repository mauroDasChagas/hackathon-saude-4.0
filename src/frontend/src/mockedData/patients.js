import { v4 as uuidv4 } from 'uuid';

export const mockData = [
    { 
        id: 1, 
        name: 'Ana Maria', 
        age: 58, 
        treatment: 'Tratamento para hipertensão com acompanhamento mensal.', 
        startDate: '2022-01-15', 
        doctor: 'Dr. João Pereira', 
        nextAppointment: '2023-07-01',
        treatmentId: uuidv4() 
    },
    { 
        id: 2, 
        name: 'Carlos Silva', 
        age: 45, 
        treatment: 'Recuperação de cirurgia de joelho com fisioterapia semanal.', 
        startDate: '2022-05-20', 
        doctor: 'Dr. Miguel Oliveira', 
        nextAppointment: '2023-06-28',
        treatmentId: uuidv4() 
    },
    { 
        id: 3, 
        name: 'Beatriz Oliveira', 
        age: 50, 
        treatment: 'Terapia para controle de diabetes tipo 2 com consultas quinzenais.', 
        startDate: '2021-11-10', 
        doctor: 'Dr. Lucas Fernandes', 
        nextAppointment: '2023-06-30',
        treatmentId: uuidv4() 
    },
    { 
        id: 4, 
        name: 'Daniel Souza', 
        age: 35, 
        treatment: 'Tratamento de asma com revisão de medicação a cada três meses.', 
        startDate: '2022-03-05', 
        doctor: 'Dr. Pedro Alves', 
        nextAppointment: '2023-09-15',
        treatmentId: uuidv4() 
    },
    { 
        id: 5, 
        name: 'Elisa Ferreira', 
        age: 42, 
        treatment: 'Programa de emagrecimento com dieta e exercícios supervisionados.', 
        startDate: '2022-06-01', 
        doctor: 'Dra. Mariana Silva', 
        nextAppointment: '2023-07-10',
        treatmentId: uuidv4() 
    },
    { 
        id: 6, 
        name: 'Fábio Santos', 
        age: 60, 
        treatment: 'Reabilitação cardíaca pós-infarto com sessões de atividade física monitorada.', 
        startDate: '2022-02-25', 
        doctor: 'Dr. Ricardo Lima', 
        nextAppointment: '2023-06-25',
        treatmentId: uuidv4() 
    },
];