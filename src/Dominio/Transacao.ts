import { db } from "../Services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
export class Transacao {
  id: string;
  valor: number;
  descricao: string;
  categoria: string;
  modalidade: string;
  data: Date;
  tipo: "entrada" | "saida";
  criadoEm: Date;
  atualizadoEm: Date;
  constructor(
    id: string,
    valor: number,
    descricao: string,
    categoria: string,
    modalidade: string,
    data: Date,
    tipo: "entrada" | "saida"
  ) {
    this.id = id;
    this.valor = valor;
    this.descricao = descricao;
    this.categoria = categoria;
    this.modalidade = modalidade;
    this.data = data;
    this.tipo = tipo;
    this.criadoEm = new Date();
    this.atualizadoEm = new Date();
  }
  async salvar() {
    try {
      const docRef = await addDoc(collection(db, "transacoes"), {
        valor: this.valor,
        descricao: this.descricao,
        categoria: this.categoria,
        modalidade: this.modalidade,
        data: Timestamp.fromDate(this.data),
        tipo: this.tipo,
        criadoEm: Timestamp.fromDate(this.criadoEm),
        atualizadoEm: Timestamp.fromDate(this.atualizadoEm),
      });
      this.id = docRef.id;
      console.log("Transação salva com ID: ", this.id);
    } catch (e) {
      console.error("Erro ao salvar transação: ", e);
    }
  }
}
