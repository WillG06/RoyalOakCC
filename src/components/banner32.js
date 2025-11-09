import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner32.css'

const Banner32 = (props) => {
  return (
    <div className="banner32-container1 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner32-image thq-img-ratio-16-9"
      />
      <div className="banner32-max-width thq-section-max-width">
        <div className="banner32-container2">
          <h2 className="banner32-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner32-text3">Welcome to The Royal Oak</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner32-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner32-text4">
                  Experience the charm of our historic countryside pub in Car
                  Colston
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner32-text5">Book a Table</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner32.defaultProps = {
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1699486341238-88175cac651c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDY5OTgzMnw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  action1: undefined,
  image1Alt: 'The Royal Oak Pub',
}

Banner32.propTypes = {
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Banner32
