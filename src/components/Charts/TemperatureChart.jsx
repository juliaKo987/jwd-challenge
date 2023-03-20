import { tempData } from "../../assets/constants/TemperatureData";
import {  
    LineChart,
    ResponsiveContainer,
    Legend,
    Line,
    XAxis,
    YAxis,
    CartesianGrid } from 'recharts';

const TemperatureChart = () => {
    return (
        <ResponsiveContainer width="80%" aspect={3}>
            <LineChart height={800} data={tempData}>
                <CartesianGrid />
                <XAxis dataKey="time" interval={'preserveStartEnd'} />
                <YAxis type="number" domain={[20, 50]} tickCount={9} ></YAxis>
                <Legend />
                <Line type="monotone" dataKey="Vorlauftemperatur" stroke='blue' />
                <Line type="monotone" dataKey="Rücklauftemperatur" stroke='red' />
            </LineChart>
        </ResponsiveContainer>
    );
}
    
export default TemperatureChart;