class Usuario {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
      this.vocabulario = {};
    }

    adicionarPalavraAoVocabulario(palavra, traducao) {
        this.vocabulario[palavra] = traducao;
      }

}