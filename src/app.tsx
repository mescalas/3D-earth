import styles from './styles/app.module.scss'
import {SmoothScroll} from "./components/smoothScroll"
import {Earth} from "./components/earth"
import {Projects} from "./components/projects";
export const App = () => {
    return (
        <SmoothScroll>
            <main className={styles.main}>
                <Earth />
                <Projects/>
            </main>
        </SmoothScroll>
  );
};
