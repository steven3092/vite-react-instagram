import { faker } from "@faker-js/faker";
import "./friends-stories.scss";

export const FriendsStory = () => {
  const createUser = () => {
    return {
      firstName: faker.person.firstName(),
    };
  };

  const fakeUsers = Array.from({ length: 9 }, createUser);

  return (
    <div className="friend-stories-content">
      {fakeUsers.map((user, index) => (
        <div key={index} className="friend-stories-subcontent">
          <div className="border-image-content">
            <img
              className="image-content"
              src={faker.image.urlLoremFlickr({ category: "people" })}
              alt="no photo"
            />
          </div>
          <div>{user.firstName}</div>
        </div>
      ))}
    </div>
  );
};
