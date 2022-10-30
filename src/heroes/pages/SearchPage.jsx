import React from 'react'
import { ButtonSearch } from '../components/ButtonSearch'
import HeroeCard from '../components/HeroeCard'
import { useForm } from './../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { getHeroesByName } from './../helpers';

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)

    const heroes = getHeroesByName(q)


    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${searchText}`)
    }


    return (

        <>
            <h1>Search</h1>
            <hr />

            <div className="column">
                <div className="col-6">
                    <form
                        onSubmit={onSearchSubmit}>
                        <input
                            className='form-control bg-dark'
                            type="text"
                            name="searchText"
                            placeholder='Search a hero'
                            id=""
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <div className='d-flex align-items-baseline justify-content-between'>
                            <ButtonSearch type="submit" />
                            <h4 className='text-end'>Results: {heroes.length}</h4>
                        </div>

                    </form>
                </div>
                <hr />

                <div className='d-flex flex-wrap justify-content-between'>

                    <hr />

                    {
                        (q === "")
                            ? <div > </div>
                            : (heroes.length === 0) &&
                            <div className="alert alert-danger text-center animate__animated animate__fadeIn col-12">
                                no hero with:  <strong> "{q}" </strong>
                            </div>
                    }

                    {
                        heroes.map(heroe => (
                            <HeroeCard key={heroe.id} {...heroe} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
