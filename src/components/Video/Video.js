import React from "react";
import {VideoContainer} from "./Video.styles"
const Video = () => {
  return (
    
    <VideoContainer autoPlay muted loop>
      <source
        src="https://imdb-video.media-imdb.com/vi338798873/MV5BNWZlMmE2YWMtN2JiZi00ZDhkLTk2ZWUtZThhNmY4NTEyODYwXkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1608495873&Signature=vEZ0JFgl~HrWr-jRFP5s-anOXxFUWFylOBeTr-26Ghrgbny8MAft-uXqmpH0KFgncjMn81LnAXdHA8Rpd8XnFugtlZ9LkCR5x6bibJBq3~3k8~5I8G~wP46cEyCazgIACTKVUTg4jPxgcYc6J3kHO0UYPcqm8CiV07pu6uV0GAvlcMdfNdqNqHbBWUbShqQ0fDItJdwsqYJ2Mn1kc0~5FcnCNjFfEgYeIhEZPuCuSaxO68NI7K6KnawKCTwVAWsPH~sGTfolw9xNlPYIUjH3SfV9HqD~OwWib2VrLeFZSXKL8~xeW0eIFw~IaQicrmvDbzL-JaqDf6UjdVBBDMiEdg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        type="video/mp4"
      />
    </VideoContainer>
    
  );
};
export default Video;
