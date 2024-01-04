import { useParams } from "react-router-dom";
import DatabaseData from "../Data/Database/database";
import ibshamPic from "./../../assets/ProfilePics/ibsham.jpeg";
import aishamPic from "./../../assets/ProfilePics/aishampic.jpeg";
import menu from "./../../assets/menu.svg";
import home from "./../../assets/Feed/home.svg";
import messages from "./../../assets/Feed/messages.svg";
import video from "./../../assets/Feed/video.svg";
import { useContext, useState } from "react";
import ThemeContext from "../../services/ThemeContext";
import { Link } from "react-router-dom";

const Feed = (): JSX.Element => {
  const { id } = useParams();
  const idNumber = Number(id);
  const user = DatabaseData.find((user) => {
    return Number(id) === user.id;
  });
  const [darkTheme] = useContext(ThemeContext);
  const [posts, setPosts] = useState(user?.posts || [""]);
  const [postData, setPostData] = useState("");
  const doPost = (newPost: string) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <section className="feed p-2">
      <nav className="flex justify-between items-center border-black border-2">
        <div className="profile flex items-center gap-1">
          <img
            src={idNumber % 2 === 0 ? aishamPic : ibshamPic}
            className="w-9 rounded-full"
            alt="profile-pic"
          />
        </div>
        <div className="links flex justify-between items-center basis-3/12">
          <Link to={`/feed/${Number(id)}`}>
            <img className="w-8" src={home} alt="home" />
          </Link>
          <Link to={`/${Number(id)}/messages`}>
            <img src={messages} className="w-8" alt="messages" />
          </Link>
          <Link to={`/${Number(id)}/reels`}>
            <img src={video} alt="reel videos" className="w-8" />
          </Link>
        </div>
        <div className="menu">
          <img src={menu} className="w-8" alt="menu" />
        </div>
      </nav>

      <div className="main-feed-container">
        {/*  */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            doPost(postData);
            setPostData("");
          }}
          className="post-component flex flex-col border-black border-2 mt-4"
        >
          <textarea
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     doPost(postData);
            //     setPostData("");
            //   }
            // }}
            className="posting pb-12 resize-none overflow-hidden p-2 outline-none"
            name="posting"
            value={postData}
            onChange={(e) => setPostData(e.target.value)}
            placeholder="What's in your mind"
          />
          <div className="optional flex justify-between p-2">
            <div className="file-to-select py-1 px-2 bg-blue-500 text-white rounded-md cursor-pointer">
              Upload a file
            </div>
            <button
              type="submit"
              className={`post rounded-md py-1 px-2 bg-blue-500 text-white`}
            >
              Post
            </button>
          </div>
        </form>
        {/*  */}
        <div
          className={`feed array border-black border-2 mt-4 ${
            darkTheme ? "text-white" : "text-black"
          }`}
        >
          {posts.map((post, i) => (
            <div id={String(i)} className="mt-2">
              {post}
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Feed;
