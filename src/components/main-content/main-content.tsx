import { faker } from "@faker-js/faker";
import dot from "../../assets/dot-icon.svg";
import dots from "../../assets/dots-icon.svg";
import "./main-content.scss";

export const MainContent = () => {
  return (
    <>
      <header className="main-content-header">
        <div className="main-content-header-left-side">
          <div className="main-content-header-border-image-content">
            <img
              className="main-content-header-image-content"
              src={faker.image.urlLoremFlickr({ category: "people" })}
              alt="no photo"
            />
          </div>
          <div className="main-content-header-name-people">
            {faker.person.firstName()}
          </div>
          <div className="main-content-header-dot">
            <img src={dot} alt="dot logo" />
          </div>
          <div className="main-content-header-time">
            {faker.number.int({ min: 1, max: 24 })}h
          </div>
        </div>
        <div className="main-content-header-dots">
          <img src={dots} alt="dots logo" />
        </div>
      </header>
      <img
        className="main-content-image"
        src={faker.image.urlLoremFlickr({ category: "travel" })}
        alt="no photo"
      />
    </>
  );
};
