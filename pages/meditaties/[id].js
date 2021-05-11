import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ReactPlayer from "react-player";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <p>Post: {id}</p>
      <ReactPlayer
        light="http://localhost:3000/_next/image?url=%2Fimages%2Falbum.jpg&w=256&q=75"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing="true"
      />
    </Layout>
  );
};

export default Post;
