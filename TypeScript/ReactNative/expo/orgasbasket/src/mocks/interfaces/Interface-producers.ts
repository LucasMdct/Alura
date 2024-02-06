import { ImageSourcePropType } from 'react-native';

///
export interface BasketDetails {
  name?: string;
  description?: string;
  price?: string;
  image?: string; // Alterado para o tipo correto (caminho da imagem)
}

export interface BasketItem {
  name?: string;
  image?: string; // Alterado para o tipo correto (caminho da imagem)
}

export interface Basket {
  details: BasketDetails;
  itens: BasketItem[];
}

export interface Producer {
  name?: string;
  image?: ImageSourcePropType; // Alterado para o tipo correto (caminho da imagem)
  distance?: number;
  stars?: number;
  baskets?: Basket[];
}

// Ajuste na interface para representar o array de Produtores
export interface InterfaceProducers {
  list: Producer[];
}
