import './reviews.css';
import Slide from "../Slide/Slide.jsx";
import user1 from '../../images/user1.jpg';

export default function Reviews() {
    return (
        <section className="reviews">
            <h2>Почитайте отзывы довольных клиентов</h2>

            <div className="slider">
                <Slide image={user1}/>
            </div>

            <div className="arrows">
                <div className="arrows__prev">
                    <div className="arrow"></div>
                </div>

                <div className="arrows__next">
                    <div className="arrow"></div>
                </div>
            </div>
        </section>
    )
}
