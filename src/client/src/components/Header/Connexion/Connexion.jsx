import { Link } from 'react-router-dom'
import '../header.css'
import './connexion.css'

export default function Connexion() {
    return (
        <nav>
            <div className='div-NavBar'>
                <div>
                    <Link to="/login" className='div-link'>Login</Link>
                </div>
                <div>
                    <Link to="/signin" className='div-link'>
                        <button className='div-signup'>SignUp</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}