import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Paper } from '@material-ui/core';
import "./styles.css";

function newData(time, amount) {
    return { time, amount };
  }

const data = [
    newData('2020-10-01', 1257),
    newData('2020-10-02', 3690),
    newData('2020-10-03', 4321),
    newData('2020-10-04', 1234),
    newData('2020-10-05', 3344)  
  ]

class AdminChart extends React.Component {
    render() {
        return (
        <div className='box'>      
                  
                <LineChart className='ch' width={700} height={300} data={data}>
                    <CartesianGrid />
                    <XAxis dataKey="time" />
                    <YAxis datakey='amount'/>
                    <Tooltip />
                    <Line type='linear' dataKey="amount" stroke="#8884d8" />
                </LineChart>
        </div>
        )
    }

}

export default AdminChart;