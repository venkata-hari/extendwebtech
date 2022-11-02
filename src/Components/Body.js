import React from 'react';

function Body(props) {
    return (
        <section className='d-flex justify-content-center'>
        <div className="d-flex  flex-column text-center">            
            <h2>Essential Virus<br/> 
            Protection for Your Pc</h2>
            <small style={{textAlign:'center'}}>
Our to top-rated Windoes anitivirus guards<br/> you from threats like ransomware<br/>
cryptolockers &hackers
            </small>
            <section>
                <form className='border-1'>
                    <input type='text' className='p-1'/>
                    <button type='button' className='border-0 text-white' style={{background:"blue",padding:"2%"}}>GetStarted</button>
                </form>
            </section>
        </div>
        </section>
    );
}

export default Body;