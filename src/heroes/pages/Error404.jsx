import { useNavigate } from 'react-router-dom';
export const Error404 = () => {

    const navigate = useNavigate()
    const onBackToHome = () => {
        navigate('/')
    }

    return (
        <div className="row container mt-5 d-flex justify-content-center">
            <div className="col-6 text-center align-item-center align-self-center">
                <h1>ERROR 404!</h1>
                <h3>PAGE NOT FOUND</h3>
            </div>

            <div className='col-6'>
                <img className='img-fluid animate__animated animate__fadeInRight' src={`../../../assets/heroes/SpidermanError404.png`} />
            </div>

            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onBackToHome}
            >Back To Home
            </button>


        </div >
    )
}
