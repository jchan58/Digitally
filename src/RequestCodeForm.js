import { WindowOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './RequestCode.css';

const RequestCodeForm = () => {
    const navigate = useNavigate();

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img'  src='https://greylandlimited-static.mytradespace.co.uk/images/2022/06/original/fefcb1ab982b39fb1770f504d806e2a0.jpg' alt='spaceship' />
        </div>
        <div className='form-content-right'>
          <form className='form'>
            <h1 className='sign'>Request strain
            </h1>
            <span className='form-input-login'>Interested in stains? Click <a href='http://localhost:3001/success'>here</a></span>
            <label className='form-label'>Diseases</label>
            <select className='options' name='options' defaultValue="Diseases">
                <option>Monkeypox</option>
            </select>
            <h2 className='form-labels'>Please upload a csv file with the genetic code for the new strain that you want to us to predict mutations for. Please upload a csv file with the genetic code for each protein of interest in its own list if you would like us to organize our predicted mutations according to the mutation of/conservation of these specific proteins.</h2>
            <div class="form-group files">
             <label className='form-label'>Upload genetic code for new mutation (csv)</label>
             <input type="file" class="form-control" multiple=""/>
            </div>
            <div className='padding'></div>
            <div class="form-group files">
             <label className='form-label'>Upload genetic code for proteins of interest (csv)</label>
             <input type="file" class="form-control" multiple=""/>
            </div>
            <span className='form-input-login'><a href='http://localhost:3001/success'>Request mutation</a></span>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestCodeForm;