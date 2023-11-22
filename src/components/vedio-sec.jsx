import React from "react";
import loop from '../img/background.jpg'
import ReactPlayer from 'react-player';

const VideoSection =()=>{
    return(
        <div class="main-video">
                    <div class="image-background">
                    </div>
                    <div class="image-title">
                        <p> #1 in DXB</p>
                        <p>Festivals and Entertainments</p>
                        <a href="#" class="button-basic-1" data-aos="fade-up">All Events</a>
                    </div>
                    <div class="video-background">
                    <img src={loop} alt="BG"></img>
                    {/* <ReactPlayer
        url={loop}
        controls={false}
        playing={true}
        height="1080"
        width="1920" 
        loop={true}// This prop enables autoplay
      /> */}
                    </div>
                </div>
    )
}
export default VideoSection