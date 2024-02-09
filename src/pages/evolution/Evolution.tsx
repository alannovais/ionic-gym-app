import { IonContent, IonGrid, IonPage } from '@ionic/react';
import React from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
const data = [
  {
    name: 'Peso',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Massa magra',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Percentual de Gordura',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Circunferencia abdominal ',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Circunferencia coxa',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Circunferencia peito',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Circunferencia braço',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const Evolution: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY scrollX>
        <IonGrid style={{ height: '30rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Evolution;
