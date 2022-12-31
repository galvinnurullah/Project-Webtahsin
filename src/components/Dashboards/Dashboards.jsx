import React from "react";
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const Dashboards = () => {
    const data = [
        {
            name: 'Senin',
            uv: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: 'Selasa',
            uv: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: 'Rabu',
            uv: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: 'Kamis',
            uv: 1480,
            pv: 1200,
            amt: 1228,
        },
        {
            name: 'Jumat',
            uv: 1520,
            pv: 1108,
            amt: 1100,
        },
        {
            name: 'Sabtu',
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
        {
            name: 'Minggu',
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
    ];

    const data01 = [
        { name: 'Razif', value: 400 },
        { name: 'Hasbi', value: 300 },
        { name: 'Galvin', value: 300 },
        { name: 'Ihsan', value: 200 },
        { name: 'Syahandika', value: 200 },

    ];


    return (
        <div className="">
            <br/><br/><br/>  <br/><br/><br/>  <br/><br/><br/>
            <div className="mb-5 d-flex flex-row justify-content-around">
                <div class="card" style={{ width: '24rem' }}>
                    <div class="card-body " style={{ backgroundColor: 'blue' }}>
                        <h5 class="card-title" style={{ color: 'white', textAlign: 'center' }}>KETERANGAN LEVEL</h5>
                        <br/>
                        <h2 class="card-text" style={{ color: 'white', textAlign: 'center' }}>Level 1 : Dasar</h2>
                        <br/>
                    </div>
                </div>
                <div class="card" style={{ width: '24rem' }}>
                    <div class="card-body" style={{ backgroundColor: 'blue' }}>
                        <h5 class="card-title" style={{ color: 'white', textAlign: 'center' }}>PERINGKAT</h5>
                        <br/>
                        <h2 class="card-text" style={{ color: 'white', textAlign: 'center' }}>3 dari 6 orang</h2>
                        <br/>
                    </div>
                </div>

                <div class="card" style={{ width: '24rem' }}>
                    <div class="card-body" style={{ backgroundColor: 'blue' }}>
                        <h5 class="card-title" style={{ color: 'white', textAlign: 'center' }}>JUMLAH LATIHAN</h5>
                        <br/>
                        <h2 class="card-text" style={{ color: 'white', textAlign: 'center' }}>4x Streak</h2>
                        <br/>
                    </div>
                </div>

            </div>
            <br/>
            <center><h1> Grafik Latihan</h1></center>
            <br/>
            <div className="d-flex flex-row justify-content-around">
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                > 

                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>

                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#144272"
                        label
                    />
                <Tooltip />
                </PieChart>

            </div>
        </div>

    );
};

export default Dashboards;
