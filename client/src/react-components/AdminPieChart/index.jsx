import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
	{ name: 'Food', value: 500 }, { name: 'Travel', value: 300 },
	{ name: 'Fashion', value: 50 }, { name: 'Lifestyle', value: 200 },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class AdminPieChart extends React.Component {
	render() {
		return (
			<PieChart width={730} height={250}>
            <Pie data={data} cx="30%" cy="50%" outerRadius={80} label>
                {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))
                }
            </Pie>
            <Tooltip />
            </PieChart>
                    );
	}
}

export default AdminPieChart;
