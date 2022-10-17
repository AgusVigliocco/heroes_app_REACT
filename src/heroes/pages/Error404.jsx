import { useNavigate } from 'react-router-dom';
import { ButtonBack } from './../components/ButtonBack';
export const Error404 = () => {

    const navigate = useNavigate()
    const onBackToHome = () => {
        navigate('/')
    }

    return (
        <div className="row  d-flex justify-content-center">
            <div className="col-6 text-center align-item-center align-self-center animate__animated animate__bounceIn">
                <h1>ERROR 404!</h1>
                <h3>PAGE NOT FOUND</h3>
                <ButtonBack />
            </div>

            <div className='col-6'>
                <img className='img-fluid animate__animated animate__fadeInRight' src={`../../../assets/heroes/SpidermanError404.png`} />
            </div>



        </div >
    )
}
