import { useState, useEffect } from 'react';
import { InterfaceTexts } from 'mocks/interfaces/interface-texts';

import { loadTexts } from 'services/loadData';

export default function useTexts(): InterfaceTexts {
  const [texts, setTexts] = useState<InterfaceTexts | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const regress = await loadTexts();
        setTexts(regress);
      } catch (error) {
        console.error('Erro ao carregar textos', error);
      }
    };

    fetchData();
  }, []);

  return texts || {
    welcome: '',
    caption: '',
    captionBestProducers: '',
    titleProducers: '',
    titleProducer: '',
    titleBasket: '',
    topBasket: '',
    bottonBuy: '',
    titleItens: '',
    messageBuy: '',
    topPurchase: '',
    purchaseTitle: '',
    buttonHomePurchase: '',
    buttonProducerPurchase: '',
  };
}
