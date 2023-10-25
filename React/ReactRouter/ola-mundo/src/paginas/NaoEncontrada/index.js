
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import style from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

const NaoEcontrada = () => {

    const navegar = useNavigate();

    return (
        <>
         <div className={style.conteudoContainer} >
            <span className={style.texto404}>404</span>
            <h1 className={style.titulo}>
                Ops ! Página Inexistente.
            </h1>


            <p className={style.paragrafo}> 
                Tem certeza de que era isso que voce estava procurando ?
            </p>

            <p className={style.paragrafo}> 
                Aguarde uns instantes e recarregue a página, ou Volte para á página inicial.
            </p>

            <div className={style.botaoContainer} onClick={() => navegar(-1)}>
                <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
            </div>

            <img className={style.imagemCachorro} src={erro404} alt='Cachorro de oculos e vestido humanos' />

        </div>
        <div className={style.espacoEmBranco}>

        </div>
        </>
       
    );
};

export default NaoEcontrada;