import React, { useMemo } from 'react'
import { getHeroesByPublisher } from './../helpers';
import HeroeCard from './HeroeCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])


    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3 '>
                {
                    heroes.map(heroe => (
                        <HeroeCard key={heroe.id} {...heroe} />))
                }
            </div>
        </>
    )
}
