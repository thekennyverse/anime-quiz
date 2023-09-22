import React, { useState } from 'react';

const AudioPlayer = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {}
      <audio 
        controls
        autoPlay={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}  
      >
        <source 
          src="/Users/kennyverse/Digitalcraft/Digital craft React Project/react-quiz/anime-quiz/public/asset/Naruto - I Said Im Naruto .mp3"
          type="audio/mp3" 
        />
      </audio>
    </div>
  );

};

export default AudioPlayer;

