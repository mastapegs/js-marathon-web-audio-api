import { FC, useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { AudioContext } from "../contexts/AudioContext";

const Home: FC = () => {
  const { audioContext, setAudioContext } = useContext(AudioContext);
  useEffect(() => {
    setAudioContext(new window.AudioContext());
  }, []);
  return (
    <>
      <Header />
      {audioContext && console.log(audioContext)}
    </>
  );
};

export default Home;
