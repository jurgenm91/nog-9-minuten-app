import Lijst from "../components/Lijst";
import Login from "../login";
import { useUser } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";

function Meditaties({ posts }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Laden...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Layout>
          {posts &&
            posts.map((post) => (
              <Lijst
                id={post.id}
                dag={post.Dag}
                titel={post.Titel}
                omschrijving={post.Omschrijving}
                url={post.URL}
              />
            ))}
        </Layout>
      </div>
    );
  }
  return <Login />;
}

export async function getStaticProps() {
  const API = process.env.REACT_APP_MEDITATIE_API_URL;
  const res = await fetch(API);
  const posts = await res.json();

  if (!posts) {
    console.log("Fout");
  }

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default Meditaties;
