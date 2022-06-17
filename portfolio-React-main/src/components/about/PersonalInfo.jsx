import React from "react";

//make a function to count age from date of birth
const getAge = (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const personalInfoContent = [
  { meta: "first name", metaInfo: "Naim " },
  { meta: "Middle name", metaInfo: "Siddiquee" },
  { meta: "last name", metaInfo: "Sagor" },
  { meta: "Age", metaInfo: getAge("1995/10") },
  { meta: "Nationality", metaInfo: "Bangladeshi" },
  { meta: "Address", metaInfo: "Banaripara, Barishal" },
  { meta: "phone", metaInfo: " +8801929273397" },
  { meta: "Email", metaInfo: "naimsiddiquee@sohosro.com" },
  { meta: "Skype", metaInfo: " rokers.nelson" },
  { meta: "langages", metaInfo: "Bangla, English" },
];




const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
