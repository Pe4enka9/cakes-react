import './slide.css';
import quotes from '../../icons/quotes.svg';

// eslint-disable-next-line react/prop-types
export default function Slide({image}) {
    return (
        <div className="slide">
            <div className="slide__content">
                <img src={quotes} alt="Кавычки"/>
                <h3>«Результат дико порадовал, друзья были в восторге»</h3>
                <p>
                    «Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико
                    порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные.
                    Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они
                    восхитительны!)
                    Даже кушать было жалко, такая красота!)
                </p>
                <a href="#">Читать отзыв полностью</a>
            </div>

            <div className="slide__user">
                <div className="user__img" style={{background: `url(${image}) no-repeat center / cover`}}></div>

                <h4>Ирина Ларионова</h4>
                <p>Санкт-Петербург</p>
            </div>
        </div>
    )
}
