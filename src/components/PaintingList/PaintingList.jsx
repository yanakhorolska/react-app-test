import PropTypes from 'prop-types';
import Painting from '../Painting/Painting';
import css from './PaintingList.module.css'
export default function PaintingList({ items }) {
    return (
        <ul className={css.list}>
            {items.map(item => (
                <li className={css.item} key={item.id}>
                    <Painting
                        title={item.title}
                        price={item.price}
                        authorName={item.author.name}
                        authorUrl={item.author.url}
                        img={item.img}
                        quantity={item.quantity}
                        type={item.type}
                    />
                </li>
            ))}
        </ul>
    )
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}