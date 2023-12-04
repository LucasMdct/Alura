import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#57C279',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovacao e Gestao',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  const inicial = [
    {
      id: 1,
      favorito: false,
      nome: 'Douglas Nassif Roma Junior',
      cargo: 'Lead Software Development Engineer',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8Gl9nlxphbg/profile-displayphoto-shrink_800_800/0/1654645644371?e=1707350400&v=beta&t=ySJSFwkPsAkF_sTRWVcg9UXx2vdeLS2UpOT1QL-U278',
      time: times[0].nome
    },
    {
      id: 2,
      favorito: false,
      nome: 'Ingrid Louise Pereira Lohmann',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQFbxlFIYmpReg/profile-displayphoto-shrink_800_800/0/1550867731344?e=1707350400&v=beta&t=XsXwppkg5LgXUiKtYVtBHm8CIzP7jHPnOZ9urH1xWLs',
      time: times[1].nome
    },
    {
      id: 3,
      favorito: false,
      nome: 'Daniel Felipe Sartorio',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://media.licdn.com/dms/image/C5603AQFV1uj3SJZryg/profile-displayphoto-shrink_800_800/0/1516962093211?e=1707350400&v=beta&t=HgR0FjcU_5Bbrn2fmXF2QQn1gNgdh-x66-TxHMsRCHI',
      time: times[1].nome
    },
    {
      id: 4,
      favorito: false,
      nome: 'André Luiz Hiller Vieira ',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQE3Z-AlVh8-0g/profile-displayphoto-shrink_800_800/0/1605883145446?e=1707350400&v=beta&t=Ng8lv7IibiSHI7OpRii1UmzS7GIwiEtxDBvmf4A15d4',
      time: times[1].nome
    },
    {
      id: 5,
      favorito: false,
      nome: 'LUCAS MEDEIROS COSTA',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://github.com/lucasmdct.png',
      time: times[1].nome
    },
    {
      id: 6,
      favorito: false,
      nome: 'CLEBER ',
      cargo: 'Scrum Master | Gerente de Projetos ',
      imagem: 'https://media.licdn.com/dms/image/D4D03AQHAKl29BXtadg/profile-displayphoto-shrink_800_800/0/1679756793259?e=1707350400&v=beta&t=g9So3P3VYrjsZhRdB3DNPdPXx8H3Vh2zCnx60x0oc3w',
      time: times[6].nome
    },
  ]


  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

      <Rodape />
    </div>
   
  );
}

export default App;
