import React from "react";
import {VideoContainer} from "./Video.styles"
const Video = () => {
  return (
    
    <VideoContainer autoPlay muted loop>
      <source
        src="https://imdb-video.media-imdb.com/vi338798873/MV5BNWZlMmE2YWMtN2JiZi00ZDhkLTk2ZWUtZThhNmY4NTEyODYwXkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1609072301&Signature=oyB3IPVX66EJYnc3Yk4rL-PGcgdWORSxuEv7UFc1igXpdYp1yad56Wv8qBJMuhZgoQUgoex7yVX2DNSNqmFikQ5CVdTKaL509TnpVg5Kq16zO5TlTuTx9GulVTvWvqmGzYPCjseRDCOILr8YXsQTopJ34kYWDkw1viwv0ivcoL3b4S0G3NMvGJyAi7bSC6GgLTVQXsxcjAm93UKwtFp8J3ELYyOaYd1jQcltFNbFW-9LuPy64GUga0Xd34i8ar4TpzEcoIwYOOXKY70DHg3lCATpokwP2c4G4X9fK8Q8UQ8u7Fej7vGOScRkwfKEumFgVt8o9c7hpm2Mq2OCg6mJlQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        type="video/mp4"
      />
    </VideoContainer>
    
  );
};
export default Video;
