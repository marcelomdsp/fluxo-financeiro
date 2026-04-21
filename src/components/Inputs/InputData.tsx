import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTema } from "../../Contexts/TemaContext";

export default function InputData() {
  const { tema } = useTema();
  const styles = criarEstilos(tema);
  const [data, setData] = useState<Date | null>(null);
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.datacontainer}>
      <TouchableOpacity style={styles.dataButton} onPress={() => setMostrar(true)}>
        <Text style={styles.dataText}>
          {data ? data.toLocaleDateString("pt-BR") : "Data"}
        </Text>
      </TouchableOpacity>

      {mostrar && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setMostrar(false);
            if (selectedDate) setData(selectedDate);
          }}
        />
      )}
    </View>
  );
}

const criarEstilos = (tema: any) => {
  return StyleSheet.create({
  datacontainer: {
    paddingVertical: tema.espacamento.xs,
  },
    dataButton: { 
    paddingVertical: tema.espacamento.xs,
    paddingHorizontal: tema.espacamento.sm,
    borderColor: "gray",
  },
  dataText: {
    fontSize: tema.fonte.md,
    color: tema.cores.texto,
  },
  
})
};
