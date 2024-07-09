import { faker } from "@faker-js/faker";
import "./story-footer.scss";
import { StoryForm } from "./story-form/story-form";
import { HeartIcon } from "../../../assets/heart-icon";
import { useState } from "react";
import { MessageCircleIcon } from "../../../assets/message-circle-icon";
import { SendIcon } from "../../../assets/send-vector-icon";
import { SaveIcon } from "../../../assets/save-vector-icon";

export const StoryFooter = () => {
  const [heartColorBorder, setHeartColorBorder] = useState<string>("#ffffff");
  const [messageCircleColorBorder, setMessageCircleColorBorder] =
    useState<string>("#ffffff");
  const [sendColorBorder, setSendColorBorder] = useState<string>("#ffffff");
  const [saveColorBorder, setSaveColorBorder] = useState<string>("#ffffff");
  const [heartColor, setHeartColor] = useState<string>("#000000");
  const [fakeNumber, setFakeNumber] = useState<number>(
    faker.number.int({ min: 0, max: 10000 })
  );

  const handleOnClickHeart = () => {
    if (heartColor === "red" && heartColorBorder === "red") {
      setHeartColorBorder("#ffffff");
      setHeartColor("#000000");
      setFakeNumber(fakeNumber - 1);
      return;
    }

    setHeartColorBorder("red");
    setHeartColor("red");
    setFakeNumber(fakeNumber + 1);
    return;
  };

  const handleOnMouseOverHeart = () => {
    if (heartColor !== "red" && heartColorBorder !== "red") {
      setHeartColorBorder("grey");
      return;
    }
  };

  const handleOnMouseLeaveHeart = () => {
    if (heartColorBorder === "grey") {
      setHeartColorBorder("#ffffff");
      return;
    }
  };

  return (
    <footer className="story-footer">
      <div className="story-footer-icons">
        <div className="story-footer-left-icons">
          <div
            className="story-footer-heart"
            onClick={handleOnClickHeart}
            onMouseOver={handleOnMouseOverHeart}
            onMouseLeave={handleOnMouseLeaveHeart}
          >
            <HeartIcon
              width="26px"
              height="26px"
              color={heartColorBorder}
              fillColor={heartColor}
            />
          </div>
          <div
            className="story-footer-message"
            onMouseOver={() => setMessageCircleColorBorder("grey")}
            onMouseLeave={() => setMessageCircleColorBorder("#ffffff")}
          >
            <MessageCircleIcon
              width="26px"
              height="26px"
              color={messageCircleColorBorder}
            />
          </div>
          <div
            className="story-footer-send"
            onMouseOver={() => setSendColorBorder("grey")}
            onMouseLeave={() => setSendColorBorder("#ffffff")}
          >
            <SendIcon width="26px" height="26px" color={sendColorBorder} />
          </div>
        </div>
        <div
          className="story-footer-save"
          onMouseOver={() => setSaveColorBorder("grey")}
          onMouseLeave={() => setSaveColorBorder("#ffffff")}
        >
          <SaveIcon width="30px" height="30px" color={saveColorBorder} />
        </div>
      </div>
      <div className="story-footer-likes">{fakeNumber} likes</div>
      <div>
        <StoryForm />
      </div>
    </footer>
  );
};
