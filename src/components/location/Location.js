import React from 'react'

import './Location.css';

const Location = () => {
  return (
    <div className='map-responsive'>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4628.097762800352!2d80.30501819999999!3d13.189659800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52718d56d2074b%3A0x2e80d16f50a31c62!2sGolden%20Thread%20Aari%20Works!5e1!3m2!1sen!2sin!4v1735364499761!5m2!1sen!2sin"
            width="600" 
            height="450" 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title='Golden Thread Aari Work'
        ></iframe>
    </div>
  )
}

export default Location