import './order.css';
import Button from "../Button/Button.jsx";

export default function Order() {
    return (
        <section className="order">
            <div className="order__content">
                <div className="content__text">
                    <Button className='header'>Не нашли то что нужно?</Button>
                    <h2>Приготовим заказ любой сложности по фото или эскизу</h2>
                    <p>Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>
                </div>

                <Button variant='secondary' className='header'>Загрузить фотографию</Button>
            </div>
        </section>
    )
}
