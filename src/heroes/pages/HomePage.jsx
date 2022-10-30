

/* import { HeroesList } from '../components'
import HeroeCard from '../components/HeroeCard'
import { heroes } from '../data/Heroes' */

import { Link } from 'react-router-dom';
import './Styles.css'



export const HomePage = () => {

    return (
        <div className=''>
            <h1>Home</h1>
            <hr />

            <div className="d-flex align-items-center">
                <div className='mx-3'>
                    <Link to={'/marvel'}>
                        <img className='img-fluid img-asociaciones animate__animated animate__fadeInLeft ' src="../../../assets/heroes/Marvel_Logo.svg.png" alt="" />
                    </Link>
                </div>

                <div className='mx-3'>
                    <Link to={'/dc'}>
                        <img className='img-fluid img-asociaciones animate__animated animate__fadeInRight' src="../../../assets/heroes/DC-Comics-Logo.png" alt="" />
                    </Link>
                </div>
            </div>

        </div>
    )
}


