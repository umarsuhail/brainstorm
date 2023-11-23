import React from "react";
import event1 from '../img/events1.jpg'
import event2 from '../img/events.jpg'

const Events =()=>{
    return(<div class="table-events">
    <div class="background-overlay"></div>
    <div class="container">

        <div class="the-title text-center" data-aos="fade-up">
            <h5 class="head-title-2"> / EVENTS </h5>
            <h2 class="head-title-1"> Upcoming Event
                <span class="title-end">.</span></h2>
            <p class="dugem-text"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
        </div>
        <table class="event">
            <tr>
                <td>Date</td>
                <td class="event-thumb-head"></td>
                <td>Artist</td>
                <td>Event</td>
                <td>Ticket</td>
            </tr>
            <tr class="space">
                <td>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td class="event-date">26/09/2021</td>
                <td class="event-thumb">
                    <a href="single-event.html">
                        <img width="70" height="100" src={event1} alt="table-1"/> 
                    </a>
                </td>
                <td class="event-artist">DJ Ocean &amp; DJ Thunder</td>
                <td class="event-title">
                    <a href="single-event.html">Global Fridays</a>
                </td>
                <td class="event-ticket-link">
                    <a href="#" class="button button-white rsvp">BOOK</a>
                    <a href="#" class="button button-white">BUY TICKET</a>
                </td>
            </tr>
            <tr class="space">
                <td>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td class="event-date">26/03/2021</td>
                <td class="event-thumb">
                    <a href="single-event.html">
                        <img width="70" height="100" src={event2} alt="table-2"/> 
                    </a>
                </td>
                <td class="event-artist">W. Illinvois</td>
                <td class="event-title">
                    <a href="single-event.html">Chicago Indrustry</a>
                </td>
                <td class="event-ticket-link">
                    <span class="sold">EXPIRED</span>
                </td>
            </tr>
            <tr class="space">
                <td>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td class="event-date">26/03/2021</td>
                <td class="event-thumb">
                    <a href="single-event.html">
                        <img width="70" height="100" src="img/upcoming-event-3.png" alt="table-3"/> 
                    </a>
                </td>
                <td class="event-artist">Apollo Xo</td>
                <td class="event-title">
                    <a href="single-event.html">The Underground</a>
                </td>
                <td class="event-ticket-link">
                    <span class="sold">EXPIRED</span>
                </td>
            </tr>
            <tr class="space">
                <td>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td class="event-date">26/05/2021</td>
                <td class="event-thumb">
                    <a href="single-event.html">
                        <img width="70" height="100" src="img/upcoming-event-4.png" alt="table-4"/> 
                    </a>
                </td>
                <td class="event-artist">Underground Music</td>
                <td class="event-title">
                    <a href="single-event.html">EDM</a>
                </td>
                <td class="event-ticket-link">
                    <span class="sold">EXPIRED</span>
                </td>
            </tr>
            <tr class="space">
                <td>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td class="event-date">26/06/2021</td>
                <td class="event-thumb">
                    <a href="single-event.html">
                        <img width="70" height="100" src="img/upcoming-event-5.png" alt="table-5"/> 
                    </a>
                </td>
                <td class="event-artist">Bhad Bhabie</td>
                <td class="event-title">
                    <a href="single-event.html">Asian Dolls</a>
                </td>
                <td class="event-ticket-link">
                    <span class="sold">EXPIRED</span>
                </td>
            </tr>
            <tr class="space">
                <td>
                    &nbsp;
                </td>
            </tr>
        </table>
        {/* <div class="event-mobile">
            <ul class="event-list">
                <li>
                    <span class="img-thumb">
                        <a href="single-event.html">
                            <img width="70" height="100" src="img/upcoming-event-1.png" alt="table-1-1"/>
                         </a>
                    </span>
                    <p><span>Date :</span> <a href="#">26/09/2022</a></p>
                    <p><span>Artist :</span> <a href="#">DJ Ocean &amp; DJ Thunder</a></p>
                    <p><span>Event :</span> <a href="#">Global Fridays</a></p>
                    <p>
                        <a href="#" class="button-basic-1">BUY TICKET</a>
                    </p>
                </li>
                <li>
                    <span class="img-thumb">
                        <a href="single-event.html">
                            <img width="70" height="100" src="img/upcoming-event-2.png" alt="table-1-2"/> 
                        </a>
                    </span>
                    <p><span>Date :</span> <a href="#">26/03/2021</a></p>
                    <p><span>Artist :</span> <a href="#">W. Illinvois</a></p>
                    <p><span>Event :</span> <a href="#">Chicago Indrustry</a></p>
                    <p>
                        <a href="#" class="button-basic-1">BUY TICKET</a>
                    </p>
                </li>
                <li>
                    <span class="img-thumb">
                        <a href="single-event.html">
                            <img width="70" height="100" src="img/upcoming-event-3.png" alt="table-1-3"/> 
                        </a>
                    </span>
                    <p><span>Date :</span> <a href="#">26/03/2021</a></p>
                    <p><span>Artist :</span> <a href="#">Apollo Xo</a></p>
                    <p><span>Event :</span> <a href="#">The Underground</a></p>
                    <p>
                        <a href="#" class="button-basic-1">BUY TICKET</a>
                    </p>
                </li>
                <li>
                    <span class="img-thumb">
                        <a href="single-event.html">
                            <img width="70" height="100" src="img/upcoming-event-4.png" alt="table-1-4"/>
                         </a>
                    </span>
                    <p><span>Date :</span> <a href="#">26/05/2021</a></p>
                    <p><span>Artist :</span> <a href="#">Underground Music</a></p>
                    <p><span>Event :</span> <a href="#">EDM</a></p>
                    <p>
                        <span class="sold">TICKET SOLD OUT</span> </p>
                </li>
                <li>
                    <span class="img-thumb">
                        <a href="single-event.html">
                            <img width="70" height="100" src="img/upcoming-event-5.png" alt="table-1-5"/> 
                        </a>
                    </span>
                    <p><span>Date :</span> <a href="#">26/06/2021</a></p>
                    <p><span>Artist :</span> <a href="#">Bhad Bhabie</a></p>
                    <p><span>Event :</span> <a href="#">Asian Dolls</a></p>
                    <p>
                        <a href="#" class="button-basic-1">BUY TICKET</a>
                    </p>
                </li>
            </ul>
        </div> */}
        <div class="button-view text-center">
            <a href="event.html" class="button-basic-1" data-aos="fade-up">VIEW ALL EVENT</a>
        </div>

    </div>
</div>)
}
export default Events