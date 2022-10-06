import CreateStory from "../CreateStory";
import StoryItem from "../StoryItem";

const Stories = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-2">
        <CreateStory />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
    </div>
  );
};

export default Stories;
