import React from "react";
import themeConfig from "../config/theme.json";
import "./Checkout.css";

const Checkout = () => {
  const { link, buttonText } = themeConfig.checkout;

  const handleCheckout = () => {
    window.open(link, "_blank");
  };

  return (
    <section className="checkout">
      <div className="checkout-container">
        <div className="checkout-content">
          <div className="checkout-icon-wrapper">
            <div className="checkout-icon">
              <i className="bi bi-credit-card-fill"></i>
            </div>
          </div>

          <h2 className="checkout-title">Ready to Get Started?</h2>

          <p className="checkout-description">
            Let's be real—most projects start with a conversation, not a
            payment. But if you're ready to jump in right now, we've made it
            super easy. Choose your package and we'll kick things off this week.
          </p>

          <div className="payment-methods">
            <h3 className="payment-methods-title">We Accept</h3>
            <div className="payment-methods-grid">
              <div className="payment-method">
                <i className="bi bi-credit-card-fill"></i>
                <span>Credit Card</span>
              </div>
              <div className="payment-method">
                <i className="bi bi-bank"></i>
                <span>iDEAL</span>
              </div>
              <div className="payment-method">
                <i className="bi bi-wallet2"></i>
                <span>Bancontact</span>
              </div>
              <div className="payment-method">
                <i className="bi bi-piggy-bank-fill"></i>
                <span>SEPA Debit</span>
              </div>
              <div className="payment-method">
                <i className="bi bi-phone-fill"></i>
                <span>Mobile Pay</span>
              </div>
              <div className="payment-method">
                <i className="bi bi-bag-check-fill"></i>
                <span>Whop</span>
              </div>
              <div className="payment-method">
                <i className="bi bi-bank2"></i>
                <span>Bank Transfer</span>
              </div>
              <div className="payment-method">
                <i className="bi bi-currency-bitcoin"></i>
                <span>Crypto</span>
              </div>
            </div>
          </div>

          <div className="checkout-features">
            <div className="checkout-feature">
              <i className="bi bi-check-circle-fill"></i>
              <span>256-bit Encryption</span>
            </div>
            <div className="checkout-feature">
              <i className="bi bi-check-circle-fill"></i>
              <span>Kick Off Within 48hrs</span>
            </div>
            <div className="checkout-feature">
              <i className="bi bi-check-circle-fill"></i>
              <span>Full Refund Within 7 Days</span>
            </div>
          </div>

          <button className="checkout-button" onClick={handleCheckout}>
            <i className="bi bi-rocket-takeoff-fill"></i>
            {buttonText}
          </button>

          <p className="checkout-note">
            <i className="bi bi-shield-fill-check"></i>
            Secure Payment • Not Happy? Full Refund Within 7 Days
          </p>
        </div>

        <div className="checkout-decoration">
          <div className="floating-coin coin-1">
            <i className="bi bi-currency-dollar"></i>
          </div>
          <div className="floating-coin coin-2">
            <i className="bi bi-currency-dollar"></i>
          </div>
          <div className="floating-coin coin-3">
            <i className="bi bi-currency-dollar"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
