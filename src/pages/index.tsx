import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Lista from "../ui/components/Lista/Lista";
import Titulo from "../ui/components/Titulo/Titulo";

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

      <Lista
        pets={[
          {
            id: 1,
            nome: "Zeus",
            historia:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint laborum, facilis nobis officia delectus molestiae, molestias voluptate illum voluptatibus voluptatem vitae dolorem debitis repellat animi, quidem sapiente quod veritatis?",
            foto: "/imagens/zeus.jpg",
          },
          {
            id: 2,
            nome: "Luma",
            historia:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint laborum, facilis nobis officia delectus molestiae, molestias voluptate illum voluptatibus voluptatem vitae dolorem debitis repellat animi, quidem sapiente quod veritatis?",
            foto: "/imagens/luma.jpg",
          },
          {
            id: 3,
            nome: "Boo",
            historia:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint laborum, facilis nobis officia delectus molestiae, molestias voluptate illum voluptatibus voluptatem vitae dolorem debitis repellat animi, quidem sapiente quod veritatis?",
            foto: "/imagens/boo.jpg",
          },
          {
            id: 4,
            nome: "Rex",
            historia:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint laborum, facilis nobis officia delectus molestiae, molestias voluptate illum voluptatibus voluptatem vitae dolorem debitis repellat animi, quidem sapiente quod veritatis?",
            foto: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg",
          },
          {
            id: 5,
            nome: "Max",
            historia:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint laborum, facilis nobis officia delectus molestiae, molestias voluptate illum voluptatibus voluptatem vitae dolorem debitis repellat animi, quidem sapiente quod veritatis?",
            foto: "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png",
          },
        ]}
      />
    </div>
  );
};

export default Home;
