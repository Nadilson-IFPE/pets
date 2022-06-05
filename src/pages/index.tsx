import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Lista from "../ui/components/Lista/Lista";
import Titulo from "../ui/components/Titulo/Titulo";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";

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

      <Dialog open={true} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label={"E-mail"} type={"email"} fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label={"Quantia por mês"} type={"number"} fullWidth />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"}>Cancelar</Button>
          <Button variant={"contained"}>Confirmar adoção</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={false} message={"Mensagem de teste!"} />
    </div>
  );
};

export default Home;
