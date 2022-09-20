import React, { useState } from 'react';
import Axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";



function App() {

    const [values, setValues] = useState();

const handleChangeValues = (value) =>{

    setValues((prevValue)=>({
      //Arrow Function, é tipo uma função, so que rápida.
      ...prevValue,
      [value.target.name]: value.target.value,
  }))

};


const handleClickButton = () =>{

    if (window.confirm("Você deseja realmente registrar este associado?")) {
     
      
      Axios.post("http://localhost:3002/registerAssociate",{
        nomeCompleto:values.nomeCompletoI,
        VARIAVEL_PEDINTE:values.ID_DO_DADO,
        nacionalidade:values.nacionalidadeI,
        naturalidade:values.naturalidadeI,
        cpf:values.cpfI,
        dataDeNascimento:values.dataDeNascimentoI,
        profissao:values.profissaoI,
        documentoIdentificacao:values.documentoIdentificacaoI,
        numeroDocumento:values.numeroDocumentoI,
        orgaoExpeditor:values.orgaoExpeditor,
        enderecoPessoal:values.enderecoPessoalI,
        numeroEnderecoPessoal:values.numeroEnderecoPessoalI,
        complementoPessoal:values.complementoPesssoalI,
        bairroPessoal:values.bairroPessoalI,















        


        
      }).then((response)=>{
        console.log(response);
      })    

      alert( + " registrado com Sucesso!"); 

    } else {

    }


}


    <div className="App">

        <form className="block p-5 rounded-lg justify-self-center mx-auto shadow-2xl bg-white max-w-2xl">

        <div className="mb-5">
        <h1 className="text-xl text-center font-bold">Dados Pessoais</h1>
        </div>

        <div className="grid grid-cols-3 gap-4">


        <div className="col-span-3">
          <label for="nomeCompletoI" className="form-label inline-block mb-2 text-gray-700">Nome completo</label>
          <input type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="nomeCompletoI"
            onChange={handleChangeValues}
            placeholder="Nome Completo"
          />
        </div>




        <div className="">
          <label for="estado" className="form-label inline-block mb-2 text-gray-700">Estado Civil</label>
            <select id="estado" name="estado" size="1" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
              <option value="disponivel">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
              <option value="separado">Separado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
            </select>
        </div>





        <div className="col-span-1">
          <label for="nacionalidadeI" className="form-label inline-block mb-2 text-gray-700">
            Nacionalidade</label>
            <input type="text"
               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
               id="nacionalidadeI"
               placeholder="Nacionalidade"
             />
        </div>



        <div className="col-span-1">
        <label for="naturalidadeI" className="form-label inline-block mb-2 text-gray-700">
          Naturalidade</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="naturalidadeI"
             placeholder="Naturalidade"
           />
      </div> 



      <div className="col-span-2">
        <label for="cpfI" className="form-label inline-block mb-2 text-gray-700">
          CPF</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="cpfI"
             placeholder="CPF"
           />
      </div>



    <div className="col-span-1">
        <label for="dataDeNascimentoI" className="form-label inline-block mb-2 text-gray-700">
          Data de Nascimento</label>
          <input type="date"
             max="2004-09-13"
             min="1910-05-01"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="dataDeNascimentoI"
             placeholder="Data de Nascimento"
           />
      </div>



    <div className="col-span-1">
        <label for="profissaoI" className="form-label inline-block mb-2 text-gray-700">
          Profissão</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="profissaoI"
             placeholder="Profissão"
           />
      </div>



    <div className="col-span-1">
        <label for="documentoIdentificacaoI" className="form-label inline-block mb-2 text-gray-700">
          Documento de identificação</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="documentoIdentificacaoI"
             placeholder="Doc. de Identificação"
           />
      </div>



    <div className="col-span-1">
        <label for="numeroDocumentoI" className="form-label inline-block mb-2 text-gray-700">
          Nº</label>
          <input type="text"
             classname="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="numeroDocumentoI"
             placeholder="Número do Documento"
           />
      </div>



    <div className="col-span-1">
        <label for="orgaoExpeditorI" className="form-label inline-block mb-2 text-gray-700">
          Orgão Expeditor</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="orgaoExpeditorI"
             placeholder="Orgão Expeditor"
           />
      </div>



      <div className="col-span-1">
        <label for="enderecoPessoalI" className="form-label inline-block mb-2 text-gray-700">
          Endereço</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="enderecoPessoalI"
             placeholder="Endereço Pessoal"
           />
      </div>



      <div className="col-span-1">
        <label for="numeroEnderecoPessoalI" className="form-label inline-block mb-2 text-gray-700">
          Nº Endereço</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="numeroEnderecoPesssoalI"
             placeholder="Número Endereço"
           />
      </div>



      <div className="col-span-1">
        <label for="complementoPessoalI" className="form-label inline-block mb-2 text-gray-700">
          Complemento</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="complementoPessoalI"
             placeholder="Complemento Endereço"
           />
      </div>



      <div className="col-span-1">
        <label for="bairroPessoalI" className="form-label inline-block mb-2 text-gray-700">
          Bairro</label>
          <input type="text"
             className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="bairroPessoalI"
             placeholder="Bairro"
           />
      </div>



        </div>
        </form>
        
    </div>


}

export default App;

