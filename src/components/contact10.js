import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text16">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text18">The Royal Oak</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    A historic countryside pub in Car Colston
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.4439532902798!2d-0.9334690869758249!3d52.97641660222122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c93d99d79bdf%3A0xb792c352bc6a4e32!2sThe%20Royal%20Oak!5e0!3m2!1sen!2suk!4v1750696686416!5m2!1sen!2suk"
              width="600"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              className="contact10-iframe"
            ></iframe>
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text20">
                    Tenman Ln, Car Colston, Nottingham NG13 8JE
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Located in the heart of Car Colston village
                  </span>
                </Fragment>
              )}
            </p>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-button-flat thq-body-small"
            >
              View On Map
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  heading1: undefined,
  location1Description: undefined,
  location1: undefined,
  location1ImageSrc: '/external/pastedimage-ra9o-1400w.png',
  location2Description: undefined,
  location2: undefined,
  content1: undefined,
  location1ImageAlt: 'The Royal Oak Image',
}

Contact10.propTypes = {
  heading1: PropTypes.element,
  location1Description: PropTypes.element,
  location1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
}

export default Contact10
