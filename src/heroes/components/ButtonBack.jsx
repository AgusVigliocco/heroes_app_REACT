
import { useNavigate, useParams } from 'react-router-dom';
import "./HeroeCard.css"

export const ButtonBack = () => {

    const { id } = useParams()

    const navigate = useNavigate()



    const onNavigateBack = () => {
        navigate(-1, {
            replace: true
        })
    }

    return (
        <section id="intro">

            <div id="intro-content" className="center-content">

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
    )
}
