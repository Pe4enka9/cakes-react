import './gallery.css';
import gallery1 from '../../images/gallery1.png';
import gallery2 from '../../images/gallery2.png';
import gallery3 from '../../images/gallery3.png';
import gallery4 from '../../images/gallery4.png';
import gallery5 from '../../images/gallery5.png';
import gallery6 from '../../images/gallery6.png';
import gallery7 from '../../images/gallery7.png';
import gallery8 from '../../images/gallery8.png';
import gallery9 from '../../images/gallery9.png';

export default function Gallery() {
    return (
        <section className="gallery">
            <h2>Сделали более 3.000 заказов за 2 года</h2>
            <p>Посмотрите фото реальных заказов из нашего instagram</p>

            <div className="gallery__photos">
                <img src={gallery1} alt="1"/>
                <img src={gallery2} alt="2"/>
                <img src={gallery3} alt="3"/>
                <img src={gallery4} alt="4"/>
                <img src={gallery5} alt="5"/>
                <img src={gallery6} alt="6"/>
                <img src={gallery7} alt="7"/>
                <img src={gallery8} alt="8"/>
                <img src={gallery9} alt="9"/>
            </div>
        </section>
    )
}
