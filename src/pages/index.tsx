import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Titulo from "../ui/components/Titulo/titulo";

const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo={""}
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
    </div>
  );
};

export default Home;
