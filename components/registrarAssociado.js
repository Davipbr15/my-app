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
     
      
      Axios.post("http://localhost:3005/registerAssociate",{
        nomeCompletob:values.nomeCompletoI,
        nacionalidadeb:values.nacionalidadeI,
        naturalidadeb:values.naturalidadeI,
        cpfb:values.cpfI,
        dataDeNascimentob:values.dataDeNascimentoI,
        profissaob:values.profissaoI,
        documentoIdentificacaob:values.documentoIdentificacaoI,
        numeroDocumentob:values.numeroDocumentoI,
        orgaoExpeditorb:values.orgaoExpeditor,
        enderecoPessoalb:values.enderecoPessoalI,
        numeroEnderecoPessoalb:values.numeroEnderecoPessoalI,
        complementoPessoalb:values.complementoPesssoalI,
        bairroPessoalb:values.bairroPessoalI,
        cidadeEstadoPessoalb:values.cidadeEstadoPessoalI,
        emailPessoalb:values.emailPessoalI,
        telefoneFixoPessoalb:values.telefoneFixoPessoalI,
        celularPessoal:values.celularPessoalI,
        razaoSocialb:values.razaoSocialI,
        nomeFantasiab:values.nomeFantasiaI,
        cnpjb:values.cnpjI,
        numeroInscricaob:values.numeroInscricaoI,
        enderecoSedeb:values.enderecoSedeI,
        numeroSedeb:values.numeroSedeI,
        complementoSedeb:values.complementoSedeI,
        bairroSedeb:values.bairroSedeI,
        cepSedeb:values.cepSedeI,
        cidadeEstadoSedeb:values.cidadeEstadoSedeI,
        emailProfissionalb:values.emailProfissionalI,
        dataDeAberturab:values.dataDeAberturaI,
        



      }).then((response)=>{
        console.log(response);
      })    

      alert("Registrado com Sucesso!"); 

    } else {

    }


}

return(

<div className="App">

<form  action="#" method="POST" className="block p-5 rounded-lg justify-self-center mx-auto shadow-2xl bg-white max-w-2xl">

<div className="mb-5">
<h1 className="text-xl text-center text-black font-bold">Dados Pessoais</h1>
</div>

<div className="grid grid-cols-3 gap-5">


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





<div className="col-span-3">
  <label for="nacionalidadeI" className="form-label inline-block mb-2 text-gray-700">
    Nacionalidade</label>
    <input type="text"
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
       id="nacionalidadeI"
       placeholder="Nacionalidade"
     />
</div>

<div className="col-span-3">
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



<div className="col-span-3">
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



<div className="col-span-3">
<label for="profissaoI" className="form-label inline-block mb-2 text-gray-700">
  Profissão</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="profissaoI"
     placeholder="Profissão"
   />
</div>



<div className="col-span-3">
<label for="documentoIdentificacaoI" className="form-label inline-block mb-2 text-gray-700">
  Documento de identificação</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="documentoIdentificacaoI"
     placeholder="Doc. de Identificação"
   />
</div>



<div className="col-span-3">
<label for="numeroDocumentoI" className="form-label inline-block mb-2 text-gray-700">
  Nº do Documento</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroDocumentoI"
     placeholder="Número do Documento"
   />
</div>



<div className="col-span-3">
<label for="orgaoExpeditorI" className="form-label inline-block mb-2 text-gray-700">
  Orgão Expeditor</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="orgaoExpeditorI"
     placeholder="Orgão Expeditor"
   />
</div>



<div className="col-span-3">
<label for="enderecoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Endereço</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="enderecoPessoalI"
     placeholder="Endereço Pessoal"
   />
</div>



<div className="col-span-3">
<label for="numeroEnderecoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Nº Endereço</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroEnderecoPesssoalI"
     placeholder="Número Endereço"
   />
</div>



<div className="col-span-3">
<label for="complementoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Complemento</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="complementoPessoalI"
     placeholder="Complemento Endereço"
   />
</div>



<div className="col-span-3">
<label for="bairroPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Bairro</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="bairroPessoalI"
     placeholder="Bairro"
   />
</div>


<div className="col-span-3">
<label for="cepI" className="form-label inline-block mb-2 text-gray-700">
CEP</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cepI"
     placeholder="CEP"
   />
</div>


<div className="col-span-3">
<label for="cidadeEstadoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Cidade e Estado</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cepI"
     placeholder="Cidade e Estado"
   />
</div>


<div className="col-span-3">
<label for="emailPessoalI" className="form-label inline-block mb-2 text-gray-700">
  E-mail Pessoal</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="emailPessoalI"
     placeholder="E-mail"
   />
</div>


<div className="col-span-3">
<label for="telefoneFixoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Telefone Fixo</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="telefoneFixoPessoalI"
     placeholder="Telefone Fixo"
   />
</div>

<div className="col-span-3">
<label for="celularPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Celular</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="celularPessoalI"
     placeholder="Celular"
   />
</div>

<div className="mb-5">
<h1 className="text-xl text-center text-black font-bold">Dados Profissionais</h1>
</div>


<div className="col-span-3">
<label for="razaoSocialI" className="form-label inline-block mb-2 text-gray-700">
  Razão Social</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="razaoSocialI"
     placeholder="Razão Social"
   />
</div>

<div className="col-span-3">
<label for="nomeFantasiaI" className="form-label inline-block mb-2 text-gray-700">
  Nome Fantasia</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="nomeFantasiaI"
     placeholder="Nome Fantasia"
   />
</div>

<div className="col-span-3">
<label for="cnpjI" className="form-label inline-block mb-2 text-gray-700">
  CNPJ</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cnpjI"
     placeholder="CNPJ"
   />
</div>

<div className="col-span-3">
<label for="numeroInscricaoI" className="form-label inline-block mb-2 text-gray-700">
  Número de Inscrição</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroInscricaoI"
     placeholder="Número de Inscrição"
   />
</div>

<div className="col-span-3">
<label for="enderecoSedeI" className="form-label inline-block mb-2 text-gray-700">
  Endereço Sede</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="enderecoSedeI"
     placeholder="Endereço da Sede"
   />
</div>

<div className="col-span-3">
<label for="numeroSedeI" className="form-label inline-block mb-2 text-gray-700">
  Número da Sede</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroSedeI"
     placeholder="Número da Sede"
   />
</div>

<div className="col-span-3">
<label for="complementoSedeI" className="form-label inline-block mb-2 text-gray-700">
  Complemento da Sede</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="complementoSedeI"
     placeholder="Complemento da Sede"
   />
</div>

<div className="col-span-3">
<label for="bairroSedeI" className="form-label inline-block mb-2 text-gray-700">
  Bairro da Sede</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="bairroSedeI"
     placeholder="Bairro da Sede"
   />
</div>

<div className="col-span-3">
<label for="cepSedeI" className="form-label inline-block mb-2 text-gray-700">
  CEP Sede</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cepSedeI"
     placeholder="CEP Sede"
   />
</div>

<div className="col-span-3">
<label for="cidadeEstadoSedeI" className="form-label inline-block mb-2 text-gray-700">
  Cidade e Estado da Sede</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cidadeEstadoSedeI"
     placeholder="Cidade e Estado da Sede"
   />
</div>

<div className="col-span-3">
<label for="emailProfissionalI" className="form-label inline-block mb-2 text-gray-700">
  Email Profissional</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="emailProfissionalI"
     placeholder="Email Profissional"
   />
</div>

<div className="col-span-3">
<label for="dataDeAberturaI" className="form-label inline-block mb-2 text-gray-700">
  Data de Abertura</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="dataDeAberturaI"
     placeholder="Data de abertura"
   />
</div>


<div className="col-span-3">
<label for="quantidadePessoasOcupadasI" className="form-label inline-block mb-2 text-gray-700">
  Quantidade de Pessoas Ocupadas</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="quantidadePessoasOcupadasI"
     placeholder="Quantidade de Pessoas Ocupadas"
   />
</div>


<div className="col-span-3">
<label for="ramoDaAtividadeI" className="form-label inline-block mb-2 text-gray-700">
  Ramo da Atividade</label>
  <input type="text"
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="ramoDaAtividadeI"
     placeholder="Ramo da Atividade"
   />
</div>

<div className="col-span-3">
        <button onClick={()=> handleClickButton()} type="reset" className="group bg-blue-600 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
              <g>
              <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
              <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
              </g>
              </svg>

						</span>
					  <h2 className="text-white">Concluir Registro</h2>
				</button>
  </div>

</div>
</form>

</div>
)

}

export default App;

