import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Douglas Nassif Roma Junior',
      cargo: 'Lead Software Development Engineer',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8Gl9nlxphbg/profile-displayphoto-shrink_800_800/0/1654645644371?e=1707350400&v=beta&t=ySJSFwkPsAkF_sTRWVcg9UXx2vdeLS2UpOT1QL-U278',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ingrid Louise Pereira Lohmann',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQFbxlFIYmpReg/profile-displayphoto-shrink_800_800/0/1550867731344?e=1707350400&v=beta&t=XsXwppkg5LgXUiKtYVtBHm8CIzP7jHPnOZ9urH1xWLs',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Daniel Felipe Sartorio',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://media.licdn.com/dms/image/C5603AQFV1uj3SJZryg/profile-displayphoto-shrink_800_800/0/1516962093211?e=1707350400&v=beta&t=HgR0FjcU_5Bbrn2fmXF2QQn1gNgdh-x66-TxHMsRCHI',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'André Luiz Hiller Vieira ',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQE3Z-AlVh8-0g/profile-displayphoto-shrink_800_800/0/1605883145446?e=1707350400&v=beta&t=Ng8lv7IibiSHI7OpRii1UmzS7GIwiEtxDBvmf4A15d4',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LUCAS MEDEIROS COSTA',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/lucasmdct.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CLEBER ',
      cargo: 'Scrum Master | Gerente de Projetos ',
      imagem: 'https://media.licdn.com/dms/image/D4D03AQHAKl29BXtadg/profile-displayphoto-shrink_800_800/0/1679756793259?e=1707350400&v=beta&t=g9So3P3VYrjsZhRdB3DNPdPXx8H3Vh2zCnx60x0oc3w',
      time: times[6].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times /* pegando o array de times anteriores*/,
    { ...novoTime, id: uuidv4() } /* Criando um novo objeto de times com id*/
    ])

  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}

      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time aoFavoritar={resolverFavorito} mudarCor={mudarCorDoTime} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
