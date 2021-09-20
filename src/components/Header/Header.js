import styles from './Header.module.scss';

import Container from '@components/Container';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
                <p className={styles.headerTitle}>
                    Shrinkray&apos;s Store
                </p>
                <p>
                    $0.00
                </p>
            </Container>
        </header>
    )
}

export default Header;