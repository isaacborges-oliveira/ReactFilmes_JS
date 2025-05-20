import { useEffect, useState } from "react";
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import Swal from 'sweetalert2';

const CadastroFilme = () => {
    const [filme, setFilme] = useState("");
    const [listaGenero, setListaGenero] = useState();
    const [genero, setGenero] = useState("");

    //função para trazer os meus generos no meu select
    async function listarGeneros(id) {

        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            console.log("Erro ao listar os gêneros:", error);
        }

    }

    useEffect(() => {
        listarGeneros();

    }, []);

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function cadastrarFilme(e) {
        e.preventDefault();
        console.log(filme);
        console.log(genero);
        if (filme.trim() !== "") {

//tratamento de exceção = try catch
           try {
                await api.post("filme", { Titulo: filme, idGenero: genero });

                alertar("success", "Filme casdastrado com sucesso")

                setFilme("")



            } catch (error) {
                alertar("error", "Filme não cadastrado!")
                console.log(error);

            }

        } else {
            alertar("warning", "primata, digite um filme")

        }

    }


    return (
        <>

            <Header />
            <main>
                <Cadastro tituloCadastro="Cadastro de Filme"
                    campoPlace="Digite o nome do filme"
                    nomeDoBotao="Cadastrar"
                    campoPlaceholder="Filme"
                    funcCadastro={cadastrarFilme}
                    lista={listaGenero}
                    valorInput={filme}
                    
                    //ao mudar o input algo acontece
                    // Atualizar o estado do pai 
                    setValorInput={setFilme}


                    valorSelect={genero}
                    setValorSelect= {setGenero}

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



