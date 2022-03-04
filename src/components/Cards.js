import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Want to know how we can help you?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}https://images.agoramedia.com/EHBlogImages/trevis-gleason/2016/12/The-Powers-and-Dangers-of-Self-Diagnosis-1440x810.jpg`}
              text='Take this quick test for self-diagnosis of PCOS'
              label='Self Diagnosis'
              path='/SelfDiagnosis'
            />

            <CardItem
              src={`${process.env.PUBLIC_URL}https://thecreativeshour.com/wp-content/uploads/2020/09/Period-Tracker-Bullet-Journal-10-1024x910.jpg`}
              text='Track your periods. Know your body!'
              label='Period Tracker'
              path='/PeriodTracker'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}https://th.bing.com/th/id/Ra68372c567d632312f6509b570047e14?rik=0YfLlyw0uMYuWw&riu=http%3a%2f%2fwatchfit.com%2fwp-content%2fuploads%2f2016%2f01%2fpersonalized-diet-plan_1.jpg&ehk=A1cjab4rNL16MB%2bwGgk0bP745yJ1V2XB5i2dBE6Y9RQ%3d&risl=&pid=ImgRaw`}
              text='Keep track of what you eat and when you eat it.'
              label='Diet Planner'
              path='/DietPlanner'
            />

            <CardItem
              src={`${process.env.PUBLIC_URL}https://cnet2.cbsistatic.com/img/h2UGmSEMejQ7hvFL3mznQGNuqAg=/2019/12/18/98fd63aa-d21b-49db-b0d9-570be082efed/wellness-stock-16.jpg`}
              text='Maintain a regular exercise schedule with the exercise tracker.'
              label='Exercise Tracker'
              path='/ExerciseTracker'
            />

            <CardItem
              src={`${process.env.PUBLIC_URL}https://images.everydayhealth.com/images/coronavirus/tips-to-get-the-most-out-of-telemedicine-with-gynecologist-722x406.jpg?sfvrsn=1038bc4d_1`}
              text="Let's connect you with a gynecologist!"
              label='Gyno Help'
              path='/GynoHelp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
