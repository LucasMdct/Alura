import { StyleProp, TextStyle} from 'react-native';

export interface CustomTextProtocol extends TextStyle {
  fontWeight?: 'normal' | 'bold';
}

export interface TextProtocol {
  children: React.ReactNode;
  style?: StyleProp<CustomTextProtocol> | false;
}
