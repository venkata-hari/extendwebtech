import React from 'react';
import Section1 from './Childs/Section1'
import Section2 from './Childs/sections2';
import graph from './imgs/2.PNG'
function Chart(props) {
    return (
      <section className='d-flex justify-content-center w-100'>
<div className='d-flex flex-column  w-70'>
<section className='w-100 p-2' style={{height:"auto",boxShadow:"0 0 2px grey",background:"white"}}>
<div className='v1'>
    <Section1 className='mx-1'/>
    <Section2/>
</div>
</section>

        </div>
      </section>  
       
    );
}

export default Chart;