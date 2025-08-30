import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitationalBeep);
  audio.load();
  //poderia terminar aqui, mas pra funcionar no safari é necessário fazer alguns ajustes

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao tocar áudio', error));
  };
}