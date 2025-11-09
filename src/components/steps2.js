import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <img
              alt={props.pastedImageAlt}
              src="/external/pastedimage-ow0b-200h.png"
              className="steps2-pasted-image"
            />
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Our Awards</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text29">Visit The Royal Oak</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Come and experience the charm and history of our historic
                      countryside pub in Car Colston.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      Enjoy Award-Winning Food and Drinks
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Indulge in a selection of delicious dishes and beverages
                      that have earned us prestigious awards.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Check Our Opening Times
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Plan your visit by viewing our regular opening hours and
                      special event schedules.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text26">Get in Touch</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Contact us for reservations, inquiries, or to learn more
                      about hosting your event at The Royal Oak.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: undefined,
  pastedImageSrc:
    'data:image/png;base64,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',
  step4Title: undefined,
  step2Title: undefined,
  step3Description: undefined,
  step1Title: undefined,
  pastedImageAlt: 'pastedImage',
  step4Description: undefined,
  step1Description: undefined,
  step2Description: undefined,
}

Steps2.propTypes = {
  step3Title: PropTypes.element,
  pastedImageSrc: PropTypes.string,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step3Description: PropTypes.element,
  step1Title: PropTypes.element,
  pastedImageAlt: PropTypes.string,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps2
