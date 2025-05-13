import { useEffect, useState } from "react";
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import Swal from 'sweetalert2';

function alerta(icone, mensagem) {
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
const CadastroGenero = () => {
    const [genero, setGenero] = useState("");
    async function cadastrarGenero(evt) {
        evt.preventDefault();
        if (genero.trim() != "") {

            try {
                await api.post("genero", { nome: genero });
                //----ALERTA-------------

                alerta("success", "Cadastro realizado com sucesso")
                //----Fim DO ALERTA
                setGenero("")

            } catch (error) {

                alerta("error", "Cadastro não realizado, primata")
                console.log(error);
            }
        } else {

            alerta("warning", "primata, digite o gênero")
        }
    }

    // useEffect(() => {
    //     console.log(genero);
    // }, [genero]);

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

                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;