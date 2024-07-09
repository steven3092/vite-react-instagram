import { faker } from "@faker-js/faker";
import "./main-container.scss";
import { FriendsStory } from "../friends-stories/friends-stories";
import { Suggestion } from "../suggestion/suggestion";
import { Story } from "../story/story";

export const MainContainer = () => {
  const createStories = () => {
    return {
      story: faker.image.urlLoremFlickr({ category: "travel" }),
    };
  };

  const fakeStories = Array.from({ length: 15 }, createStories);

  return (
    <section className="section-container">
      <main className="main-container">
        <div className="story-container">
          <FriendsStory />
          {fakeStories.map((story, index) => (
            <article key={index}>
              <Story story={story.story} />
            </article>
          ))}
        </div>
        <div className="main-right-container">
          <Suggestion />
        </div>
      </main>
    </section>
  );
};
