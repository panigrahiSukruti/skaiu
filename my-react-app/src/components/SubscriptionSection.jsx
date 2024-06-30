import React from "react";
import "./SubscriptionSection.css";

const SubscriptionSection = () => {
  return (
    <div>
        <h2 className="section-title">Subscriptions</h2>
      <div className="subscription-section">
        <p>You are currently on the <span>Ques AI Basic Plan!</span></p>
        <button className="btn-upgrade">Upgrade</button>
      </div>
      <div>
        <button className="btn-cancel">Cancel Subscription</button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
