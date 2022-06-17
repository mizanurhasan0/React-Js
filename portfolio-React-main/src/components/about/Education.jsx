import React from "react";

const educationContent = [
  {
    year: "2018",
    subject: "Finance BBA",
    degree: "Bachelor DEGREE",
    institute: "University of Liberal Arts Bangladesh",
  },
  {
    year: "2013",
    subject: "Business Studies",
    degree: "Higher Secondary Certificate",
    institute: "Dhaka City College",
  },
  {
    year: "2011",
    subject: "Business Studies",
    degree: "Secondary Education Certificate",
    institute: "Chakhar Fazlul Huq Institution",
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img className="eduIcon" src="img/about/edu.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.subject}
            <span className="place open-sans-font">{val.degree}</span>
          </h5>
          <p className="open-sans-font">{val.institute}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
