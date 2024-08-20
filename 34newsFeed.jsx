import * as React from "react";

const VideoPlaybackContext = React.createContext({
  playingVideoId: null,
  setPlayingVideoId: () => {},
});

//We need to make the values available
function VideoPlaybackProvider({ children }) {
  // Add state so every time they change there's a re render
  const [playingVideoId, setPlayingVideoId] = React.useState(null);

  //Retrurnn the VideoPlaybackContext provider so that it is available in all the app
  return (
    <VideoPlaybackContext.Provider
      //The value we want to make avaiable is the playing video id and a way to change it
      value={{ playingVideoId, setPlayingVideoId }}
    >
      {children}
    </VideoPlaybackContext.Provider>
  );
}

function VideoItem({ videoId, title, poster, src }) {
  const { playingVideoId, setPlayingVideoId } =
    React.useContext(VideoPlaybackContext);

  const videoRef = React.useRef(null);

  //The vido is active if the videoid that is curently played (the one in our context) is the same as the prop that we received
  const videoIsActive = playingVideoId === videoId;

  const handleTogglePlay = () => {
    //If the video is not active we set the id of the video that was clikced to the prop that we pass
    //And if it was active we change it to null to pause the video
    if (!videoIsActive) {
      setPlayingVideoId(videoId);
    } else {
      setPlayingVideoId(null);
    }
  };

  //We add useefect because videoIsActive is part of the context and all our video item components depend on it
  //So every time videoIsActive changes all the effects are going to run which will make all the videos re render

  React.useEffect(() => {
    if (videoIsActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoIsActive]);

  return (
    <li>
      <h3>{title}</h3>
      <article>
        <video ref={videoRef} poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
        <button
          title={videoIsActive ? "Pause" : "Play"}
          onClick={handleTogglePlay}
        >
          {videoIsActive ? "⏸" : "▶"}
        </button>
      </article>
    </li>
  );
}

function NewsFeed() {
  const videos = [
    {
      id: 1,
      title: "The React Way",
      poster: "https://react.gg/img/visualized-og2.jpg",
      src: "https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4",
    },
    {
      id: 2,
      title: "The History of the Web",
      poster: "https://react.gg/img/visualized-og1.jpg",
      src: "https://stream.mux.com/EwJPlEBa0046jGSVdYOnRsX9WnqHjytgIBXwkOt7LvVg/high.mp4",
    },
    {
      id: 3,
      title: "Rendering, Visualized",
      poster: "https://react.gg/img/visualized-og5.jpg",
      src: "https://stream.mux.com/VvQKMwPEOq5BUnc9eRN4sL5sUEZrHqWxNlCbpXSkE3I/high.mp4",
    },
  ];

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {/* Finish the news feed component se we render a video item 
        for every video and pass each their props */}
        {videos.map((video) => {
          return (
            <VideoItem
              // we need to compare this id to the one that is being played
              videoId={video.id}
              title={video.title}
              poster={video.poster}
              src={video.src}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <VideoPlaybackProvider>
      <NewsFeed />
    </VideoPlaybackProvider>
  );
}
