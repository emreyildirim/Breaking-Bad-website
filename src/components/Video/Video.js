import React from "react";
import {VideoContainer} from "./Video.styles"
const Video = () => {
  return (
    
    <VideoContainer autoPlay muted loop>
      <source
        src="https://imdb-video.media-imdb.com/vi338798873/MV5BNWZlMmE2YWMtN2JiZi00ZDhkLTk2ZWUtZThhNmY4NTEyODYwXkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1610056032&Signature=IJOnMyxSVQFq06TtTJCjVixWB~cWWWJuQ5ZyN-R39h00C1bOs6CyqIL6ns7aByM~sW-ByURd-TphCnp8ASeK~nH6VXr3cImx3tAvST4z-OG~852DmqyNU335ADKX3bINby-4g-OpYqlj98Bd6pvskMzwMd8RoZMy1NXoGUFWLxXh3qwaSk1LF9-hm6h9c9ExAcmSdWpAfBgmEFvz0Au4bTSJD5-ppCOIKUl~8SoYiEmc3CGUdnxmOZSM-eTLbdmTRv89b2ap~2WN4PCcPJdG~-54CEHv33MO8E8fY0lmfnAukTV1D~snAmFGczzYEEjMOSIqsggp74DEKN-8yIdBeQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        type="video/mp4"
      />
    </VideoContainer>
    
  );
};
export default Video;
