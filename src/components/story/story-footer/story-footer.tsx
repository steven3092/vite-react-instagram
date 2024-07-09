import { faker } from "@faker-js/faker";
import "./story-footer.scss";
import { StoryForm } from "./story-form/story-form";
import { HeartIcon } from "../../../assets/heart-icon";
import { useState } from "react";
import { MessageCircleIcon } from "../../../assets/message-circle-icon";
import { SendIcon } from "../../../assets/send-vector-icon";
import { SaveIcon } from "../../../assets/save-vector-icon";

export const StoryFooter = () => {
  const [colorIcons, setColorIcons] = useState({
    heartColorBorder: "#ffffff",
    heartColor: "#000000",
    messageCircleColorBorder: "#ffffff",
    sendColorBorder: "#ffffff",
    saveColorBorder: "#ffffff",
  });
  const [fakeNumber, setFakeNumber] = useState<number>(
    faker.number.int({ min: 0, max: 10000 })
  );

  const handleOnClickHeart = () => {
    if (
      colorIcons.heartColor === "red" &&
      colorIcons.heartColorBorder === "red"
    ) {
      setColorIcons({
        ...colorIcons,
        heartColorBorder: "#ffffff",
        heartColor: "#000000",
      });
      setFakeNumber(fakeNumber - 1);
      return;
    }

    setColorIcons({
      ...colorIcons,
      heartColorBorder: "red",
      heartColor: "red",
    });
    setFakeNumber(fakeNumber + 1);
    return;
  };

  const handleOnMouseOverHeart = () => {
    if (
      colorIcons.heartColor !== "red" &&
      colorIcons.heartColorBorder !== "red"
    ) {
      setColorIcons({
        ...colorIcons,
        messageCircleColorBorder: "#ffffff",
        sendColorBorder: "#ffffff",
        heartColorBorder: "grey",
      });
      return;
    }
  };

  const handleOnMouseLeaveHeart = () => {
    if (colorIcons.heartColorBorder === "grey") {
      setColorIcons({
        ...colorIcons,
        heartColorBorder: "#ffffff",
      });
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
              color={colorIcons.heartColorBorder}
              fillColor={colorIcons.heartColor}
            />
          </div>
          <div
            className="story-footer-message"
            onMouseOver={() =>
              setColorIcons({
                ...colorIcons,
                sendColorBorder: "#ffffff",
                heartColorBorder: "#ffffff",
                messageCircleColorBorder: "grey",
              })
            }
            onMouseLeave={() =>
              setColorIcons({
                ...colorIcons,
                messageCircleColorBorder: "#ffffff",
              })
            }
          >
            <MessageCircleIcon
              width="26px"
              height="26px"
              color={colorIcons.messageCircleColorBorder}
            />
          </div>
          <div
            className="story-footer-send"
            onMouseOver={() =>
              setColorIcons({
                ...colorIcons,
                heartColorBorder: "#ffffff",
                messageCircleColorBorder: "#ffffff",
                sendColorBorder: "grey",
              })
            }
            onMouseLeave={() =>
              setColorIcons({
                ...colorIcons,
                sendColorBorder: "#ffffff",
              })
            }
          >
            <SendIcon
              width="26px"
              height="26px"
              color={colorIcons.sendColorBorder}
            />
          </div>
        </div>
        <div
          className="story-footer-save"
          onMouseOver={() =>
            setColorIcons({
              ...colorIcons,
              messageCircleColorBorder: "#ffffff",
              saveColorBorder: "grey",
            })
          }
          onMouseLeave={() =>
            setColorIcons({
              ...colorIcons,
              saveColorBorder: "#ffffff",
            })
          }
        >
          <SaveIcon
            width="30px"
            height="30px"
            color={colorIcons.saveColorBorder}
          />
        </div>
      </div>
      <div className="story-footer-likes">{fakeNumber} likes</div>
      <div>
        <StoryForm />
      </div>
    </footer>
  );
};
