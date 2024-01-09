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
    subject: 'MOBILE APPLICATION DEVELOPMENT',
    reference: '103000642',
    type: 'Elective',
    ects: '4.50',
    semester: '3',
    intensification: 'Distributed Systems and Services (30 ECTS)',
    learning_guide: 'https://www.upm.es/comun_gauss/publico/guias/2023-24/1S/GA_10AN_103000642_1S_2023-24.pdf',
  },
  {
    id: '2',
    subject: 'OPEN DATA AND KNOWLEDGE GRAPHS',
    reference: '103000924',
    type: 'Elective',
    ects: '4.50',
    semester: '3',
    intensification: 'Artificial Intelligence (30 ECTS)',
    learning_guide: 'https://www.upm.es/comun_gauss/publico/guias/2023-24/1S/GA_10AN_103000924_1S_2023-24.pdf',
  },
  {
    id: '3',
    subject: 'ACCESSIBLE DESIGN AND ASSISTIVE PRODUCTS',
    reference: '103001037',
    type: 'Elective',
    ects: '9.00',
    semester: '3',
    intensification: 'Human-Computer Interaction (30 ECTS)',
    learning_guide: 'https://www.upm.es/comun_gauss/publico/guias/2023-24/1S/GA_10AN_103001037_1S_2023-24.pdf',
  }
];

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
    classroom: '6206',
  },
  {
    id: '2',
    exam: 'Accessible Design and Assistive Products',
    date: '17/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6306',
  },
  {
    id: '3',
    exam: 'Accessible Design and Assistive Products',
    date: '23/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6306',
  },
  {
    id: '4',
    exam: 'Mobile Application Development',
    date: '24/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '6106',
  },
]

function ProfilePage() {
  const user = {
    name: "Saul",
    surname: "Goodman",
    studies: "Computer Engineering"
  };

  return (
    <div className="centered-content" id="main-content" role='alert'>
      <Grid className="profile-page">
        <Column lg={16} md={8} sm={4} className="landing-page__banner">
          <h1 className="profile-header">Profile</h1>
          <Image
            src="/static/images/profile.jpg"
            alt="User avatar"
            width={150}
            height={150}
            className="profile-image"
          />
          <p className="name-content"><strong>{user.name} {user.surname}</strong></p>
          <p className="studies-content"><strong>Sutdies: </strong>{user.studies}</p>
          <div style={{ height: '50px' }}></div>
        </Column>
        <Column lg={16} md={8} sm={4} className="profile-page__banner">
          <h2 className="subjects-header">Subjects</h2>
          <SubjectsTable headers={headersSubjects} rows={rowsSubjects} />
          <h2 className="exams-header">Exams</h2>
          <ExamsTable headers={headersExams} rows={rowsExams} />
          <div style={{ height: '50px' }}></div>
        </Column>
      </Grid>
    </div>
  );
}

export default ProfilePage;
