import emojiSmile from "../../../../assets/emoji-smile-icon.svg";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { FormEvent, useRef } from "react";
import { Button } from "../../../button/button";
import "./story-form.scss";

interface EmojiData {
  id: string;
  name: string;
  native: string;
  unified: string;
  short_names: string[];
  keywords: string[];
}

export const StoryForm = () => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);

  const handleOnClickEmote = () => {
    if (pickerRef.current) {
      pickerRef.current.style.display = "block";
    }
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    const button = buttonRef.current;
    if (textarea && button) {
      button.style.display =
        textarea.value.length > 0 ? "inline-block" : "none";
    }
  };

  const handleOnClickEmoteSelect = (e: EmojiData) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end, text.length);
      textarea.value = before + e.native + after;

      // Update the cursor position
      textarea.selectionStart = textarea.selectionEnd = start + 2;

      // Focus the textarea after inserting the emoji
      textarea.focus();

      // Update button visibility based on new content
      handleInput();
    }

    if (pickerRef.current) {
      pickerRef.current.style.display = "none";
    }
  };

  const handleOnSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentRef.current && textareaRef.current) {
      console.log("commentRef.current.innerHTML", commentRef.current.innerHTML);

      commentRef.current.innerHTML =
        commentRef.current.innerHTML +
        `<div style="display: flex; justify-content: flex-start; margin-bottom: 4px"><b>AdminUser</b>&nbsp; ${textareaRef.current.value}</div>`;
      textareaRef.current.value = "";
    }
  };

  return (
    <>
      <div ref={commentRef} className="comment-user-section" />
      <form onSubmit={handleOnSubmitForm}>
        <div className="textarea-section">
          <textarea
            className="textarea"
            ref={textareaRef}
            placeholder="Add a comment..."
            onInput={handleInput}
            autoComplete="off"
            autoCorrect="off"
          />
          <div ref={buttonRef} className="submit-div">
            <Button type="submit" classnames="submit-button" name="Post" />
          </div>
          <div onClick={handleOnClickEmote} className="emoji-smile">
            <img src={emojiSmile} alt="emoji smile logo" />
          </div>

          <div className="picker" ref={pickerRef}>
            <Picker data={data} onEmojiSelect={handleOnClickEmoteSelect} />
          </div>
        </div>
      </form>
    </>
  );
};
