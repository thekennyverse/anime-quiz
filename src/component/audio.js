import React, { useState } from 'react';

const AudioPlayer = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {}
      <audio 
        controls
        autoPlay={isPlaying}
        src="/asset/narutoSoundTrack.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}  
       />
    </div>
  );

};

export default AudioPlayer;

