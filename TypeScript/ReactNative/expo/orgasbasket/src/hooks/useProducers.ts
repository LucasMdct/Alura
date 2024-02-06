import { useState, useEffect } from 'react';
import { loadProducers } from 'services/loadData';
import { InterfaceProducers, Producer } from 'mocks/interfaces/Interface-producers';

export default function useProducers(bestProducers: boolean): Producer[] {

  const [ list , setList ] = useState<Producer[]>([]);

  useEffect(() => {
    const regress: InterfaceProducers = loadProducers();
    regress.list.sort(
      (producer1, producer2) => producer1.distance - producer2.distance,
    );

    let newList = regress.list;

    if(bestProducers) {
      newList = newList.filter(
        (producer) => producer.stars > 3
      );
    }
    setList(newList);
  }, [bestProducers]);

  return list;

}
