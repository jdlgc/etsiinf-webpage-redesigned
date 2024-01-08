'use client';

import JanuaryExamsTable from './JanuaryExamsTable';
import JuneExamsTable from './JuneExamsTable';
import JulyExamsTable from './JulyExamsTable';
import {
  Column,
  Grid,
  Accordion,
  AccordionItem
} from '@carbon/react';

const headers = [
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

const rowsJanuaryExams = [
  {
    id: '1',
    exam: 'Big Data/Data Visualization',
    date: '15/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '2',
    exam: 'Intelligent Data Analysis',
    date: '15/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '',
  },
  {
    id: '3',
    exam: 'Robótica',
    date: '15/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '4',
    exam: 'Sistemas Empotrados y Ubicuos',
    date: '16/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '',
  },
  {
    id: '5',
    exam: 'Open Data and Knowledge Graphs',
    date: '16/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '6',
    exam: 'Infraestructura de Datos Espaciales',
    date: '16/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '7',
    exam: 'Ingeniería Lingüística',
    date: '17/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '8',
    exam: 'Accessible Design and Assistive Products',
    date: '17/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '9',
    exam: 'Dirección de Empresas de TI',
    date: '17/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '10',
    exam: 'Cloud Computing and Big Data Ecosystems Design',
    date: '18/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '11',
    exam: 'Tecnologías Emergestes y Oportunidades de Negocio',
    date: '18/01/2023',
    hour: '18:00 - 21:00',
    semester: '1st semester',
    classroom: '',
  },
  {
    id: '12',
    exam: 'Profundización en Ingeniería del Software',
    date: '19/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '',
  },
  {
    id: '13',
    exam: 'Negocio en TI',
    date: '19/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '14',
    exam: 'Intelligent Systems',
    date: '22/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '',
  },
  {
    id: '15',
    exam: 'Desarrollo de Software de Seguridad en Red',
    date: '22/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '16',
    exam: 'Sistemas Interactivos',
    date: '23/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '',
  },
  {
    id: '17',
    exam: 'Accessible Design and Assistive Products',
    date: '23/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '18',
    exam: 'Minería de Modelos para la Toma de Decisiones',
    date: '23/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '19',
    exam: 'Data Processes',
    date: '24/01/2023',
    hour: '15:00 - 18:00',
    semester: '1st semester',
    classroom: '',
  },
  {
    id: '20',
    exam: 'Desarrollo de Aplicaciones Móviles',
    date: '24/01/2023',
    hour: '15:00 - 18:00',
    semester: '3rd semester',
    classroom: '',
  },
  {
    id: '21',
    exam: 'Relation and Communication Personal Skills',
    date: '24/01/2023',
    hour: '18:00 - 21:00',
    semester: '3rd semester',
    classroom: '',
  },
]

function ExamsPage() {
  return (
    <Grid className="exams-page">
      <Column lg={16} md={8} sm={4} className="exams-page__r1">
        <Accordion align='start' size='lg'>
          <AccordionItem title="January Exams">
            <JanuaryExamsTable headers={headers} rows={rowsJanuaryExams} />
            <div>
              <iframe src='https://www.fi.upm.es/docs/estudios/muii/1645_examenes_enero_23_24_MUII.pdf' width="100%" height="500px" />
            </div>
          </AccordionItem>
          <AccordionItem id="june-exams" title="June Exams">
            <JanuaryExamsTable headers={headers} rows={rowsJanuaryExams} />
            <div>
              <iframe src='https://www.fi.upm.es/docs/estudios/muii/1645_examenes_enero_23_24_MUII.pdf' width="100%" height="500px" />
            </div>
          </AccordionItem>
          <AccordionItem id="july-exams" title="July Exams">
            <JanuaryExamsTable headers={headers} rows={rowsJanuaryExams} />
            <div>
              <iframe src='https://www.fi.upm.es/docs/estudios/muii/1645_examenes_enero_23_24_MUII.pdf' width="100%" height="500px" />
            </div>
          </AccordionItem>
        </Accordion>
        {/* <div id="june-exams">
          <JuneExamsTable headers={headers} rows={rowsJuneExams} />
        </div>
        <div id="july-exams">
          <JulyExamsTable headers={headers} rows={rowsJulyExams} />
        </div> */}
      </Column>
    </Grid>

  );
}

export default ExamsPage;

