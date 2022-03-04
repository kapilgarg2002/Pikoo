import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import DoctorsCards from '../DoctorsCards';

export default function GynoHelp() {
  return (
    <>
      <h1 className='GynoHelp'>
        <DoctorsCards />
      </h1>;
      <Footer></Footer>
    </>
  );
}
