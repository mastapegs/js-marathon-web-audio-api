import { FC, useState } from "react";
import { AudioContext } from "../contexts/AudioContext";

export const AudioProvider: FC = ({ children }) => {
  const [audioContext, setAudioContext] = useState<AudioContext>(
    {} as AudioContext
  );
  return (
    <>
      <AudioContext.Provider value={{ audioContext, setAudioContext }}>
        {children}
      </AudioContext.Provider>
    </>
  );
};
