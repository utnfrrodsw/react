import React, { useRef } from 'react';

export default function VideoPlayer({ videoUrl }) {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const rewindVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const forwardVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  return (
    <div>
      <video width="320" height="240" ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={rewindVideo}>Retroceder 10s</button>
        <button onClick={forwardVideo}>Adelantar 10s</button>
      </div>
    </div>
  );
};