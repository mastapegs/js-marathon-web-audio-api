import { FC, useState } from "react";
import { AudioContext } from "../contexts/AudioContext";

export const AudioProvider: FC = ({ children }) => {
  const [audioContext, setAudioContext] = useState<AudioContext>(
    {} as AudioContext
  );
  const [volume, setVolume] = useState(0.5);
  return (
    <>
      <AudioContext.Provider
        value={{ audioContext, setAudioContext, volume, setVolume }}
      >
        {children}
      </AudioContext.Provider>
    </>
  );
};
