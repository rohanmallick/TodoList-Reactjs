import React from 'react';
import '../css/Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
let curYear = new Date();
curYear = curYear.getFullYear();


export const Footer = () => {
    return (
        <>
        <div className='box-f pb-2   bk pt-2 '>
            {/* <h1 className='display-6'>Let's work together...</h1> */}
            <h6>

            @ Copyright {curYear} by <span className='text-danger'> ROHAN MALLICK</span>
            </h6>
          
            <div className="d-flex  mt-1">
        <a href="https://www.linkedin.com/in/rohan-mallick-515317210/" className="text-dark "><GitHubIcon/></a>&nbsp;&nbsp;
        <a href="https://github.com/rohanmallick" className="text-dark"><LinkedInIcon/></a>

    </div>
            </div>
        </>
    )
}


export default Footer;
