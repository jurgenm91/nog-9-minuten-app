import Head from "next/head";
import Header from "./components/Header";
import Negen from "./components/Negen";

function Login() {
  return (
    <div>
      <Header />
      <div className="m-5 flex flex-col items-center">
        <div className="mt-12 flex-1 w-40 h-40">
          <Negen />
        </div>
        <div className="flex-1 mt-12">
          <p className="flex-1 text-center w-80 ">
            Welkom bij <b>NOG 9 MINUTEN</b>, de meditatie app van Hilde de
            Baerdemaeker, Evi Hanssen en Jutta Borms.
          </p>
        </div>
        <div className="flex-1 mt-12">
          <a
            href="/api/auth/login"
            className="text-center border border-purple-500 rounded p-1 text-purple-500"
          >
            Laten we beginnen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
