import { useEffect, useState } from "react";
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import Swal from 'sweetalert2';

const CadastroGenero = () => {
    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
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

    async function cadastrarGenero(evt) {
        evt.preventDefault();
        if (genero.trim() != "") {

            try {
                await api.post("genero", { nome: genero });
                //----ALERTA-------------

                alertar("success", "Cadastro realizado com sucesso")
                //----Fim DO ALERTA
                setGenero("")
                listarGenero();

            } catch (error) {

                alertar("error", "Cadastro não realizado, primata")
                console.log(error);
            }
        } else {

            alertar("warning", "primata, digite o gênero")
        }
    }

    async function listarGenero() {
        try {
            const resposta = await api.get("genero");

            console.log(resposta.data);

            setListaGenero(resposta.data)

        } catch (error) {
            console.log(error);

        }
    }
    async function deletarGenero(id) {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`genero/${id}`); //interpolação
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        });
    }
    listarGenero();

    async function editarGenero(genero) {
        const { value: novoGenero } = await Swal.fire({
            title: "Modifique seu genero",
            input: "text",
            inputLabel: "Novo Gênero",
            inputValue: genero.nomes,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo não pode estar vazio";
                }
            }
        });
        if (novoGenero) {
            try {
                api.put(`genero/${genero.idGenero}`,
                    { nome: novoGenero });
                 Swal.fire(`Gênero modidificado para ${novoGenero}`);
                    
            } catch (error) {
                console.log(error);
            }
        }
    }



    // useEffect(() => {
    //     console.log(genero);
    // }, [genero]);

    useEffect(() => {
        listarGenero();
    }, [genero]);

    return (

        <>
            <Header />
            <main>
                <Cadastro tituloCadastro="Cadastro de Gênero"
                    campoPlaceholder="Gênero"
                    visibilidade="none"
                    nomeDoBotao="Cadastrar"
                    //Atribuir a função
                    funcCadastro={cadastrarGenero}
                    //Atribuir o valor ao imput
                    valorInput={genero}
                    //ao mudar o input algo acontece
                    // Atualizar o estado do pai 
                    setValorInput={setGenero}

                />

                <Lista

                    nomeLista="Lista de Gênero"
                    visi_lista="none"
                    lista={listaGenero}
                    funcaoDeletar={deletarGenero}
                    funcEditar={editarGenero}
                />
            </main>
            <Footer />
        </>
    )
}


export default CadastroGenero;