import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Login from "./login";

import { useUser } from "@auth0/nextjs-auth0";
import Menu from "./components/Menu";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
