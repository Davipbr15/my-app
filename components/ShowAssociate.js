import Link from 'next/link';
import axios from "axios";
import React, { useEffect, useState } from 'react';

function ShowAssociate(){

    const [assc, setAssociate ] = useState([]);
    useEffect(()=>{
        axios.get("http://192.168.1.6:3005/api/searchAssociate")
        .then(response => {
            setAssociate(response.data);
        })

      },[]);

    return( 
           
        <div className="App">
            <p className="text-xl">Testes</p>
            <div className="grid justify-center">
            {assc.map((ascData, index) => {
                return(
                <div key={index} className="block justify-center max-w-2xl p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h1 className="text-2xl text-center">{ascData.dadosProfissionais?.nomeFantasia}</h1>
                    <b className="">ID do Associado: {ascData.associateId}</b>
                    <hr></hr>
                    <div>
                    <b className="text-2xl">Dados Pessoais</b>
                    <br></br>
                    <b className="text-xl">Nome: <b className="font-normal">{ascData.dadosPessoais?.nomeCompleto}</b></b>
                    <br></br>
                    <b className="text-xl">Estado Civil: <b className="font-normal">{ascData.dadosPessoais?.estadoCivil}</b></b>
                    <br></br>
                    <b className="text-xl">Nacionalidade: <b className="font-normal">{ascData.dadosPessoais?.nacionalidade}</b></b>
                    <br></br>
                    <b className="text-xl">Naturalidade: <b className="font-normal">{ascData.dadosPessoais?.naturalidade}</b></b>
                    <br></br>
                    <b className="text-xl">Data de Nascimento: <b className="font-normal">{ascData.dadosPessoais?.dataDeNascimento}</b></b>
                    <br></br>
                    <b className="text-xl">CPF: <b className="font-normal">{ascData.dadosPessoais?.cpf}</b></b>
                    <br></br>
                    <b className="text-xl">Documento de Identificação: <b className="font-normal">{ascData.dadosPessoais?.documentoIdentificao}</b></b>
                    <br></br>
                    <b className="text-xl">Número Documento: <b className="font-normal">{ascData.dadosPessoais?.nuemroDocumento}</b></b>
                    <br></br>
                    <b className="text-xl">Orgão Expeditor: <b className="font-normal">{ascData.dadosPessoais?.orgaoExpeditor}</b></b>
                    <br></br>
                    <b className="text-xl">Endereço Pessoal: <b className="font-normal">{ascData.dadosPessoais?.enderecoPessoal}</b></b>
                    <br></br>
                    <b className="text-xl">Número do Endereço Pessoal: <b className="font-normal">{ascData.dadosPessoais?.numeroEnderecoPessoal}</b></b>
                    <br></br>
                    <b className="text-xl">Complemento Pessoal: <b className="font-normal">{ascData.dadosPessoais?.complementoPessoal}</b></b>
                    <br></br>
                    <b className="text-xl">Bairro Pessoal: <b className="font-normal">{ascData.dadosPessoais?.bairroPessoal}</b></b>
                    <br></br>
                    <b className="text-xl">CEP: <b className="font-normal">{ascData.dadosPessoais?.cep}</b></b>
                    <br></br>
                    <b className="text-xl">Cidade Estado Pessoal: <b className="font-normal">{ascData.dadosPessoais?.cidadeEstadoPessoal}</b></b>
                    <br></br>
                    <b className="text-xl">Email Pessoal: <b className="font-normal">{ascData.dadosPessoais?.emailPessoal}</b></b>
                    <br></br>
                    <b className="text-xl">Telefone Fixo Pessoal: <b className="font-normal">{ascData.dadosPessoais?.telefoneFixoPessoal}</b></b>
                    <br></br>
                    <b className="text-xl">Celular Pessoal: <b className="font-normal">{ascData.dadosPessoais?.celularPessoal}</b></b>
                    <br></br>
                    </div>
                    <br></br>
                    <div>
                    <hr></hr>
                    <b className="text-2xl">Dados Profissionais</b>
                    <br></br>
                    <b className="text-xl">Razão Social: <b className="font-normal">{ascData.dadosProfissionais?.razaoSocial}</b></b>
                    <br></br>
                    <b className="text-xl">Nome Fantasia: <b className="font-normal">{ascData.dadosProfissionais?.nomeFantasia}</b></b>
                    <br></br>
                    <b className="text-xl">CNPJ: <b className="font-normal">{ascData.dadosProfissionais?.cnpj}</b></b>
                    <br></br>
                    <b className="text-xl">Número Inscrição: <b className="font-normal">{ascData.dadosProfissionais?.numeroInscricao}</b></b>
                    <br></br>
                    <b className="text-xl">Endereço Sede: <b className="font-normal">{ascData.dadosProfissionais?.enderecoSede}</b></b>
                    <br></br>
                    <b className="text-xl">Número Sede: <b className="font-normal">{ascData.dadosProfissionais?.numeroSede}</b></b>
                    <br></br>
                    <b className="text-xl">Complemento Sede: <b className="font-normal">{ascData.dadosProfissionais?.complementoSede}</b></b>
                    <br></br>
                    <b className="text-xl">Bairro Sede: <b className="font-normal">{ascData.dadosProfissionais?.bairroSede}</b></b>
                    <br></br>
                    <b className="text-xl">CEP Sede: <b className="font-normal">{ascData.dadosProfissionais?.cepSede}</b></b>
                    <br></br>
                    <b className="text-xl">Cidade Estado Sede: <b className="font-normal">{ascData.dadosProfissionais?.cidadeEstadoSede}</b></b>
                    <br></br>
                    <b className="text-xl">Email Profissional: <b className="font-normal">{ascData.dadosProfissionais?.emailProfissional}</b></b>
                    <br></br>
                    <b className="text-xl">Data de Abertura: <b className="font-normal">{ascData.dadosProfissionais?.dataDeAbertura}</b></b>
                    <br></br>
                    <b className="text-xl">Quantidades de Pessoas Ocupadas: <b className="font-normal">{ascData.dadosProfissionais?.quantidadePessoasOcupadas}</b></b>
                    <br></br>
                    <b className="text-xl">Ramo da Atividade: <b className="font-normal">{ascData.dadosProfissionais?.ramoDaAtividade}</b></b>
                    <br></br>
                    </div>
                <br></br>
                </div>
                );
            })}
            </div>

        </div>

    )

}


export default ShowAssociate;