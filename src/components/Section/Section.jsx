import PropTypes from 'prop-types';
import paintings from '../../animals.json';
import PaintingList from '../PaintingList/PaintingList';
import css from './Section.module.css'

export default function Section({ title }) {
    return (
        <div className={css.container}>
            {title && <h2 className={css.title}>{title}</h2>}
            <PaintingList items={paintings} />
        </div>
    )
}


Section.propTypes = {
    title: PropTypes.string,
};