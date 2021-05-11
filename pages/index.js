import Head from "next/head";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Collectie from "./components/Collectie";

import Login from "./login";
import Info from "./components/Info";
import { useUser } from "@auth0/nextjs-auth0";
import Layout, { UserName } from "./components/Layout";
import Negen from "./components/Negen";

function Home() {
  const { user } = useUser();

  return (
    <Layout>
      <div className="">
        <Head>
          <title>NOG 9 MINUTEN</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <div className="mb-5  max-w-full md:mx-auto mx-10">
          <div className="flex-1 mx-auto mt-12 w-40 h-20">
            <Negen />
          </div>
          <p className="mt-5 text-center">
            Welkom, {""}
            <UserName />
          </p>
          <div className="text-center mt-5 mb-12">
            <a
              href="#"
              className="px-2 border rounded border-purple-500 p-1 text-sm text-purple-500"
            >
              Wil jij ons helpen groeien? Doneer hier.
            </a>
          </div>
          <Collectie />

          <Info />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
