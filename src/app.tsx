import styles from './styles/app.module.scss';
import { SmoothScroll } from './components/smoothScroll';
import { Projects } from './components/projects';
import { Earth } from './components/earth';

export const App = () => {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
    </SmoothScroll>
  );
};
