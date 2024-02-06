import { InterfaceProducers } from 'mocks/interfaces/Interface-producers';
import { InterfaceTexts } from 'mocks/interfaces/interface-texts';
import producers from 'mocks/producers';
import texts from 'mocks/texts';

export const loadProducers = (): InterfaceProducers => {
  return producers;
}

export const loadTexts = (): InterfaceTexts => {
  return texts;
}
