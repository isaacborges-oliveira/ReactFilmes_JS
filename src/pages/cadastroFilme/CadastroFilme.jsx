import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return (
        <>

        <Header />
        <main>
            <Cadastro tituloCadastro="Cadastro de Filme"
            campoPlace="Digite o nome do filme"
            nomeDoBotao="Cadastrar"
            campoPlaceholder="Filme"
            />
            <Lista 
            nomeLista="Lista dos Filmes"
            
            />
        </main>
        <Footer />
    </>
    )
}
export default CadastroFilme;