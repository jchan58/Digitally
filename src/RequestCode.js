import React, { useState } from 'react';
import RequestCodeForm from './RequestCodeForm';
import "./monkeypox.jpeg";
import './RequestCode.css';


const RequestCode = () => {
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://greylandlimited-static.mytradespace.co.uk/images/2022/06/original/fefcb1ab982b39fb1770f504d806e2a0.jpg' alt='spaceship' />
        </div>
        <RequestCodeForm />
      </div>
    </>
  );
};

export default RequestCode;
