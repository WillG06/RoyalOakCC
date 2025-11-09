import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div className="banner3-container1 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container2">
          <h2 className="banner3-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner3-text3">Welcome to The Royal Oak</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner3-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner3-text4">
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
                <span className="banner3-text5">View Menu</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1620219365994-f443a86ea626?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHB1YnxlbnwwfHx8fDE3NTA2OTc2MjN8MA&ixlib=rb-4.1.0&w=1500',
  heading1: undefined,
  content1: undefined,
  image1Alt: 'The Royal Oak Pub',
  action1: undefined,
}

Banner3.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
}

export default Banner3
