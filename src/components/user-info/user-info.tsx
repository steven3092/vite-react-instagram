import "./user-info.scss";

export const UserInfo = ({ name, info }: { name: string; info: string }) => {
  return (
    <div className="user-info">
      <a className="user-info-name">{name}</a>
      <span
        className={
          info === "Suggested for you" ? "suggested-info" : "user-info-sub-text"
        }
      >
        {info}
      </span>
    </div>
  );
};
