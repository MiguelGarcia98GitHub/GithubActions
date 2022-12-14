import { Menu } from "../menu/Menu";
import styles from "./header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Learning React</h1>
            <Menu></Menu>
        </header>
    );
}
