import React, { useState } from 'react';
import Footer from '../Footer';

import './SelfDiagnosis.css';

export default function SelfDiagnosis() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [marraigeStatus, setMarraigeStatus] = useState('');
  const [hip, setHip] = useState('');
  const [waist, setWaist] = useState('');
  const [weightGain, setWeightGain] = useState('');
  const [hairGrowth, setHairGrowth] = useState('');
  const [skinDarkening, setSkinDarkening] = useState('');
  const [hairLoss, sethairLoss] = useState('');
  const [pimples, setPimples] = useState('');
  const [fastFood, setFastFood] = useState('');
  const [regExercise, setRegEcercise] = useState('');
  // const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
        mobileNumber,
        age,
        weight,
        height,
        bmi,
        bloodGroup,
        cycleLength,
        marraigeStatus,
        hip,
        waist,
        weightGain,
        hairGrowth,
        skinDarkening,
        hairLoss,
        pimples,
        fastFood,
        regExercise,
      };
      console.log(person);
      // setPeople((people) => {
      //   return [...people, person];
      // });
      setFirstName('');
      setEmail('');
      setMobileNumber('');
      setAge('');
      setWeight('');
      setHeight('');
      setBmi('');
      setBloodGroup('');
      setCycleLength('');
      setMarraigeStatus('');
      setHip('');
      setWaist('');
      setWeightGain('');
      setHairGrowth('');
      setSkinDarkening('');
      setPimples('');
      setFastFood('');
      setRegEcercise('');
    } else {
      console.log('empty values');
    }
  };

  return (
    <>
     
      <div className='background'>
        <article>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='firstName'>Name : </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email : </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='mobileNumber'>Mobile Number : </label>
              <input
                type='Number'
                id='mobileNumber'
                name='mobileNumber'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='age'>Age : </label>
              <input
                type='number'
                id='age'
                name='age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='weight'>Weight(kg) : </label>
              <input
                type='number'
                id='weight'
                name='weight'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='height'>Height(cm) : </label>
              <input
                type='number'
                id='height'
                name='height'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='bmi'>BMI : </label>
              <input
                type='number'
                id='bmi'
                name='bmi'
                value={bmi}
                onChange={(e) => setBmi(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='bloodGroup'>Blood Group : </label>
              <input
                type='text'
                id='bloodGroup'
                name='bloodGroup'
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='cycleLength'>Cycle Length(days) : </label>
              <input
                type='number'
                id='cycleLength'
                name='cycleLength'
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='marraigeStatus'>Marriage Status(yrs) : </label>
              <input
                type='number'
                id='marraigeStatus'
                name='marraigeStatus'
                value={marraigeStatus}
                onChange={(e) => setMarraigeStatus(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='hi['>Hip(inch) : </label>
              <input
                type='number'
                id='hip'
                name='hip'
                value={hip}
                onChange={(e) => setHip(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='waist'>Waist(inch) : </label>
              <input
                type='number'
                id='waist'
                name='waist'
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='weightGain'>Weight Gain : </label>
              <select
                id='weightGain'
                name='weightGain'
                defaultValue={weightGain}
                onChange={(e) => setWeightGain(e.target.value)}
              >
                <option value={null}>Select Option</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className='form-control'>
              <label htmlFor='hairGrowth'>Hair Growth : </label>
              <select
                id='hairGrowth'
                name='hairGrowth'
                defaultValue={hairGrowth}
                onChange={(e) => setHairGrowth(e.target.value)}
              >
                <option value={null}>Select Option</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className='form-control'>
              <label htmlFor='skinDarkening'>Skin Darkening : </label>
              <select
                id='skinDarkening'
                name='skinDarkening'
                defaultValue={skinDarkening}
                onChange={(e) => setSkinDarkening(e.target.value)}
              >
                <option value={null}>Select Option</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className='form-control'>
              <label htmlFor='hairLoss'>Hair Loss : </label>
              <select
                id='hairLoss'
                name='hairLoss'
                defaultValue={hairLoss}
                onChange={(e) => sethairLoss(e.target.value)}
              >
                <option value={null}>Select Option</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className='form-control'>
              <label htmlFor='pimples'>Pimples : </label>
              <select
                id='pimples'
                name='pimples'
                defaultValue={pimples}
                onChange={(e) => setPimples(e.target.value)}
              >
                <option value={null}>Select Option</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className='form-control'>
              <label htmlFor='fastFood'>Fast Food : </label>
              <select
                id='fastFood'
                name='fastFood'
                defaultValue={fastFood}
                onChange={(e) => setFastFood(e.target.value)}
              >
                <option value={null}>Select Option</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className='form-control'>
              <label htmlFor='regExercise'>Reg. Exercise : </label>
              <select
                id='regExercise'
                name='regExercise'
                defaultValue={regExercise}
                onChange={(e) => setRegEcercise(e.target.value)}
              >
                <option value={null}>Select Option</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <button className='form button' type='submit'>
              Submit
            </button>
          </form>
        </article>
      </div>
      <Footer></Footer>
    </>
  );
}
