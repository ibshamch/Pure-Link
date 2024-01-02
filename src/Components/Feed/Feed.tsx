import { useParams } from "react-router-dom";
import DatabaseData from "../Data/Database/database";
const Feed = (): JSX.Element => {
  const { id } = useParams();
  const user = DatabaseData.find((user) => {
    return Number(id) === user.id;
  });
  return <div>{user?.posts[0]}</div>;
};

export default Feed;
