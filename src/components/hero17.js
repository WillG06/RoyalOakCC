import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <img alt={props.imageAlt} src={props.imageSrc} className="hero17-image" />
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text6">Welcome to The Royal Oak</span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text7">
                  Experience the charm and warmth of our historic countryside
                  pub in Car Colston. Indulge in delicious food, refreshing
                  drinks, and a cozy atmosphere that will make you feel right at
                  home.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text8">View Menu</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Book a Table</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image1Alt: 'Exterior of The Royal Oak',
  image5Alt: 'Cozy Atmosphere at The Royal Oak',
  image4Src:
    'https://images.unsplash.com/photo-1561131506-3c48296e2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTUwMTI2Nnw&ixlib=rb-4.1.0&q=80&w=1500',
  imageAlt: 'image',
  image4Alt: 'Refreshing Drinks at The Royal Oak',
  action2: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1469806580075-c8309682eaeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTUwMTI2NHw&ixlib=rb-4.1.0&q=80&w=1500',
  heading1: undefined,
  content1: undefined,
  action1: undefined,
  image6Alt: 'Friendly Staff at The Royal Oak',
  image3Src:
    'https://images.unsplash.com/photo-1599305090505-6d7985a10277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTUwMTI2NHw&ixlib=rb-4.1.0&q=80&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1700919282307-4d3f5038444b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTUwMTI2Nnw&ixlib=rb-4.1.0&q=80&w=1500',
  imageSrc: '/external/pastedimage-ra9o-900w.png',
  image6Src:
    'https://images.unsplash.com/photo-1706702900716-99644742eee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTUwMTI2NXw&ixlib=rb-4.1.0&q=80&w=1500',
  image1Src:
    'https://images.unsplash.com/photo-1531947044935-8599a939ab85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTUwMTI2Nnw&ixlib=rb-4.1.0&q=80&w=1500',
  image3Alt: 'Delicious Food at The Royal Oak',
  rootClassName: '',
  image2Alt: 'Interior of The Royal Oak',
}

Hero17.propTypes = {
  image1Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Src: PropTypes.string,
  imageAlt: PropTypes.string,
  image4Alt: PropTypes.string,
  action2: PropTypes.element,
  image2Src: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  image6Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  imageSrc: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image2Alt: PropTypes.string,
}

export default Hero17
