import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import MemeList from '../MemeList/MemeList';
import styles from './main.module.scss';

const Main = () => {
    const memes = useSelector((state) => state.memes) || [];
    const hot = memes.filter(({upvotes, downvotes}) => upvotes - downvotes > 5);
    const regular = memes?.filter(({upvotes, downvotes}) => upvotes - downvotes <= 5);

    return (
    <div className={styles.main}>
        <Switch>
            <Route exact path="/">
                <Redirect to="/regular"/>
            </Route>
            <Route path="/hot">
                <MemeList memes={hot} type="hot" />
            </Route>
            <Route path="/regular">
                <MemeList memes={regular} type="regular" />
            </Route>
        </Switch>
    </div>
    );
};
export default Main;