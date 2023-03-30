import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';

import Texto from '../componentes/texto.js'
import topo from '../../assets/verdurasTopo.jpg';
import logoFazenda from '../../assets/logoFazenda.jpg';

const width = Dimensions.get('screen').width; 

export default function Cesta(){
    return <> 
    <Image source={topo} style={estilos.imagemTopo} />
    <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    <View style={estilos.cesta}> 
        <Texto style ={estilos.nome}>Cesta de Verduras</Texto>
        <View style ={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta de produtos selecionados 
        cuidadosamente da fazenda direto para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </View>
    </>
}

const estilos = StyleSheet.create({
    imagemTopo: {
        width: "100%",
        height: "50%",
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        padding: 16,
        fontFamily: "MontserratBold"
    },
    cesta: {
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    nome: {
        color: "#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color:"#a3a3a3",
        fontSize:16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight:42,
        marginTop: 8,
    }
});
