import './card.css';
import Button from "../Button/Button.jsx";

// eslint-disable-next-line react/prop-types
export default function Card({image, title, description, price}) {
    return (
        <div className="card">
            <div className="card__img-container" style={{background: `url(${image}) no-repeat center / cover`}}></div>

            <div className="card__content">
                <div className="content__text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="content__button">
                    <div className="price">{price} &#8381;/шт.</div>
                    <Button variant='secondary' className='card'>Заказать</Button>
                </div>
            </div>
        </div>
    )
}
