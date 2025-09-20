import SignOut from './../Button/SightOut';
import { Link } from "react-router-dom";
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faComments, faGear } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    return (
        <div className="flex flex-col justify-between text-center w-48 bg-gray-600 ">
            <div className='py-4'>
                <nav className='flex flex-col text-left px-3'>
                    <Link to="/" className='hover:bg-gray-700 rounded text-white inline-block px-2 py-2'>
                        <FontAwesomeIcon icon={faHome} className='mr-2' /> 
                        <span>Home</span>
                    </Link>
                    <Link to="/chat" className='hover:bg-gray-700 rounded text-white inline-block px-2 py-2'>
                        <FontAwesomeIcon icon={faComments} className='mr-2' />
                        <span>Chat</span>
                    </Link>
                </nav>
            </div>
            <div className='py-4'>
                <SignOut />
            </div>
        </div>
    );
}