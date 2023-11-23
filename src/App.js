import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import VideoSection from "./components/vedio-sec";
import GlobalBlocks from "./components/global-blocks";
import Events from "./components/events";
function App() {
  return (
    <div className="App">
      <div class="main-wrapper clearfix">
        {/* <!-- HEADER START
                ============================================= --> */}
        <Header></Header>
        <section class="content">
          <VideoSection />
          <GlobalBlocks></GlobalBlocks>
          <Events></Events>
          {/* <div class="table-events">
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
                                        <img width="70" height="100" src="img/upcoming-event-1.png" alt="table-1"/> 
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
                                        <img width="70" height="100" src="img/upcoming-event-2.png" alt="table-2"/> 
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
                        <div class="event-mobile">
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
                        </div>
                        <div class="button-view text-center">
                            <a href="event.html" class="button-basic-1" data-aos="fade-up">VIEW ALL EVENT</a>
                        </div>

                    </div>
                </div> */}
          {/* <div class="blog-loop">
                    <div class="container">
                        <div class="news-title grid grid-cols-12">
                            <div class="the-title col-span-6 sm:col-span-12 res:col-span-12" data-aos="fade-up">
                                <h5 class="head-title-2"> / EVENTS </h5>
                                <h2 class="head-title-1"> Upcoming Event
                                    <span class="title-end">.</span></h2>
                                <p class="dugem-text"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                            </div>
                            <div class="button-view col-span-6 sm:col-span-12 res:col-span-12" data-aos="fade-up">
                                <a href="blog.html" class="button-basic-1">ALL JOURNAL</a>
                            </div>
                        </div>
                    </div>
                    <div class="blog-slide">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-1.png" alt="latest-news-img-1"/>
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="" class="button-basic-1">Event News</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Maecenas ultrices justo metusoer quis facilisis
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href=""><span>August 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-2.png" alt="latest-news-img-2"/>
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="" class="button-basic-1">Nightlife</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Proin in orci quis elit blandit imperdiet ut eu enim
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href=""><span>April 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-3.png" alt="latest-news-img-3"/>
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="#" class="button-basic-1">Nightlife</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Donec condimentum pulvinorem velitursus vitae
                                                    </a></h3>
                                            </div>
                                            <div class="post-date">
                                                <a href="#"><span>April 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-4.png" alt="latest-news-img-4"/>
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="#" class="button-basic-1">Event News</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href="#"><span>April 30, 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swiper-post">
                                        <div class="post-thumb">
                                            <a href="single-post.html">
                                                <img src="img/latest-blog-news-5.png" alt="latest-news-img-5"/>
                                                <div class="dugem-overlay"></div>
                                            </a>
                                        </div>
                                        <div class="post-content-wrap">
                                            <div class="post-category">
                                                <a href="#" class="button-basic-1">Contest</a>
                                            </div>
                                            <div class="post-title">
                                                <h3>
                                                    <a href="single-post.html">
                                                        Vivamus pulvinar urna nec ipsum interdum blandi
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="post-date">
                                                <a href="#"><span>April 30, 2021</span></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div> */}
          {/* <div class="testimonial-block">
                    <div class="background-overlay"> </div>
                    <div class="testimonial-background"></div>
                    <div class="testimonial-wrap">
                        <div class="the-title text-center">
                            <h5 class="head-title-2"> / TESTIMONIAL </h5>
                            <h2 class="head-title-1">
                                From Great Our Clients
                                <span class="title-end">.</span>
                            </h2>
                        </div>
                        <div class="testimonial-slide">
                            <div class="swipper-button clearfix">
                                <div class="swiper-button-next">
                                    <span>Prev</span>
                                    <div class="car-page-arrow-next"></div>
                                </div>
                                <div class="swiper-button-prev">
                                    <span>Next</span>
                                    <div class="car-page-arrow-prev"></div>
                                </div>

                            </div>
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testi-content">
                                            <div class="testimonial-text">
                                                <p>"I'm the sort of person who takes a camera to dinner or a nightclub because I enjoy taking pictures of people."</p>
                                            </div>
                                            <div class="testimonial-detail-inner">
                                                <div class="testimonial-image">
                                                    <img src="img/testimonial-profile-1.png" alt="testi-1"/>
                                                </div>
                                                <div class="test-info">
                                                    <h5 class="testi-author">Amanda Zedda</h5>
                                                    <cite class="testi-job">
                                                        Photographer 
                                                    </cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testi-content">
                                            <div class="testimonial-text">
                                                <p>“A friend got me a job on the door of the Camden Palace nightclub, which quickly progressed to running the place.”</p>
                                            </div>
                                            <div class="testimonial-detail-inner">
                                                <div class="testimonial-image">
                                                    <img src="img/testimonial-profile-2.png" alt="testi-2"/>
                                                </div>
                                                <div class="test-info">
                                                    <h5 class="testi-author">Jennifer Aster</h5>
                                                    <cite class="testi-job">
                                                        Musician </cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
          {/* <div class="book-table">
                    <div class="container">
                        <div class="book-wrap news-title grid grid-cols-12 gap-24">
                            <div class="the-title col-span-6 sm:col-span-12 res:col-span-12">
                                <h5 class="head-title-2"> / RESERVATION </h5>
                                <h2 class="head-title-1"> Book A Table Now
                                    <span class="title-end">.</span></h2>
                                <p class="dugem-text"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. Sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </p>
                            </div>
                            <div class="contact-form-style col-span-6 sm:col-span-12 res:col-span-12">
                                <input type="text" name="your-name" size="40" placeholder="Name"/>
                                <input type="text" name="your-name" size="40" placeholder="Email"/>
                                <textarea name="your-message" cols="40" rows="10" placeholder="Text"></textarea>
                                <input type="submit" value="Send" class="button-basic-1"/>

                            </div>
                        </div>
                    </div>
                </div> */}
        </section>
        {/* <footer id="footer" class="footer clearfix">
                <div class="footer-wrap clearfix">
                    <div class="footer-bottom clearfix">
                        <div class="container">
                            <div class="row">
                                <div class="foot-col column column-1 text-center clearfix">
                                    <div class="logo-footer">
                                        <a href="index.html"><img src="img/dugem-logos.png" alt="Logo-Footer" /></a>
                                    </div>
                                </div>

                                <div class="foot-col column column-1 text-center clearfix">
                                    <div class="social-footer">
                                        <ul>
                                            <li class="soc-icon"><a href="#"><i class="icon icon-themify-13"></i>Twitter</a></li>
                                            <li class="soc-icon"><a href="#"><i class="icon icon-themify-17"></i>Facebook</a></li>
                                            <li class="soc-icon"><a href="#"><i class="icon icon-themify-11"></i>Google+</a></li>
                                            <li class="soc-icon"><a href="#"><i class="icon icon-social-dribbble"></i>Dribbble</a></li>
                                            <li class="soc-icon"><a href="#"><i class="icon icon-behance2"></i>Behance</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="foot-col column column-1 text-center clearfix">
                                    <div id="copyright" class="copyright-text">
                                        © Copyright 2021, Built by ThemesAwesome All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
      </div>
    </div>
  );
}

export default App;
