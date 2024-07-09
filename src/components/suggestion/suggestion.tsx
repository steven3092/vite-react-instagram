import { faker } from "@faker-js/faker";
import { Button } from "../button/button";
import { Profile } from "../profile/profile";
import { UserInfo } from "../user-info/user-info";
import { User } from "../user/user";
import "./suggestion.scss";

export const Suggestion = () => {
  const createUser = () => {
    return {
      firstName: faker.person.firstName(),
    };
  };

  const fakeUsers = Array.from({ length: 5 }, createUser);

  return (
    <div className="suggestion">
      <User>
        <div className="suggestion-right-side">
          <Profile cssStyle="image-profile-bigger" />
          <UserInfo name="Admin User" info="Admin User" />
        </div>
        <Button type="submit" classnames="suggestion-button" name="Switch" />
      </User>
      <div className="suggestion-bottom-block">
        <div className="suggestion-text">
          <span>Suggested for you</span>
          <Button type="submit" classnames="see-all-button" name="See All" />
        </div>
        <div className="suggestion-users">
          {fakeUsers.map((user, index) => (
            <div className="users-suggested">
              <User key={index}>
                <div className="suggestion-right-side">
                  <Profile cssStyle="image-profile-bigger" />
                  <UserInfo name={user.firstName} info="Suggested for you" />
                </div>
                <Button
                  type="submit"
                  classnames="suggestion-button"
                  name="Follow"
                />
              </User>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
