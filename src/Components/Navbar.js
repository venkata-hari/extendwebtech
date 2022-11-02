import React from 'react';

function App() {

 
  return (
    <nav className='p-3'>
    <section className='d-flex justify-content-between'>  
   <div>FatHunt</div>
   <section className='d-flex p-1'>
   <div style={{marginLeft:"2%"}}>Product</div>
   <div className='mx-3'>Solutions</div>
   <div>Encrypation</div>
   <div className='mx-3'>name</div>
   </section>
   <section className='d-flex'>
    <div>log in</div>
   <button className="py-2 text-white border-0 ms-3" style={{background:"blue",borderRadius:"10%"}}>GetStarted</button>
   </section>
   </section>
    </nav>
  );
}

export default App;
