import React from 'react'
import image1 from '../../src/image/f97fbe3c-7b04-4505-ae8e-420ca2026567.jpeg'


export default function Aboutus() {
  return (
  
      
   
    <div className='back'style={{ backgroundImage: `url(${image1})`,height:"100%" ,width:"100%", } }>
        <div style={{color:'white' , padding:"45vh"}}>
      <div className='aboutusdiv' style={{height:"50vh", width:"100vh", marginLeft:"",   border:'2px ', boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.5)", borderRadius:"1vh"}}>
      <p className="mb-4 font-serif text-xl" style={{padding:"1vh"}} >Welcome to Your Pharmacy, your trusted source for high-quality medicines and healthcare products. We are dedicated to serving our community with care and professionalism. Our team of experienced pharmacists is committed to providing expert advice and exceptional service.</p>
     <p style={{padding:"1vh"}}>At Your Pharmacy, your health is our top priority. We strive to make a positive impact on the well-being of our customers by offering a wide range of products and valuable health information.</p>
     </div>
      </div>
    </div>
    
  )
};


