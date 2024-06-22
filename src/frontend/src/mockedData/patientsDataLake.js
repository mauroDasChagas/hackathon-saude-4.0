import { v4 as uuidv4 } from 'uuid';

export const mockData = [
    { 
        _id: 1, 
        name: 'Ana Maria', 
        age: 58, 
        treatments: [
            {
                treatmentId: uuidv4(),
                description: 'Tratamento para hipertensão com acompanhamento mensal.',
                startDate: '2022-01-15',
                doctor: 'Dr. João Pereira',
                nextAppointment: '2023-07-01',
                status: 'ongoing'
            },
            {
                treatmentId: uuidv4(),
                description: 'Tratamento de colesterol alto com medicação diária.',
                startDate: '2021-06-01',
                endDate: '2022-01-01',
                doctor: 'Dr. João Pereira',
                status: 'completed'
            },
            {
                treatmentId: uuidv4(),
                description: 'Recuperação de cirurgia de joelho com fisioterapia semanal.',
                startDate: '2021-05-20',
                endDate: '2021-12-01',
                doctor: 'Dr. João Pereira Santos',
                status: 'completed'
            }
        ]
    },
    { 
        _id: 2, 
        name: 'Carlos Silva', 
        age: 45, 
        treatments: [
            {
                treatmentId: uuidv4(),
                description: 'Recuperação de cirurgia de joelho com fisioterapia semanal.',
                startDate: '2022-05-20',
                doctor: 'Dr. Miguel Oliveira',
                nextAppointment: '2023-06-28',
                status: 'ongoing'
            },
            {
                treatmentId: uuidv4(),
                description: 'Tratamento de fratura no braço com imobilização.',
                startDate: '2020-12-01',
                endDate: '2021-04-01',
                doctor: 'Dr. Miguel Oliveira',
                status: 'completed'
            }
        ]
    },
];
