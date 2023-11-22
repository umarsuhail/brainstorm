import React from "react";
import event from '../img/event-img.jpg'
const GlobalBlocks=()=>{
    return ( <div class="global-block">
    <div class="container">
        <div class="global-block-wrap grid grid-cols-12 gap-8">
            <div class="global-img col-span-5 sm:col-span-12 res:col-span-12">
                <div class="item-content">
                    <div class="img-header">
                        <a class="pattern" href="#">
                            <img src={event} alt="event-img"/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="global-counter col-span-7 sm:col-span-12 res:col-span-12">
                <div class="global-title">
                    <a href="#" class="button-basic-1">Electro</a>
                    <h2 data-aos="fade-up">Global Fridays Glow Up 4.20</h2>
                    <h5 data-aos="fade-up">/ 26 SEPTEMBER 2021</h5>
                    <p class="dugem-text" data-aos="fade-up">Mauris varius porttitor suscipit. Quisque justo tortor, convallis id elit vitae, posuere ullamcorper ante. Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum vestibulum sem neque.</p>
                </div>
                <div class="global-buy" data-aos="fade-up">
                    <a href="single-event.html" class="button-basic-1">View Detail</a>
                    <a href="#" class="button-basic-2">Get Ticket</a>
                </div>
                <div class="global-countdown">
                    <div class="event-counter clearfix">
                        <div class="countdown">
                            <div class="days-count float">
                                <h3 id="days"></h3>
                                <span>Days</span>
                            </div>
                            <div class="hours-count float">
                                <h3 id="hours"></h3>
                                <span>Hours</span>
                            </div>
                            <div class="minutes-count float">
                                <h3 id="minutes"></h3>
                                <span>Minutes</span>
                            </div>
                            <div class="seconds-count float">
                                <h3 id="seconds">
                                </h3>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default GlobalBlocks