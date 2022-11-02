import React, { useState } from 'react';

function Section1() {
    const[data,setData]=useState({
        header:"FastHunt",
        childs:[
        {id:"1",p:"Dashboard",link:"https://img.icons8.com/fluency/48/000000/dashboard-layout.png"},
        {id:"2",p:"Products",link:"https://img.icons8.com/ios-filled/50/000000/grocery-shelf.png"},
        {id:"3",p:"Overview",link:"https://img.icons8.com/glyph-neue/64/000000/overview-pages-2.png"},
        {id:"4",p:"Customers",link:"https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-customers-basic-ui-elements-2.4-sbts2018-flat-sbts2018.png"},
        {id:"5",p:"Message",link:"https://img.icons8.com/ios-glyphs/30/000000/messages-mac.png"}]
    })
    return (
        <div className='v2'>
            <h2>{data.header}</h2>
{data.childs.map(x=>
    <div key={x.id} className='my-4'><img src={x.link} style={{width:"20%",height:"20%"}}/>
    <span className='ms-2'>{x.p}</span>
    </div>
    )}
  
        </div>
    );
}

export default Section1;