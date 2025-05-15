import { useState } from "react"; // ADICIONADO
import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
const itensPorPagina = 5;
const [paginaAtual, setPaginaAtual] = useState(1);
const totalItens = props.lista?.length || 0;
const totalPaginas = Math.ceil(totalItens / itensPorPagina);
const inicio = (paginaAtual - 1) * itensPorPagina;
const fim = inicio + itensPorPagina;
 const itensPaginados = props.lista?.slice(inicio, fim);

    const proximaPagina = () => {
        if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
    };

    const paginaAnterior = () => {
        if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
    };

    return (
        <section className="layout_grid listagem">
            <h1>{props.nomeLista}</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* Cabeçalho da tabela: */}
                    <thead>
                        <tr className="table_cabecalho">
                            <th> Nome </th>
                            <th style={{ display: props.visi_lista }}> Gênero </th>
                            <th> Editar </th>
                            <th> Excluir </th>
                        </tr>
                    </thead>

                    <tbody >
                        {props.lista && props.lista.length > 0 ? (
                            itensPaginados.map((item) => (
                                <tr className="item_lista" key={item.idGenero}>
                                    <td style={{ display: props.visi_lista }} data-cell="Nome">
                                        {item.nome}
                                    </td>
                                    <td data-cell="Gênero"> {item.nome} </td>
                                    <td data-cell="Editar"><img src={Editar} alt="" /></td>
                                    <td data-cell="Excluir">
                                        <img
                                            src={Excluir}
                                            onClick={() => props.funcaoDeletar(item.idGenero)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p className="PP">nenhum genero foi encontrado </p>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPaginas > 1 && (
                <div className="paginacao">
                    <button onClick={paginaAnterior} disabled={paginaAtual === 1}>Anterior</button>
                    <span>Página {paginaAtual} de {totalPaginas}</span>
                    <button onClick={proximaPagina} disabled={paginaAtual === totalPaginas}>Próxima</button>
                </div>
            )}
        </section>
    )
}

export default Lista;
