import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { downvote, upvote} from '../../store';
import styles from './memeitem.module.scss';
import Button from '@material-ui/core/Button';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

const MemeItem =({id, img, title, downvotes, upvotes, type}) => {
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className={styles.memeItemContainer}>
            <div className={classnames([styles.container, styles.memeTitle])}>
                <h2>{title}</h2>
                <StarBorderIcon className={classnames([styles.favBtn, {[styles.active]: isFav}])}
                onClick={() => setIsFav((prevState) => !prevState)}/>
            </div>
            <img src={img} alt="meme" className={styles.container}/>
            <div className={classnames([styles.container, styles.btnContainer])}>
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(upvote(id))}
                    startIcon={<ThumbUp />}

                    className={classnames([
                        styles.btnupvote,
                        {[styles.hot]: type=== 'hot'},

                    ])}>
                    {upvotes}
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    type="button"
                    startIcon={<ThumbDown />}

                    onClick={() => dispatch(downvote(id))}
                    className={classnames([
                        styles.btndownvote,
                        {[styles.regular]: type=== 'regular'},

                ])}>
                    {downvotes}
                </Button>
            </div>
        </div>
    );
};

export default MemeItem;
