import { faker } from "@faker-js/faker";
import "./profile.scss";

export const Profile = ({ cssStyle }: { cssStyle: string }) => {
  return (
    <>
      <div>
        <img
          className={cssStyle}
          src={faker.image.urlLoremFlickr({ category: "people" })}
          alt="no photo"
        />
      </div>
    </>
  );
};
