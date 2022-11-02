import React from 'react';
import CPU from '../imgs/Capture.PNG'
import graph1 from '../imgs/h1.PNG'
import graph2 from '../imgs/h2.PNG'
import graph3 from '../imgs/h3.PNG'
import graph4 from '../imgs/7.PNG'
import Image1 from '../imgs/image1.PNG'
function sections2() {

    return (
        <div className='g1'>
           <nav id="nav" className='d-flex justify-content-between flex-wrap'>
 <section>
 <h2>Dashboard</h2>
<small>seraches out windowsvulernables</small>
    </section>  
    <section>
        <div style={{border:"1px solid grey",background:"white"}}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
    <input type='text' placeholder="search input" style={{border:"none"}}/>
        </div>   
        </section>         
           </nav>
<section className='d-flex flex-wrap justify-content-between' id='s1'>
    <div style={{boxShadow:"0 0 1px grey",height:"40vh",width:"30%",background:"white"}} className='d-flex justify-content-center flex-column' >
       
        <img src={CPU}/>
    </div>
    <div style={{boxShadow:"0 0 1px grey",height:"30vh",width:"30%"}} >
        <section><img src={graph1} alt='' style={{width:"100%"}}/></section>
        <section className='my-2'><img src={graph2} alt='' style={{width:"100%"}}/></section>
        <section><img src={graph3} alt='' style={{width:"100%"}}/></section>
    </div>
    <div style={{boxShadow:"0 0 1px grey",height:"30vh",width:"30%"}} className='d-flex flex-wrap justify-content-center'>
        <img src={graph4} alt='' style={{width:"100%"}}/>
    </div>
</section>
<section>
    <img src={Image1} alt=''/>
</section>
        </div>
    );
}

export default sections2;