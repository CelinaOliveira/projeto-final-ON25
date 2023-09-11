class AppIdiomas {
    constructor() {
      this.usuarios = {};
    }
  
    criarUsuario(nome, email) {
      const novoUsuario = new Usuario(nome, email);
      this.usuarios[email] = novoUsuario;
      return novoUsuario;
    }
  
    praticarFlashcards(emailUsuario) {
      const usuario = this.usuarios[emailUsuario];
      if (!usuario) {
        console.log("Usuário não encontrado. Crie uma conta primeiro.");
        return;
      }

      const entradasVocabulario = Object.entries(usuario.vocabulario);
      if (entradasVocabulario.length === 0) {
        console.log("Seu vocabulário está vazio. Adicione palavras primeiro.");
        return;
      }
  
      const entradasEmbaralhadas = embaralharArray(entradasVocabulario);

      entradasEmbaralhadas.forEach(([palavra, traducao]) => {
        const resposta = prompt(`Qual é a tradução de "${palavra}"?`);
        if (resposta === traducao) {
          console.log("Correto!");
        } else {
          console.log(`Incorreto. A resposta correta é "${traducao}".`);
        }
      });
    }
}

const meuAplicativoAprendizado = new AplicativoAprendizadoIdiomas();
const novoUsuario = meuAplicativoAprendizado.criarUsuario("João", "joao@example.com");

novoUsuario.adicionarPalavraAoVocabulario("maçã", "apple");
novoUsuario.adicionarPalavraAoVocabulario("banana", "banana");
novoUsuario.adicionarPalavraAoVocabulario("gato", "cat");