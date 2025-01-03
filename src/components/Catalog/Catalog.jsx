import './catalog.css';
import Card from "../Card/Card.jsx";
import card1 from '../../images/card1.jpg';
import card2 from '../../images/card2.jpg';
import card3 from '../../images/card3.jpg';
import card4 from '../../images/card4.jpg';
import card5 from '../../images/card5.jpg';
import card6 from '../../images/card6.jpg';
import card7 from '../../images/card7.jpg';
import card8 from '../../images/card8.jpg';
import card9 from '../../images/card9.jpg';

export default function Catalog() {
    return (
        <section className="catalog">
            <h2>Для любых событий и дорогих вам людей</h2>

            <div className="card-container">
                <Card image={card1} title='Кремовый замок'
                      description='Нежный крем любого цвета на выбор, вафельная основа' price='150'/>
                <Card image={card2} title='Малиновый рай' description='Воздушный крем, темная основа и ягода малины'
                      price='150'/>
                <Card image={card3} title='Фейерверк' description='Разноцветные крем, с бисквитной основой'
                      price='150'/>
                <Card image={card4} title='Шоколадный мир'
                      description='Ореховая стружка, нежный крем и шоколадная основа' price='150'/>
                <Card image={card5} title='Слезы дракона'
                      description='Нежный крем любого цвета на выбор, вафельная основа' price='150'/>
                <Card image={card6} title='Летняя фантазия'
                      description='Украшения в форме сердец, для любимого человека' price='150'/>
                <Card image={card7} title='Мыс безумия' description='Разноцветная основа, стружка и нежный крем'
                      price='150'/>
                <Card image={card8} title='Облачная сказка' description='Светлая основа, нежный крем со стружкой сверху'
                      price='150'/>
                <Card image={card9} title='Темный рыцарь' description='Тёмная основа, нежный крем и вкусные шарики'
                      price='150'/>
            </div>
        </section>
    )
}
