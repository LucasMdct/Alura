
import style from './BotaoPrincipal.module.css';

const BotaoPrincipal = ({children, tamanho}) => {    
    return (
         <button className={`${style.botaoPrincipal} ${style[tamanho]}`}>
            {children}
            </button>
        );
};

export default BotaoPrincipal;