
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {

    const navigate = useNavigate()

    const { login, logout } = useContext(AuthContext)

    const controller = new AbortController

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/'

        login('Agustin Vigliocco')

        navigate(lastPath, {
            replace: true
        })
    }
    return (


        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button
                className='btn btn-primary mt-2'
                onClick={onLogin}
            >
                Login
            </button>
        </div>



    )
}
