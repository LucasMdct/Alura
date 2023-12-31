
import { useState} from 'react';
import './App.css';


function App() {
  const [endereco, setEndereco] = useState({});

  const [enderecos, setEnderecos] = useState([]);
  // const [nome, setNome] =useState('Lucas') 

  // function alterarNome() {
  //   setNome('Lucas Medeiros');

  //   console.log(nome)
  // }

  function manipularEndereco(evento) {

    const cep = evento.target.value;

    setEndereco({
      cep
    })

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(reposta => reposta.json())
        .then(dados => {
          setEnderecos(lista => [...lista, endereco])
          setEndereco(endereAntigo => ({
            ...endereAntigo,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,

          }))
        })
    }

  }



  return (
    <div className="App">
        <div className='menu'>
            <ul>
              <li> 
                <a href='#'>
                Home
              </a>
              </li>
              <li>
              <a href='#'>
                Contato
              </a>
              </li>
              <li>
              <a href='#'>
                Sobre
              </a>
              </li>
            </ul>
        </div>
      <section className="App-header">
        <div className='Search'>
          <input  placeholder='Digite o CEP ' onChange={manipularEndereco} required />
          <div>
            <ul>
              <li>CEP: {endereco.cep}</li>
              <li>Bairro: {endereco.bairro}</li>
              <li>Cidade: {endereco.cidade}</li>
              <li>Estado: {endereco.estado}</li>
            </ul>
          </div>


        </div>   
        <footer>
        <div>
          <p>BUSCADOR DE CEP</p>
        </div>
        <div>
          <p>PROJETO ALURA DE USE STATE </p>
        </div>
      </footer>
      <div className='lucas'>Lucas Medeiros Costa</div>
      </section>

   
    </div>
  );
}

export default App;
