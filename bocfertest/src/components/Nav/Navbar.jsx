import React, {useState} from 'react';
import styles from "./Navbar.module.css";

import HamburgerIcon from '/assets/nav/Hamburger.png';
import XIcon from '/assets/nav/X.png';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Bank Of Canada FEX Tool</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? XIcon : HamburgerIcon} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="/">Design</a>
                    </li>
                    <li>
                        <a href="/">Development</a>
                    </li>
                    <li>
                        <a href="/">Resources</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};