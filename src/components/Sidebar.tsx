import styles from "./Sidebar.module.css";
import React from 'react';

interface PlaylistType {
  image?: string; // Opcional
  title: string; // Requerido
  description: string; // Requerido
}

interface SidebarProps {
  playlists: PlaylistType[];
  onMenuItemClick: (id: string) => void;
  currentPlaylist: PlaylistType | null; // Permitir null
}

const Sidebar: React.FC<SidebarProps> = ({
  playlists,
  onMenuItemClick,
  currentPlaylist // Cambiado a PlaylistType | null
}) => {
  // Implementación
  return (
    <div className="sidebar">
      <button className={styles.navbarbutton} onClick={() => onMenuItemClick('new-list-id')}>
        New List.
      </button>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>
            {playlist.image && <img src={playlist.image} alt={playlist.title} width="50" height="50" />}
            <div>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          </li>
        ))}
        {/* Mostramos la playlist actual en tiempo real */}
        {currentPlaylist && currentPlaylist.title && ( // Verifica si currentPlaylist no es null
          <li>
            {currentPlaylist.image && (
              <img src={currentPlaylist.image} alt={currentPlaylist.title} width="50" height="50" />
            )}
            <div>
              <h3>{currentPlaylist.title}</h3>
              <p>{currentPlaylist.description}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
