import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { CardColaborador } from "../../componentes/CardColaborador";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import douglasFoto from "../../assets/users/douglas.png";
import colaboradores from "./colaboradores";
import styles from "./styles";
import { CardColaboradorShimmerEffect } from "../../componentes/CardColaboradorShimerEffect";

export default function Principal({ navigation, route }) {
  const dados = route.params;

  const [tempo, setTempo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTempo(true);
    }, 2000);
  }, [])

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        { tempo ?
          <InformacoesUsuario
            nome="Olá Douglas"
            detalhes="Mais 8 reuniões hoje"
            foto={douglasFoto}
          /> :
          <>
            <CardColaboradorShimmerEffect estilos={{height: 100 }}  cards={{ height: "0%", paddingHorizontal: -50}}/>
          </>

        }

        <Text style={styles.texto}>Hoje</Text>
        {tempo ?
          <FlatList
            data={colaboradores}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
                <CardColaborador {...item} />
              </TouchableOpacity>
            }
            showsVerticalScrollIndicator={false}
          /> :
          <>
            <CardColaboradorShimmerEffect />
            <CardColaboradorShimmerEffect />
            <CardColaboradorShimmerEffect />
            <CardColaboradorShimmerEffect />

          </>

        }
      </View>
    </TelaDeFundo>
  );
}