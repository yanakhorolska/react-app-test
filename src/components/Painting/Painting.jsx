import PropTypes from 'prop-types';
import defaultImage from './default-thumbnail.jpg';
import css from './Painting.module.css'

export default function Painting({ img = defaultImage, title, authorUrl, authorName = "не відомо", price, quantity }) {
  
  return (
    <div className={css.card}>
      <img className={css.img} src={img} alt={title} width="400" height="500" />
      <div className={css.info}>
        <h2 className= {css.title}>"{title}"</h2>
      <p className={css.text}>Автор: <a href={authorUrl}>{authorName}</a></p>
        <p className={css.text}>Ціна: <span className={css.price}>{price}</span></p>
        
          <p className={css.text}>Доступність: {quantity < 10 ? 'закінчується' : 'в наявності' }</p>
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