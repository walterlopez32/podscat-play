import { useContext } from 'react';
import { PodcastContext } from '../context/PodcastContext';
import styles from './Playbar.module.css'; // Importar los estilos de CSS Modules

const Playbar = () => {
    const { isPlaying, currentPodcast, togglePlay, seekForward, seekBackward, closePlaybar } = useContext(PodcastContext);

    if (!currentPodcast) return null; // No mostrar si no hay un podcast actual

    return (
        <div className={styles.playbar}>
            <div className={styles.playbarInfo}>
                <img src={currentPodcast.image} alt={currentPodcast.title} className={styles.podcastImage} />
                <div className={styles.podcastDetails}>
                    <h3>{currentPodcast.title}</h3>
                </div>
            </div>
            <div className={styles.playbarControls}>
                <button onClick={seekBackward}>Rewind</button>
                <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={seekForward}>Forward</button>
                <button onClick={closePlaybar}>Close</button>
            </div>
        </div>
    );
};

export default Playbar;
