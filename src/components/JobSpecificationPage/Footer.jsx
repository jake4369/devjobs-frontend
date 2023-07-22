import BlueButton from "../Shared/BlueButton";
import { useIsMobileContext } from "../../context/IsMobile";

const Footer = ({ jobRequirements }) => {
  console.log(jobRequirements);
  const { isMobile } = useIsMobileContext();
  return (
    <footer>
      {!isMobile && (
        <div>
          <h4>{jobRequirements.position}</h4>
          <span>{jobRequirements.company}</span>
        </div>
      )}
      <BlueButton btnClass="footer-btn">Apply Now</BlueButton>
    </footer>
  );
};

export default Footer;
