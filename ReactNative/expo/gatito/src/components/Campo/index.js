import React from "react";
import estilosPadrao from './estilosCampo';

import { TextInput } from "react-native";

export default function Campo({ valor, acao, estilos}) {
    const atualiza = (novoValor, acoeRetorno) => {
        const verificaInteiro = novoValor.match(/ˆ[0-9]*$/)
        if(!verificaInteiro) return;
        const removeZeroEsquerda = novoValor.replace(/ˆ(0)(.+)/, '$2');
        acoeRetorno(removeZeroEsquerda);
    }

    const numeroEmTexto = String(valor);
    return <TextInput
        style={[estilosPadrao.campo, estilos]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
        value={numeroEmTexto}
    />
}