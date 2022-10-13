import PropTypes from 'prop-types';
import defaultImage from './default-thumbnail.jpg';
import css from './Painting.module.css';
import { HiUser, HiCurrencyEuro, HiCheckCircle } from "react-icons/hi";

export default function Painting({ img = defaultImage, title, authorUrl, authorName = "не відомо", price, quantity, type }) {
  
  return (
    <div className={css.card}>
      <div className={`${css.chip} ${css[type]}`}>{type}</div>
      <img className={css.img} src={img} alt={title} width="400" height="500" />
      <div className={css.info}>
        <h2 className= {css.title}>"{title}"</h2>
        <p className={css.text}><HiUser className={css.icon} size={25} /> Автор: <a href={authorUrl}>{authorName}</a></p>
        <p className={css.text}><HiCurrencyEuro className={css.icon} size={25}/> Ціна: <span className={css.price}>{price}</span></p>
        
          <p className={css.text}><HiCheckCircle className={css.icon} size={25}/> Доступність: {quantity < 10 ? 'закінчується' : 'в наявності' }</p>
      <button className={css.button} type="button">Додати в кошик</button>
      </div>
    </div>
  );
}

Painting.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}