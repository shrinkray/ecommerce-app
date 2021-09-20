import styles from './Header.module.scss';
import {FaShoppingCart} from 'react-icons/fa';

import Container from '@components/Container';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
                <p className={styles.headerTitle}>
                    Shrinkray&apos;s Store
                </p>
                <p className={styles.headerCart}>
                    <FaShoppingCart />
                    $0.00
                </p>
            </Container>
        </header>
    )
}

export default Header;