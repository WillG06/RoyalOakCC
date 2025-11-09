import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <span className="MainText">
              {props.text ?? (
                <Fragment>
                  <span className="footer4-text21">Text</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text15">Link 2</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link21 ?? (
                <Fragment>
                  <span className="footer4-text16">Link 2</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text18">Link 3</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 The Royal Oak</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text12 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text19">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text17">Terms and Conditions</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text20">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link2: undefined,
  link21: undefined,
  rootClassName: '',
  termsLink: undefined,
  link3: undefined,
  privacyLink: undefined,
  cookiesLink: undefined,
  text: undefined,
}

Footer4.propTypes = {
  link2: PropTypes.element,
  link21: PropTypes.element,
  rootClassName: PropTypes.string,
  termsLink: PropTypes.element,
  link3: PropTypes.element,
  privacyLink: PropTypes.element,
  cookiesLink: PropTypes.element,
  text: PropTypes.element,
}

export default Footer4
