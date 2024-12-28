import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import './App.css';
import SocialMedia from './components/socialMedia/SocialMedia';

function App() {
  return (
    <div>
       <h2 className='my-10 text-3xl font-extrabold text-center text-white underline'>Connect with us</h2>
        <div className='flex pt-3 justify-around items-center flex-col lg:flex-row'>
            <div className='mx-8'>
                <p className='font-semibold text-3xl pb-5 text-white'>Golden Thread Aari Works</p>
                <p className='pb-5 text-white'><FaCalendarAlt /> Monday - Saturday</p>
                <p className='pb-5 text-white'><FaLocationDot />No.3, Malligai Street, Girija Nagar, Ernavur, Chennai - 600057</p>
                <p className='pb-9 text-white'><FaPhoneAlt />+91 6369691930</p>
                <SocialMedia />
            </div>
            <div className="m-9">
                <iframe title='map' width="400" height="450" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=golden%20thread%20aari%20work+(Golden%20Thread%20Aari%20works)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
            </div>
        </div>
    </div>
  );
}

export default App;
