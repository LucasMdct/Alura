import './CampoTexto.css';


const CampoTexto = (props) => { 

    const nomeLabelModificada = `${props.label}`;
    const placeholderModificada = `${props.placeholder}...`;


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }




    return( 
        <div className="campo-texto">
            <label>{nomeLabelModificada}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    );
};

export default CampoTexto;