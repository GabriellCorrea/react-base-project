import Cartao from "../components/Cartao/Cartao";
import { Titulo } from "../components/Cartao/Style";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
    {
        titulo: "Um titulo do Array",
        texto: "Um texto grande do Array."
    },
    {
        titulo: "Um outro titulo do Array",
        texto: "Um outro texto grande do Array."
    }
]

const SobreNos = () => (
    <Base>
        <ListContainer>
        {
            dados.map( (ele, i) => (
                <Cartao
                    key={i}
                    titulo={ele.titulo}
                    texto={ele.texto}
                />
            ))
        }
        </ListContainer>
    </Base>
);

export default SobreNos;