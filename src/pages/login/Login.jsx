import Logo from "../../assets/img/logo.svg"
import Botao from "../../components/botao/Botao";
import "./Login.css"
const Login = () => {
    return (
        <main className="mae_de_todas">
            <div className="banner">

            </div>

            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />
                <form action="" className="form_login">
                    <h1>login</h1>

                    <div className="campos_login">
                        <div className="campo_imput">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />

                        </div>
                        <div className="campo_imput">

                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" />


                        </div>
                    </div>
                    <Botao />
                </form>
            </section>
        </main>
    )
}
export default Login;