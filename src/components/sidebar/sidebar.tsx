import add from "../../assets/add-icon.svg";
import at from "../../assets/at-symbol-icon.svg";
import home from "../../assets/home-icon.svg";
import reel from "../../assets/youtube-icon.svg";
import instagram from "../../assets/Instagram-icon.svg";
import send from "../../assets/send-icon.svg";
import heart from "../../assets/heart-icon.svg";
import { Profile } from "../profile/profile";
import "./sidebar.scss";
import { HeartIcon } from "../../assets/heart-icon";
import { SendIcon } from "../../assets/send-vector-icon";
import search from "../../assets/search-icon.svg";
import explore from "../../assets/explore-icon.svg";
import lines from "../../assets/lines-icon.svg";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <header className="sidebar-header">
          <img src={instagram} alt="instagram logo" />
          <div>Instagroom</div>
        </header>
        <div className="sidebar-section">
          <span>
            <img src={home} alt="home logo" />
            <span className="sidebar-text">Home</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <img src={search} alt="search logo" />
            <span className="sidebar-text">Search</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <img src={explore} alt="explore logo" />
            <span className="sidebar-text">Explore</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <img src={reel} alt="reels logo" />
            <span className="sidebar-text">Reels</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <img src={send} alt="send logo" />
            <span className="sidebar-text">Messages</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <img src={heart} alt="heart logo" />
            <span className="sidebar-text">Notifications</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <img src={add} alt="create logo" />
            <span className="sidebar-text">Create</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <Profile cssStyle="image-profile" />
            <span className="sidebar-text">Profile</span>
          </span>
        </div>
      </nav>
      <footer>
        <div className="sidebar-section">
          <span>
            <img src={at} alt="threads logo" />
            <span className="sidebar-text">Threads</span>
          </span>
        </div>
        <div className="sidebar-section">
          <span>
            <img src={lines} alt="more logo" />
            <span className="sidebar-text">More</span>
          </span>
        </div>
      </footer>
    </aside>
  );
};
