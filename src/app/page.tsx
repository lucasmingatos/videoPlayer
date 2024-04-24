"use client"

import { useEffect, useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";

//uso do effect

const Page = () => {

  //executar o código por meio do effect, de acordo com determinado componente 
  //carregar a tela,  disparar um efeito nesse código para consultar meu servidor, por exemplo, e logo após exibir a lista, caso necessário.
  
  /*
    etapas para uso do Effect
    1 - função que vai rodar
    2 - quando vai rodar 
    3 - o que fazer quando o componente der unload
  */ 

  const [playing, setPlaying] = useState(false);

  return (
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button onClick={() => setPlaying(!playing)} className="border border-purple-400 bg-black rounded-md mb-4 text-white"> Play/Pause </button>
      </div>

      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPLaying={playing}
      />
    </div>
    
  );
}

export default Page;