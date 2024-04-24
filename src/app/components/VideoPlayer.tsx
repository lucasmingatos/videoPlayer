import { useEffect, useRef } from "react";

type Props = {
    src: string; 
    isPLaying: boolean;
}

export const VideoPlayer = ({ src, isPLaying }: Props) => {

    const videoTag = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(isPLaying) {
            videoTag.current?.play();
        } else {
            videoTag.current?.pause();
        }
    });

    return (
        <video ref={videoTag} src={src} loop playsInline />
    );
}