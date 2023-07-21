import BlueButton from "../Shared/BlueButton";

const WebsiteCard = ({ company, website }) => {
  return (
    <div className="website-card">
      <img src="" alt="" className="website-card__img" />
      <div className="website-card__flex-container">
        <div>
          <h3 className="website-card__company-name">{company}</h3>
          <span className="website-card__company-website">{website}</span>
        </div>
        <button className="website-card__company-website-btn">
          Company Site
        </button>
      </div>
    </div>
  );
};

export default WebsiteCard;
