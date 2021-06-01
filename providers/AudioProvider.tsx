import { FC, useState } from "react";
import { AudioContext } from "../contexts/AudioContext";

export const AudioProvider: FC = ({ children }) => {
  const [audioContext, setAudioContext] = useState({} as AudioContext);
  return (
    <>
      <AudioContext.Provider value={{ audioContext, setAudioContext }}>
        {children}
      </AudioContext.Provider>
    </>
  );
};
