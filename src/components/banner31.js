import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner31.css'

const Banner31 = (props) => {
  return (
    <div className="banner31-container1 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner31-image thq-img-ratio-16-9"
      />
      <div className="banner31-max-width thq-section-max-width">
        <div className="banner31-container2">
          <h2 className="banner31-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner31-text4">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner31-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner31-text5">Prop Content</span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner31-text3">Prop Content</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner31.defaultProps = {
  image1Alt: 'The Royal Oak Pub',
  action1: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1620219365994-f443a86ea626?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHB1YnxlbnwwfHx8fDE3NTA2OTc2MjN8MA&ixlib=rb-4.1.0&w=1500',
  content1: undefined,
}

Banner31.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Banner31
