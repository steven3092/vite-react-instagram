import { StoryHeader } from "./story-header/story-header";
import { StoryFooter } from "./story-footer/story-footer";

export const Story = ({ story }: { story: string }) => {
  return (
    <>
      <StoryHeader />
      <img className="main-container-image" src={story} alt="no photo" />
      <StoryFooter />
    </>
  );
};
