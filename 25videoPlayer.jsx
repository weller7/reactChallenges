import * as React from "react";
import { ref } from "react"


export default function VideoPlayer() {
//Add state to keep track of isPlaying
const [isPlaying, setIsPlaying] = React.useState(false);
//Add ref to get acces to the video player
const videoRef = React.useRef()

 
  const handleTogglePlay = () => {
    if(videoRef.current){
      //if the video is playing we use ref to pause it
      if (isPlaying){
        videoRef.current.pause()
        //if not we use ref to play it
      } else {
        videoRef.current.play()
      }
    //Toggle the icon 
      setIsPlaying(!isPlaying)
    }
  };

  return (
    <section className="container">
      <h1>Video Player</h1>
      <article>
        <video ref={videoRef} poster="https://image.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/thumbnail.webp">
          <source
            src="https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <button
            title={isPlaying ? "Pause" : "Play"}
            onClick={handleTogglePlay}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>
      </article>
    </section>
  );
}

