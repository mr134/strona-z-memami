import MemeItem from './MemeItem';
import PropTypes from 'prop-types';
import styles from './memeList.module.scss';
const MemeList = ({ memes, type}) => {
    if (memes.length === 0) {
        return <h1 className={styles.nomemes}>No memes in this category</h1>
    }
    return (
        <div className={styles.memList}>
            {memes.map(({id, title, img, downvotes, upvotes}) => (
                <MemeItem
                id={id}
                key={id}
                title={title}
                img={img}
                downvotes={downvotes}
                upvotes= {upvotes}
                type={type}
                />
            ))}
        </div>
    );
};


export default MemeList;