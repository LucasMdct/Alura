import React from 'react';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutores from '../telas/MelhoresProdutores';
import { StyleSheet } from 'react-native';

export default function MelhoresProdutoresRotas() {
    return <>
    <ProdutorRotas ComponentePrincipal={MelhoresProdutores} /> 
    </>
}


const estilo = StyleSheet.create({
})