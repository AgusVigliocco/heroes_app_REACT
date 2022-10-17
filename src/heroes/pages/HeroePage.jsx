import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from './../helpers'
import { Error404 } from './Error404'
import "./Styles.css"

export const HeroePage = () => {

    const { id } = useParams()
    const heroe = useMemo(() => getHeroesById(id), [id])
    const navigate = useNavigate()



    const onNavigateBack = () => {
        navigate(-1, {
            replace: true
        })
    }

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
                    <section id="intro">

                        <div id="intro-content" class="center-content">

                            <div className="center-content-inner">

                                <div className="content-section content-section-margin">

                                    <div className="content-section-grid clearfix">

                                        <a onClick={onNavigateBack} href="#" className="button nav-link">

                                            <div className="bottom"></div>

                                            <div className="top">

                                                <div className="label">Go Back</div>

                                                <div className="button-border button-border-left"></div>
                                                <div className="button-border button-border-top"></div>
                                                <div className="button-border button-border-right"></div>
                                                <div className="button-border button-border-bottom"></div>

                                            </div>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>
                </div>

            </div>


        </div>
    )
}
