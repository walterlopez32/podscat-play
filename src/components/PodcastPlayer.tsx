import React, { useState, useEffect } from 'react';
import PodcastItem from './PodcastItem';
import styles from "./PodcastPlayer.module.css";

interface ChannelUrls {
  logo_image: {
    original?: string; // Propiedad opcional
  };
}

interface ListaType {
  id: string;
  title: string;
  description: string;
  channel: {
    urls: ChannelUrls;
  };
  urls: {
    high_mp3?: string; // Propiedad opcional
  };
}

function PodcastPlayer() {
  const [podcasts, setPodcasts] = useState<ListaType[]>([]); // Estado para almacenar la lista de podcasts
  const [loading, setLoading] = useState(true); // Estado para controlar si está cargando
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Consumir la API para obtener la lista de podcasts
    fetch('https://api.audioboom.com/audio_clips')
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un error en la carga de Datos, ...Intentelo nuevamente '); // Lanzar error si la respuesta no es OK
        }
        return response.json();
      })
      .then(data => {
        setPodcasts(data.body.audio_clips); // Guardar la lista de podcasts en el estado
        setLoading(false); // Termina de cargar cuando los datos están disponibles
      })
      .catch(error => {
        setError(error.message); // Guardar el mensaje de error en el estado
        setLoading(false); // Termina la carga si hay un error
      });
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  // Renderizado condicional basado en los estados
  if (loading) {
    return (
      <div className={styles.loader}>
        <p className={styles.loadingtext}>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div>
      {/* Renderizar la lista de podcasts solo si no hay error y ya terminó de cargar */}
      <ul className={styles.podcastList}>
        {podcasts.map(lista => (
          <PodcastItem
            key={lista.id}
            title={lista.title}
            description={lista.description}
            imageUrl={lista.channel.urls.logo_image.original || 'imagen-defecto.jpg'} // Cambiar la imagen si no está disponible
            audioUrl={lista.urls.high_mp3}  /* URL del archivo de audio */
          />
        ))}
      </ul>
    </div>
  );
}

export default PodcastPlayer;
