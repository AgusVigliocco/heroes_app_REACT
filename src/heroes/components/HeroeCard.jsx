import React from 'react';
import { Link } from 'react-router-dom';
import './HeroeCard.css';

const HeroeCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const CharactersByHero = () => {
        return (alter_ego === characters)
            ? <> </>
            : <p>{characters}</p>
    }


    return (
        <Link to={`/heroe/${id}`} className="my-card">
            <div className='animate__animated animate__fadeIn'>
                <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive " alt={superhero} />
                <div className="profile-name">{superhero}</div>
                <div className="profile-position">{alter_ego}</div>
                <div className="profile-overview">
                    <div className="profile-overview">
                        <div className="row">
                            <div className="col-ms-4  ">
                                <h3>{publisher}</h3>
                                <p>Primera aparición: <br />{first_appearance}</p>
                                <CharactersByHero alter_ego={alter_ego} characters={characters} />
                                {/*    {(alter_ego !== characters) && <p>{characters}</p>} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HeroeCard;