import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Hero1 from '../components/hero1'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Banner31 from '../components/banner31'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {  
  return (
    <div className="home-container1">
      <Helmet>
        <title>The Royal Oak</title>
        <meta property="og:title" content="The Royal Oak" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>  
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Awards</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Our Menu</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Find Us</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
      ></Navbar8>
      <img
        alt="image"
        src="/external/pastedimage-tp4k-500h.png"
        className="home-image"
      />
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">View Menu</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Book a Table</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Experience the charm and warmth of our historic countryside pub in
              Car Colston. Indulge in delicious food, refreshing drinks, and a
              cozy atmosphere that will make you feel right at home.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Welcome to The Royal Oak</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1546622891-02c72c1537b6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHB1YnxlbnwwfHx8fDE3NDk1MDEyNzh8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1590423859012-39c5ee2845bd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMjc4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1568644396922-5c3bfae12521?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMjc4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image4Src="https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image5Src="https://images.unsplash.com/photo-1545580140-ab89a0426d37?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image6Src="https://images.unsplash.com/photo-1607329211280-a5dc05f6117d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM5fHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1594035900144-17151c9910af?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMjc4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1574521091464-a55e7763c1e5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHB1YnxlbnwwfHx8fDE3NDk1MDEyNzh8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image10Src="https://images.unsplash.com/photo-1617538031312-0d54d0258822?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1592077408712-8725d77b2360?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxiaXJyYSUyMG1vcnJldGl8ZW58MHx8fHwxNzQ5NTAxNDI3fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image12Src="https://images.unsplash.com/photo-1610378548285-3e663bfcd3ff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYzfHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzI4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Classic Pub Atmosphere</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Fine Wines &amp; Local Ales</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Sunday Roasts</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1578707484207-cef507f0c378?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Step into a historic countryside pub with a modern touch
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Sip on our selection of fine wines and local ales
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Enjoy our delicious Sunday roasts with all the trimmings
            </span>
          </Fragment>
        }
      ></Features24>
      <Hero1
        text={
          <Fragment>
            <span className="home-text124">Opening Hours </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text125">
              <span className="home-text126">Monday</span>
              <span>: 11:30 am – 6pm</span>
              <br></br>
              <br></br>
              <span className="home-text130">Tuesday</span>
              <span>: 11:30 am – 10:00 pm</span>
              <br></br>
              <br></br>
              <span className="home-text134">Wednesday</span>
              <span>: 11:30 am – 10:00 pm</span>
              <br></br>
              <br></br>
              <span className="home-text138">Thursday</span>
              <span>: 11:30 am – 10:00 pm</span>
              <br></br>
              <br></br>
              <span className="home-text142">Friday</span>
              <span>: 11:30 am – 10:00 pm</span>
              <br></br>
              <br></br>
              <span className="home-text146">Saturday</span>
              <span>: 11:30 am – 10:00 pm</span>
              <br></br>
              <br></br>
              <span className="home-text150">Sunday</span>
              <span>
                : 11:30 am – 10:00 pm                                           
                                                                               
                                                
              </span>
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text152">Sub-menu Item</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text153">Sub-menu Item</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text154">Sub-menu Item</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text155">Food Serving Times</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="home-text156">
              <span className="home-text157">Monday</span>
              <span>
                :
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text159">Lunch </span>
              <span>
                (12:00 am – 2:15 pm)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span className="home-text163">Tuesday</span>
              <span>
                : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00 pm)                                 
              </span>
              <br></br>
              <br></br>
              <span className="home-text167">Wednesday</span>
              <span>
                : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00 pm)
              </span>
              <br></br>
              <br></br>
              <span className="home-text171">Thursday</span>
              <span>
                : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00 pm)
              </span>
              <br></br>
              <br></br>
              <span className="home-text175">Friday</span>
              <span>
                : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00 pm)
              </span>
              <br></br>
              <br></br>
              <span className="home-text179">Saturday</span>
              <span>
                : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00 pm)
              </span>
              <br></br>
              <br></br>
              <span className="home-text183">Sunday</span>
              <span>
                : Sunday Roasts + Regular Menu** (12:00 am – 2:15 pm) Dinner**
                (6:00 pm - 8:00 pm)
              </span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text185">Menu</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text186">Book a Table</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text187">Pub &amp; Kitchen Hours</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1523567830207-96731740fa71?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxiZWVyfGVufDB8fHx8MTc0OTU3NTcyMnww&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Hero1>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text188"> Our Accessibility</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text189">
              Experience the charm and history of our countryside pub in Car
              Colston.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text190">Visit The Royal Oak Today</span>
          </Fragment>
        }
        rootClassName="cta26root-class-name"
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text191">Sunday Roasts</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text192">Bar Opportunities</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text193">Kitchen Opportunities</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxwdWJ8ZW58MHx8fHwxNzQ5NTAxMzAxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text194">
              <span>
                We serve our traditional Sunday Roasts every week, made with
                fresh, local ingredients.
              </span>
              <br></br>
              <span>
                                                                               
                                                                               
                                                                    Our full
                main menu is still available, alongside a rotating specials
                board.
              </span>
              <br></br>
              <span>
                Perfect for a cozy Sunday meal with something for everyone (V/GF
                Options Available).
              </span>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text200">
              <span>
                We are looking for enthusiastic, bright people to be apart of
                out front of house team.
              </span>
              <br></br>
              <span>
                You would be working behind the bar, taking orders as well as
                waitressing and giving customers the best service possible.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Required, lunchtimes, evenings and weekends. Hours negotiable.
              </span>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text207">
              ​A rare opportunity has risen at our busy country pub for a
              kitchen assistant to help the chef prepare, cook &amp; aid in
              general kitchen duties.                                           
                                                                               
                                                                               
                                                                               
                                                                       Required
              lunchtimes and occasional weekends &amp; evenings.
            </span>
          </Fragment>
        }
      ></Features25>
      <Banner31
        action1={
          <Fragment>
            <span className="home-text208">Our Drinks</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text209">
              𝘍𝘳𝘰𝘮 𝘍𝘶𝘭𝘭-𝘉𝘰𝘥𝘪𝘦𝘥 𝘵𝘰 𝘍𝘳𝘦𝘴𝘩 &amp; 𝘍𝘳𝘶𝘪𝘵𝘺𝘙𝘦𝘥𝘴, 𝘸𝘩𝘪𝘵𝘦𝘴 𝘢𝘯𝘥 𝘳𝘰𝘴é𝘴
              𝘩𝘢𝘯𝘥𝘱𝘪𝘤𝘬𝘦𝘥 𝘵𝘰 𝘴𝘶𝘪𝘵 𝘦𝘷𝘦𝘳𝘺 𝘮𝘰𝘰𝘥 – 𝘢𝘯𝘥 𝘦𝘷𝘦𝘳𝘺 𝘮𝘦𝘢𝘭.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">
              <span>𝘈 𝘗𝘪𝘯𝘵 𝘰𝘧 𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘵𝘺</span>
              <br className="home-text212"></br>
              <span>
                𝘙𝘰𝘵𝘢𝘵𝘪𝘯𝘨 𝘵𝘢𝘱𝘴 𝘧𝘦𝘢𝘵𝘶𝘳𝘪𝘯𝘨 𝘣𝘰𝘭𝘥 𝘣𝘳𝘦𝘸𝘴, 𝘭𝘰𝘤𝘢𝘭 𝘩𝘦𝘳𝘰𝘦𝘴, 𝘢𝘯𝘥 𝘢 𝘧𝘦𝘸
                𝘴𝘶𝘳𝘱𝘳𝘪𝘴𝘦𝘴 𝘢𝘭𝘰𝘯𝘨 𝘵𝘩𝘦 𝘸𝘢𝘺.
              </span>
              <br className="home-text214"></br>
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1638366172707-aca097c47149?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUzfHxwdWJ8ZW58MHx8fHwxNzUwNjk4NzM2fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Banner31>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text215">Visit The Royal Oak</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text216">
              Enjoy Award-Winning Food and Drinks
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text217">Check Our Opening Times</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text218">Get in Touch</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text219">
              Come and experience the charm and history of our historic
              countryside pub in Car Colston.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text220">
              Indulge in a selection of delicious dishes and beverages that have
              earned us prestigious awards.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text221">
              Plan your visit by viewing our regular opening hours and special
              event schedules.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text222">
              Contact us for reservations, inquiries, or to learn more about
              hosting your event at The Royal Oak.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text223">
              The Royal Oak is my favorite place to unwind after a long day. The
              atmosphere, food, and service are top-notch!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text224">
              I always bring my friends and family to The Royal Oak for special
              occasions. They never disappoint with their delicious meals.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text225">
              As a food critic, I have visited many establishments, but The
              Royal Oak stands out for its exceptional cuisine and cozy
              ambiance.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text226">
              I stumbled upon The Royal Oak during my road trip and it was the
              highlight of my journey. I will definitely be back!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text227">
              Read what our customers have to say about their experience at The
              Royal Oak.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text228">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text229">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text230">Sarah Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text231">Michael Brown</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text232">Emily Davis</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text233">Regular Customer</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text234">Local Resident</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text235">Food Critic</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text236">First-time Visitor</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text237">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text238">Get in Touch</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text239">The Royal Oak</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text240">
              {' '}
              Car Colston, The Green, Nottinghamshire, NG13 8JE
            </span>
          </Fragment>
        }
        location1ImageSrc="/external/pastedimage-ra9o-1500w.png"
        location1Description={
          <Fragment>
            <span className="home-text241">
              A historic countryside pub in Car Colston
                        </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text242">
              Located in the heart of Car Colston village
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        text={
          <Fragment>
            <span className="home-text243">The Royal Oak - Quick Links </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text244">Home</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text245">About Us</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text246">Awards</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text247">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text248">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text249">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name"
      ></Footer4>
      <div data-thq="accordion" className="home-accordion">
        <div data-thq="accordion-content">
          <div className="home-container2">
            <p>
              Default Content for the Accordion. This can be anything that you
              want
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
