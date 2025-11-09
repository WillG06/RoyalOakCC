import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="hero1-header1 thq-section-padding">
      <div className="hero1-column">
        <div className="hero1-content1">
          <h1 className="hero1-heading1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero1-text76">Pub &amp; Kitchen Hours</span>
              </Fragment>
            )}
          </h1>
          <div data-thq="accordion" className="hero1-accordion1">
            <details data-thq="accordion-trigger" className="hero1-trigger1">
              <summary data-thq="accordion-summary" className="hero1-summary1">
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="hero1-text45">Opening Hours </span>
                    </Fragment>
                  )}
                </span>
                <div className="hero1-container1">
                  <div
                    data-thq="accordion-icon"
                    className="hero1-icon-container1"
                  ></div>
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content" className="hero1-content2">
              <p>
                {props.text1 ?? (
                  <Fragment>
                    <span className="hero1-text17">
                      <span className="hero1-text18">Monday</span>
                      <span>: 11:30 am – 6pm</span>
                      <br></br>
                      <br></br>
                      <span className="hero1-text22">Tuesday</span>
                      <span>: 11:30 am – 10:00 pm</span>
                      <br></br>
                      <br></br>
                      <span className="hero1-text26">Wednesday</span>
                      <span>: 11:30 am – 10:00 pm</span>
                      <br></br>
                      <br></br>
                      <span className="hero1-text30">Thursday</span>
                      <span>: 11:30 am – 10:00 pm</span>
                      <br></br>
                      <br></br>
                      <span className="hero1-text34">Friday</span>
                      <span>: 11:30 am – 10:00 pm</span>
                      <br></br>
                      <br></br>
                      <span className="hero1-text38">Saturday</span>
                      <span>: 11:30 am – 10:00 pm</span>
                      <br></br>
                      <br></br>
                      <span className="hero1-text42">Sunday</span>
                      <span>
                        : 11:30 am – 10:00 pm                                   
                                                                               
                                                                        
                      </span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div data-thq="accordion" className="hero1-accordion2">
            <details data-thq="accordion-trigger" className="hero1-trigger2">
              <summary data-thq="accordion-summary" className="hero1-summary2">
                <span>
                  {props.text6 ?? (
                    <Fragment>
                      <span className="hero1-text77">Food Serving Times</span>
                    </Fragment>
                  )}
                </span>
                <div className="hero1-container2">
                  <div
                    data-thq="accordion-icon"
                    className="hero1-icon-container2"
                  ></div>
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="hero1-container3">
                <p>
                  {props.text11 ?? (
                    <Fragment>
                      <span className="hero1-text46">
                        <span className="hero1-text47">Monday</span>
                        <span>
                          :
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="hero1-text49">Lunch </span>
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
                        <span className="hero1-text53">Tuesday</span>
                        <span>
                          : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00
                          pm)
                        </span>
                        <br></br>
                        <br></br>
                        <span className="hero1-text57">Wednesday</span>
                        <span>
                          : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00
                          pm)
                        </span>
                        <br></br>
                        <br></br>
                        <span className="hero1-text61">Thursday</span>
                        <span>
                          : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00
                          pm)
                        </span>
                        <br></br>
                        <br></br>
                        <span className="hero1-text65">Friday</span>
                        <span>
                          : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00
                          pm)
                        </span>
                        <br></br>
                        <br></br>
                        <span className="hero1-text69">Saturday</span>
                        <span>
                          : Lunch (12:00 am – 2:15 pm) Dinner (6:00 pm - 8:00
                          pm)
                        </span>
                        <br></br>
                        <br></br>
                        <span className="hero1-text73">Sunday</span>
                        <span>
                          : Sunday Roasts + Regular Menu** (12:00 am – 2:15 pm)
                          Dinner** (6:00 pm - 8:00 pm)
                        </span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero1-actions">
          <button className="thq-button-filled hero1-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero1-text80">Main action</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero1-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero1-text79">Secondary action</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <img alt={props.imageAlt} src={props.imageSrc} className="hero1-image" />
      <div className="hero1-container4">
        <div data-thq="thq-dropdown" className="hero1-thq-dropdown list-item">
          <ul data-thq="thq-dropdown-list" className="hero1-dropdown-list">
            <li data-thq="thq-dropdown" className="hero1-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="hero1-dropdown-toggle1"
              >
                <span className="hero1-text14">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="hero1-text44">Sub-menu Item</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="hero1-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="hero1-dropdown-toggle2"
              >
                <span className="hero1-text15">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="hero1-text78">Sub-menu Item</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="hero1-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="hero1-dropdown-toggle3"
              >
                <span className="hero1-text16">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="hero1-text75">Sub-menu Item</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  text1: undefined,
  text3: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxiZWVyfGVufDB8fHx8MTc0OTU3NTcyMnww&ixlib=rb-4.1.0&w=600',
  text: undefined,
  text11: undefined,
  text5: undefined,
  heading1: undefined,
  text6: undefined,
  text4: undefined,
  action2: undefined,
  action1: undefined,
  imageAlt: 'image',
}

Hero1.propTypes = {
  text1: PropTypes.element,
  text3: PropTypes.element,
  imageSrc: PropTypes.string,
  text: PropTypes.element,
  text11: PropTypes.element,
  text5: PropTypes.element,
  heading1: PropTypes.element,
  text6: PropTypes.element,
  text4: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  imageAlt: PropTypes.string,
}

export default Hero1
