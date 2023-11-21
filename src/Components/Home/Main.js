import React, { useState } from 'react';
import './main.css';

import BasicSelect from './city';
//import BasicDateTimePicker from './checkin';
//import BasicDateTimePicker1 from './checkout';

import { useNavigate } from 'react-router-dom';
import Album from './destinations';
import Footer from './Foot';



export default function MyComponent() {



  const navigate = useNavigate();


  return (
    <div className="main">
      <div className="Menu">
        <div className="item1">
          BOOK MY STAY
        </div>
        <div className="about">


          <button className="item2" onClick={() => { navigate("/blog") }}>ABOUT US</button>


        </div>
        <div className="about">
          <button className="item2" onClick={() => { navigate("/signin") }}>CONTACT</button>


        </div>

        <button className="item2" onClick={() => { navigate("/signin") }}>LOG IN</button>
      </div>

      <div>
        <Album />
        <Footer />
      </div>


    </div >
  );
}