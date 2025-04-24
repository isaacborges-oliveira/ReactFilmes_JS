import "./Cadastro.css";
import Botao from "../botao/Botao"
const Cadastro = () => {


    return (
        <section className="section_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <h1>
                    Cadastre um Filme
                </h1>


                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="">Filme</label>
                        <input type="text" />

                    </div>
                        <div className="campos_cad_genero">
                            <label htmlFor="">Genero</label>
                            <select name="" id="">
                                <option  value="" disabled selected>Selecione</option>
                                <option value="">Ação</option>
                                <option value="">Aventura</option>
                                <option value="">Drama</option>
                                <option value="">Comédia</option>
                                

                            </select>

                        </div>

                    <Botao />
                </div>
            </form>
        </section>

    )
}
export default Cadastro