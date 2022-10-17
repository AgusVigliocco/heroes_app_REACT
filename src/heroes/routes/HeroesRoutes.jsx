
import { Navbar } from './../../ui/components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MarvelPage, DCPage, SearchPage, HeroePage } from '../../heroes';
import { Error404 } from '../pages/Error404';






export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DCPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='heroe/:id' element={<HeroePage />} />
                    <Route path='error404' element={<Error404 />} />

                    <Route path='/' element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
