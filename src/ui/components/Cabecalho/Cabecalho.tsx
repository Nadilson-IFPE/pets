import { CabecalhoContainer, Logo } from "./Cabecalho.style";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <CabecalhoContainer>
      <Link href={"/"} passHref={true}>
        <Logo src="/imagens/logo.svg" alt="Adote um pet." />
      </Link>
    </CabecalhoContainer>
  );
}
