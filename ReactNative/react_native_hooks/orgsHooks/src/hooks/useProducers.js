import { useState, useEffect } from "react";
import { loadProducers } from "../services/loadData";


export default function useProducers() {
const [title, setTitle] = useState('');
const [list, setList] = useState([]);

    useEffect(() => {
        const regress = loadProducers();
        regress.list.sort((producer1, producer2) => {
            if (producer1.distance === producer2.distance) {
              // Se a distância for a mesma, ordene por quantidade de estrelas
              return producer2.stars - producer1.stars;
            } else {
              // Caso contrário, ordene por distância
              return producer1.distance - producer2.distance;
            }
          });
        setTitle(regress.title);
        setList(regress.list);
        //console.log(regress);
    }, []);

    return [title, list];

}

