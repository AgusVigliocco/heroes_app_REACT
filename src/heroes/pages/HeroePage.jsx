import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from './../helpers'
import { Error404 } from './Error404'
import { ButtonBack } from './../components/ButtonBack';

import "./Styles.css"

export const HeroePage = () => {

    const { id } = useParams()
    const heroe = useMemo(() => getHeroesById(id), [id])

    if (!heroe) {
        return <Error404 />
    }

    return (
        <div className="row mt-5 ">
            <div className="col-6">
                <img src={`/assets/heroes/${id}.jpg`} alt={heroe.superhero} className='img-hero-pages img-thumbnail rounded-5 animate__animated animate__fadeInLeft' />
            </div>

            <div className="col-6 animate__animated animate__fadeInRight ">
                <h3>{heroe.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <strong> Alter ego: </strong> {heroe.alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <strong> Publisher: </strong> {heroe.publisher}
                    </li>
                    <li className='list-group-item'>
                        <strong> Firts Appearance: </strong>{heroe.first_appearance}
                    </li>
                </ul>

                <h5 className='mt-3'>Characters: </h5>
                <p>{heroe.characters}</p>

                <div className="d-flex justify-content-evenly">

                    <ButtonBack />

                </div>

            </div>


        </div>
    )
}
