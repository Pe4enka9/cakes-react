import './footer.css';
import Button from "../Button/Button.jsx";
import phone from '../../icons/phone-form.svg';
import {useState} from "react";

export default function Footer() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    return (
        <footer>
            <form>
                <h2>Чтобы сделать заказ, укажите ваш телефон</h2>
                <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>

                <div className="input-container">
                    <img src={phone} alt="phone"/>
                    <input type="tel" name="phone" id="phone" placeholder="Номер телефона" value={phoneNumber}
                           onChange={phoneChange}/>
                    <Button variant='secondary'>Сделать заказ</Button>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" name="agreement" id="agreement"/>
                    <label htmlFor="agreement">Нажимая на кнопку, вы соглашаетесь с <a href="#">условиями обработки
                        персональных данных</a></label>
                </div>
            </form>

            <div className="links">
                <a href="#">Согласие на обработку данных</a>
                <a href="#">Служба поддержки</a>
                <a href="#">Политика конфиденциальности</a>
            </div>

            <p>© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</p>
        </footer>
    )
}
