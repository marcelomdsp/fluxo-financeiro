import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./styles";
import { UseAuth } from "../../Contexts/Auth";
import { useState } from "react";
import Input from "../Inputs";

type ModalResetProps = {
  visible?: boolean;
  onPress: () => void;
};

const ModalReset = ({ visible, onPress }: ModalResetProps) => {
  const [email, setEmail] = useState("");
  const { resetPassword } = UseAuth();
  if (!visible) return null;
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <Pressable style={{ flex: 1 }} onPress={onPress}>
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Redefinir Senha</Text>
              <Text style={styles.modalMessage}>
                Um email de redefinição de senha será enviado para o seu
                endereço de email cadastrado.
              </Text>
              <Input
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                inputMode="email"
              />
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  style={styles.redefinirButton}
                  onPress={() => {
                    email
                      ? (resetPassword(email), onPress(), setEmail(""))
                      : Alert.alert("Por favor, insira um email válido.");
                  }}
                >
                  <Text style={styles.redefinirButtonText}>Redefinir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={onPress}>
                  <Text style={styles.closeButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </Pressable>
    </Modal>
  );
};
export default ModalReset;

