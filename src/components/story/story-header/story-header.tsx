import { faker } from "@faker-js/faker";
import dot from "../../../assets/dot-icon.svg";
import dots from "../../../assets/dots-icon.svg";
import "./story-header.scss";

export const StoryHeader = () => {
  return (
    <header className="story-header">
      <div className="story-header-left-side">
        <div className="story-header-border-image-content">
          <img
            className="story-header-image-content"
            src={faker.image.urlLoremFlickr({ category: "people" })}
            alt="no photo"
          />
        </div>
        <div className="story-header-name-people">
          {faker.person.firstName()}
        </div>
        <div className="story-header-dot">
          <img src={dot} alt="dot logo" />
        </div>
        <div className="story-header-time">
          {faker.number.int({ min: 1, max: 24 })}h
        </div>
      </div>
      <div className="story-header-dots">
        <img src={dots} alt="dots logo" />
      </div>
    </header>
  );
};
