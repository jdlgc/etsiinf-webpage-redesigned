'use client';

import { Column, Grid, Row } from '@carbon/react';
import SubjectsTable from './SubjectsTable';
import ExamsTable from './ExamsTable';
import Image from 'next/image';

const headersSubjects = [
  {
    key: 'subject',
    header: 'Subject',
  },
  {
    key: 'reference',
    header: 'Reference',
  },
  {
    key: 'type',
    header: 'Type',
  },
  {
    key: 'ects',
    header: 'ECTS',
  },
  {
    key: 'semester',
    header: 'Semester',
  },
  {
    key: 'intensification',
    header: 'Intensification',
  },
];

const rowsSubjects = [
  {
    id: '1',
    subject: 'DESARROLLO DE APLICACIONES MÓVILES',
    reference: '103000642',
    type: 'Optativa',
    ects: '4.50',
    semester: '3',
    intensification: 'Sistemas y Servicios Distribuidos (30 ECTS)',
    learning_guide: 'https://www.upm.es/comun_gauss/publico/guias/2023-24/1S/GA_10AN_103000642_1S_2023-24.pdf',
  },
  {
    id: '2',
    subject: 'DATOS ABIERTOS Y GRAFOS DE CONOCIMIENTO (OPEN DATA AND KNOWLEDGE GRAPHS)',
    reference: '103000924',
    type: 'Optativa',
    ects: '4.50',
    semester: '3',
    intensification: 'Inteligencia Artificial (30 ECTS)',
    learning_guide: 'https://www.upm.es/comun_gauss/publico/guias/2023-24/1S/GA_10AN_103000924_1S_2023-24.pdf',
  },
  {
    id: '3',
    subject: 'ACCESSIBLE DESIGN AND ASSISTIVE PRODUCTS',
    reference: '103001037',
    type: 'Optativa',
    ects: '9.00',
    semester: '3',
    intensification: 'Interacción Persona Ordenador (30 ECTS)',
    learning_guide: 'https://www.upm.es/comun_gauss/publico/guias/2023-24/1S/GA_10AN_103001037_1S_2023-24.pdf',
  }
]

const headersExams = [
  {
    key: 'exam',
    header: 'Exam',
  },
  {
    key: 'date',
    header: 'Date',
  },
  {
    key: 'hour',
    header: 'Hour',
  },
  {
    key: 'semester',
    header: 'Semester',
  },
  {
    key: 'classroom',
    header: 'Classroom',
  },
];

const rowsExams = [
  {
    id: '1',
    exam: 'Open Data and Knowledge Graphs',
    date: '16/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '2',
    exam: 'Accessible Design and Assistive Products',
    date: '17/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '3',
    exam: 'Accessible Design and Assistive Products',
    date: '23/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '4',
    exam: 'Desarrollo de Aplicaciones Móviles',
    date: '24/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
]

function ProfilePage() {
  // Detalles del usuario
  const user = {
    nombre: "Juan",
    apellidos: "Pérez García",
    estudios: "Ingeniería Informática"
  };

  return (
    <Grid className="profile-page">
      <Column lg={16} md={8} sm={4} className="profile-page__r1">
            <h1>Profile Page</h1>
            <Image
              src="https://www.fi.upm.es/GestorTablon/GTimgPortada/4993-imagen_2023_12_19_105619500.png"
              alt="Descripción de la imagen"
              width={150}
              height={150}
              className="profile-image"
            />
            <p><strong>Nombre:</strong> {user.nombre}</p>
            <p><strong>Apellidos:</strong> {user.apellidos}</p>
            <p><strong>Estudios:</strong> {user.estudios}</p>
        <h2>Subjects</h2>
        <SubjectsTable headers={headersSubjects} rows={rowsSubjects} />
        <h2>Exams</h2>
        <ExamsTable headers={headersExams} rows={rowsExams} />
      </Column>
    </Grid>
  );
}

export default ProfilePage;


