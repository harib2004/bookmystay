import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
export default function Footer() {
    let naviga = useNavigate();
    return (
        <div className='mainFooter'>
            <div className='Cointainer'>
                <div className='row'>
                    <div className='col'>
                        <ul className='list'>
                            <h3>
                                HIRE SMART
                            </h3>
                            <hr></hr>
                            <li>0422-2979089</li>
                            <li>ABC Street, Chennai</li>
                            <li>TamilNadu, India</li>
                            <li>PIN- 612002</li>
                        </ul>
                    </div>
                    <div className='col' id='c'>
                        <ul className='list'>
                            <h3>Quick Links</h3>
                            <hr></hr>
                            <li
                                onClick={() => {
                                    naviga("/Aboutus")
                                }}>About Us</li>
                            <li
                                onClick={() => {
                                    naviga("/Department")
                                }}>Departments</li>
                            <li>Resume</li>
                            <li
                                onClick={() => {
                                    naviga("/FAQ")
                                }}>FAQs</li>
                        </ul>
                    </div>
                    <div className='col' id='c'>
                        <ul className='list'>
                            <h3>Contact us:</h3>
                            <hr></hr>
                            <li><FacebookIcon />  Facebook</li>
                            <li><LinkedInIcon />  LinkedIn</li>
                            <li><TwitterIcon />  X (Twitter)</li>
                            <li><InstagramIcon />  Instagram</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <hr></hr>
                <div className='row'>
                    <p className='col-sm'>
                        All rights reserved | HIRE SMART | Privacy
                    </p>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}