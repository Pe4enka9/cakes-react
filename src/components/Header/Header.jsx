import './header.css';
import location from '../../icons/location.svg';
import phone from '../../icons/phone.svg';
import Button from "../Button/Button.jsx";

export default function Header() {
    return (
        <header>
            <div className="header-top">
                <a href="/">Сладкий сундук</a>

                <div className="info">
                    <div className="info__location">
                        <img src={location} alt="location"/>
                        <p>г. Санкт Петербург,<br/>ул. Куйбышева 31</p>
                    </div>

                    <div className="info__contacts">
                        <div className="contacts__phone">
                            <img src={phone} alt="phone"/>
                            <a href="tel:+78128449549">8 (812) 844-95-49</a>
                        </div>

                        <p>Ежедневно с 9:00 до 20:00</p>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="header-main">
                <div className="header-main__text">
                    <Button className='header'>Вкуснейшие</Button>
                    <h1>Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
                    <p>Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.</p>
                </div>

                <div className="header-main__catalog">
                    <Button variant='secondary' className='header'>Перейти в каталог</Button>
                    <p>9 различных<br/>видов на выбор</p>
                </div>
            </div>
        </header>
    )
}
