import './confectioner.css';
import Button from "../Button/Button.jsx";
import woman from '../../images/woman.png';

export default function Confectioner() {
    return (
        <section className="confectioner">
            <div className="confectioner__content">
                <Button className='header'>Кто будет готовить?</Button>
                <h2>Лично приготовлю и всё красиво упакую для вашего события</h2>

                <ul>
                    <li>Проконсультирую по выбору капкейков и придумаю нестандартную идею</li>
                    <li>Приготовлю капкейки для вашего события, которые обязательно всем понравятся</li>
                    <li>Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</li>
                </ul>

                <Button variant='secondary' className='header'>Задать вопрос Юлии</Button>
            </div>

            <div className="confectioner__woman">
                <div className="woman__background">
                    <img src={woman} alt="Женщина"/>
                </div>
            </div>
        </section>
    )
}
