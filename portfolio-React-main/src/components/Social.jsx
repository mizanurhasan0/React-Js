import React from "react";
import { FiFacebook, FiDribbble, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/naimsiddiqueesagor",
  },
  {
    iconName: <FaWhatsapp />,
    link: "https://i.ibb.co/G9PnRZS/271820515-654165939257037-2295671272468446317-n.jpg",
  },
  { iconName: <FiDribbble />, link: "https://www.sohosro.com/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/naim-siddiquee-sagor-814602130",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
