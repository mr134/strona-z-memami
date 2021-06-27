import {Link, useRouteMatch} from 'react-router-dom';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot'
import classnames from 'classnames';
import styles from './navbar.module.scss';

const Navbar = () => {
    const hot = useRouteMatch('/hot');
    const regular = useRouteMatch('/regular');
    return  (
        <nav className={styles.heared}>
            <ul className={styles.navLinks}>
                <Link 
                    to="hot"
                    className={classnames([styles.navLinks, {[styles.active]:hot}])}>
                        <WhatshotIcon/> Hot
                </Link>
                <Link 
                    to="regular"
                    className={classnames([styles.navLinks, {[styles.active]:regular}])}>
                        <AcUnitOutlinedIcon/> Regular
                </Link>
            </ul>
        </nav>
    );
};
export default Navbar;