import styles from './styles/app.module.scss'
import {SmoothScroll} from "./components/smoothScroll"
import {Projects} from "./components/projects";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import('./components/earth').then((map) => map.Earth), {
    ssr: false,
    loading: () => <img src="/assets/placeholder.png"></img>
});
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
