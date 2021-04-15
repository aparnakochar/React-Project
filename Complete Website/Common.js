import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className='container-fluid p-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row p-5'>
            <div className='col-md-6 p-5  order-2 order-lg-1'>
              <h1>{props.name} <strong className='brand-name'>Aparna Kochar</strong></h1>
              <h2 className='my-3 pt-4'>We are a team of talented developer making website</h2>
              <div className='mt-3 pt-5'>
                <NavLink to={props.visit} className='btn-get-started '>{props.btname}</NavLink>
              </div>

            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img pl-5 floating'>
              <img src={props.imgsrc} className='img-fluid animated' alt='no photo' />
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Common;
