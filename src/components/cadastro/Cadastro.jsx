
import "./Cadastro.css";
import Botao from "../botao/Botao"
const Cadastro = (props) => {


    return (
        <section className="section_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <h1>
                {props.tituloCadastro}
                </h1>


                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="">Filme</label>
                        <input type="text" placeholder={`Digite o nome do ${props.campoPlaceholder}`}/>

                    </div>
                        <div className="campos_cad_genero" style={{display:props.visibilidade}}>
                            <label htmlFor="">Genero</label>
                            <select name="" id="">
                                <option  value="" disabled selected>Selecione</option>
                                <option value="">Ação</option>
                                <option value="">Aventura</option>
                                <option value="">Drama</option>
                                <option value="">Comédia</option>
                                

                            </select>

                        </div>

                    <Botao nomeDoBotao={props.nomeDoBotao}/>
                </div>
            </form>
        </section>

    )
}
export default Cadastro
