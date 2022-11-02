import React from 'react';
import Navbar from './Navbar'
import Body from './Body.js'
import Chart from './Chart.js'
function Main(props) {
    return (
        <div>
            <Navbar/>
            <Body/>
            <Chart/>
        </div>
    );
}

export default Main;