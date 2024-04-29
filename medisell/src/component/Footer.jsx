import React,{} from 'react'
import '../../src/style/footer.css'



    


function Footer() {

    // const focusValue = useRef(null);

    // const onClick =()=>{
    //     focusValue.current.focus();
    // };
  return (
    <div className=' bg-white dark:bg-slate-800 text-slate-400 bottom-0  w-screen'>
      
        <div className=' grid lg:grid-cols-3  md:grid-cols-2 md:grid-rows-2' >     
        
        <div >
            <h2 className='h2_footer'>SMH</h2>
            <div class="w-32 h-1 border-b-2 border-cyan-500 rounded-2xl mx-2 "></div>
            <div>
                <p className='p_footer'>About US</p>

                <p className='p_footer'>FAQs</p>
                <p className='p_footer'>Privacy Policy</p>
            </div>
        </div>
        <div >
            <h2 className='h2_footer'>SMH</h2>
            <div class="w-32 h-1 border-b-2 border-cyan-500 rounded-2xl mx-2 "></div>
            <div>
                <p className='p_footer'>Products</p>
                <p className='p_footer'>jop portal</p>
                <p className='p_footer'>Skill portals</p>
                <p className='p_footer'>Achievment</p>
                
            </div>
        </div>
        <div >
            <h2 className='h2_footer'>SMH</h2>
            <div class="w-32 h-1 border-b-2 border-cyan-500 rounded-2xl mx-2 "></div>
            <div>
                <p className='p_footer'>About US</p>
                <p className='p_footer'>FAQs</p>
                <p className='p_footer'>Privacy Policy</p>
            </div>
        </div>
        </div> 
    </div>
  )
}


export default Footer;

//export const value = {userName:["amit","hritik"]};
