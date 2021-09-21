import styles from './Header.module.scss';
import {FaShoppingCart} from 'react-icons/fa';

import Container from '@components/Container';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
                <p className={styles.headerTitle}>
                    Hyper Bros. Trading Cards
                </p>
                <p className={styles.headerCart}>
                    <button className="snipcart-checkout">
                    <FaShoppingCart />
                    <span className="snipcart-total-price">
                    {/* $0.00 */}
                    </span>
                    </button>
                </p>
            </Container>
        </header>
    )
}

export default Header;