import React from 'react';
import InstaLogo from '../../images/social/instagram.png';
import LinkedInLogo from '../../images/social/linkedin.png';
import MailLogo from '../../images/social/mail.png';
import WhatsappLogo from '../../images/social/whatsapp.png';
import YoutubeLogo from '../../images/social/youtube.png';

const SocialMedia = () => {
  return (
    <div className='flex justify-center'>
            <img 
                src={WhatsappLogo} 
                alt='whatsapp-logo' 
                width={'50px'} 
                className='mx-3 cursor-pointer transition ease-in-out hover:scale-110' 
                onClick={() => window.open('https://api.whatsapp.com/send?phone=6369691930', '_blank') }
            />
            <img 
                src={InstaLogo} 
                alt='insta-logo' 
                width={'50px'} 
                className='mx-3 cursor-pointer transition ease-in-out hover:scale-110'
                onClick={() => window.open('https://www.instagram.com/golden_thread_aari_works/', '_blank') }
                />

            <img
                 src={LinkedInLogo} 
                 alt='linkedin-logo' 
                 width={'50px'} 
                 className='mx-3 cursor-pointer transition ease-in-out hover:scale-110'
                 onClick={() => window.open('https://www.linkedin.com/in/yuvarani-a-085158296/', '_blank') }
                 />

            <img 
                src={MailLogo} 
                alt='mail-logo' 
                width={'50px'} 
                className='mx-3 cursor-pointer transition ease-in-out hover:scale-110'
                onClick={() => window.open('mailto:[email protected]?subject=Subject&body=Body%20goes%20here')}
                />

            <img 
                src={YoutubeLogo} 
                alt='youtube-logo' 
                width={'50px'} 
                className='mx-3 cursor-pointer transition ease-in-out hover:scale-110'
                onClick={() => window.open('https://www.youtube.com/@GorgShub', '_blank') }
                />
            
        </div>
  )
}

export default SocialMedia