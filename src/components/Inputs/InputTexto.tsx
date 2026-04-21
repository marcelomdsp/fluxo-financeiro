import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  InputModeOptions,
} from "react-native";
import { useTema } from "../../Contexts/TemaContext";

type ImputProps = {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
  inputMode?: InputModeOptions;
  maxLength?: number;
  onFocus?: () => void;
};

const Input = (props: ImputProps) => {
const { tema } = useTema();
const styles = criarEstilos(tema);

  return (
    <>
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      value={props.value}
      inputMode={props.inputMode}
      placeholderTextColor={ props.placeholderTextColor ? props.placeholderTextColor : tema.cores.texto}
      maxLength={props.maxLength}
      cursorColor={tema.cores.texto}
      onFocus={props.onFocus}
    />
    </>
  );
};

export default Input;

const criarEstilos = (tema: any) => {
  return StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderRadius: tema.radius.sm,
    paddingHorizontal: tema.espacamento.sm,
    color: tema.cores.texto,
  },
})
};
