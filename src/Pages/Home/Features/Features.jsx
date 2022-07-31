import React from "react";
import "./Features.scss";
import Image from "../../../Image/Image";
function Features() {
  return (
    <div id="blogs" className="feature__section">
      <div className="features__container">
        <div className="feature__heading-wrapper">
          <p>Our Community</p>
          <h1>Community Main Feature</h1>
          <h4>
            The wise man therefore always holds in these matters{" "}
            <br /> to this principle of selection.
          </h4>
        </div>
        <div className="feature__card_container-parent">
          <div className="single__card-wrapper">
            <div className="single__card_image">
              <img src={Image.icon} alt="" />
            </div>
            <div className="card__text-wrapper">
              <h2>Members, Friends</h2>
              <p>
                Members, Friends Connection ( like followers ),
                Private Message
              </p>
            </div>
          </div>
          <div className="single__card-wrapper">
            <div className="single__card_image">
              <img src={Image.icon1} alt="" />
            </div>
            <div className="card__text-wrapper">
              <h2>Groups</h2>
              <p>
              Your users can create groups to let other users to join and talk
              </p>
            </div>
          </div>
          <div className="single__card-wrapper">
            <div className="single__card_image">
              <img src={Image.icon2} alt="" />
            </div>
            <div className="card__text-wrapper">
              <h2>Forum</h2>
              <p>
              Forum is ready by BBPress. Your users can make topics and talk.
              </p>
            </div>
          </div>
          <div className="single__card-wrapper">
            <div className="single__card_image">
              <img src={Image.icon3} alt="" />
            </div>
            <div className="card__text-wrapper">
              <h2>Custom Module</h2>
              <p>
              You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.
              </p>
            </div>
          </div>
          <div className="single__card-wrapper">
            <div className="single__card_image">
              <img src={Image.icon4} alt="" />
            </div>
            <div className="card__text-wrapper">
              <h2>List Builder</h2>
              <p>
              Members, Groups list can be modified by drag & drop live builder.
              </p>
            </div>
          </div>
          <div className="single__card-wrapper">
            <div className="single__card_image">
              <img src={Image.icon5} alt="" />
            </div>
            <div className="card__text-wrapper">
              <h2>List Scroll Effects</h2>
              <p>
              8 different scroll effects are ready.
You can always change by your tastes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
