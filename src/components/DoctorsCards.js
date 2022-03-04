import React from 'react';
import './DoctorsCards.css';
import CardItem from './CardItem';

function DoctorsCards() {
  return (
    <div className='cards_doctors'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}http://www.kauveryhospital.com/doctorimage/recent/hosur/Dr-Birundha.jpg`}
              label='Dr. K. Birundha'
              text='Occupation: Physician, medical practitioner; Activity Sectors: Medicine, Health Care; Education: MBBS, MD, DO, or MDCM; Location: Mumbai ; Mobile No. 9908782711'
            />

            <CardItem
              src={`${process.env.PUBLIC_URL}https://storage.googleapis.com/setmore-website/v2/images/industry-pages/doctors/online-doctor-appointment-2x.webp`}
              label='Dr. K. Birundha'
              text='Occupation: Pediatrician, Chiropractor; Activity Sectors: Pharmaceuticals, Related Segments.; Education: MBBS, MD, DO, or MDCM;  Location: Jammu ; Mobile No. 9908782711'
            />

           <CardItem
              src={`${process.env.PUBLIC_URL}https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOyZYSIBzFqZ197cN15C__zxHgEjjsJzMoG3lDJPTdASAyLIGtEs7p750AaMOnBcZS9pU&usqp=CAU`}
              label='Dr. K. Birundha'
              text='Occupation: Microbiology; Activity Sectors: Health care services and facilities; Education: MBBS, MD, DO, or MDCM; Location: Delhi ; Mobile No. 9908782711'
            />

            </ul>
            
            <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOyZYSIBzFqZ197cN15C__zxHgEjjsJzMoG3lDJPTdASAyLIGtEs7p750AaMOnBcZS9pU&usqp=CAU`}
              label='Dr. T.S. Neeraja '
              text='Occupation: Homeopathy, Medical Lab Technologist; Activity Sectors: Medical insurance; Education: MBBS, MD, DO, or MDCM; Location: Pune ; Mobile No. 990829711'
            />

            <CardItem
              src={`${process.env.PUBLIC_URL}https://asianpatna.aimsindia.com/wp-content/uploads/2019/08/dr-prabhat.png`}
              label='Dr. Aarthi Bharat'
              text='Occupation: Dentist ; Activity Sectors: Manufacturer of medical devices, equipment: MBBS, MD, DO, or MDCM; Location: M.P ; Mobile No. 9902922711'
            />

            <CardItem
              src={`${process.env.PUBLIC_URL}https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKO8ROKJ2FeBTkpJYzm4z_hX06kO8wjQSzub0lHuVsJdTtHM88UjJdNdKrNFuoJqlDbFc&usqp=CAU`}
              label='Dr. K. Birundha'
              text='Occupation: Audiology, Ayurveda; Activity Sectors: Medicine ; Education: MBBS, MD, DO, or MDCM; Location: Punjab ; Mobile No. 9908833711'
            />

          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default DoctorsCards;
