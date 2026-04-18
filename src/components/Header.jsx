import { format } from 'date-fns';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-5'>
            <img src={logo} alt="logo" />
            <p className='text-accent'>Journalism without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MM  MMMM, yyyy")}</p>
        </div>
    );
};

export default Header;