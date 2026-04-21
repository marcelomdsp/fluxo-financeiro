import { View, Text } from "react-native";
import Container from "../../components/Container";
import Transacoes from "../../components/Transacoes";

const Todas = () => {
  return (
    <Container >
      <Text style={{ marginTop: 16, fontSize: 24, fontWeight: "bold", marginBottom: 16, color: "#fff", textAlign: "center"}}>Todas as Transações</Text>
      <Transacoes />
    </Container>
  );
};
export default Todas;
