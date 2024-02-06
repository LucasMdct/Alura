import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import { loadTop } from "../../services/loadData";
import styles from './styles';

const TopFlix = () => {
    const [top, setTop] = useState({ title: '' });

    const updateTop = () => {
        const regress = loadTop();
        setTop({ title: regress.title }); // Certifique-se de acessar a propriedade 'title' do objeto regress
      };

  useEffect(() => {
    updateTop();
  }, []);

  return (
    <View style={styles.view}>
          <Text style={styles.title}>{top.title}</Text>      
    </View>
  );
};


export default TopFlix;
