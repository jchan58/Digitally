import React from 'react'
import { useNavigate } from 'react-router';
import './RequestCode.css';

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://greylandlimited-static.mytradespace.co.uk/images/2022/06/original/fefcb1ab982b39fb1770f504d806e2a0.jpg' alt='spaceship' />
        </div>
        <div className='form-content-right'>
    <form className='form'>
    <h1 className='sign'>Form Recieved
    </h1>
    <h2 className='form-labels'>We have recieved your request and will respond in 4-5 business days with more information.</h2>
    <span className='form-input-login'><a href='http://localhost:3001/success'>Home</a></span>
    </form>
    </div>
      </div>
    </>
  );
};

export default Success;