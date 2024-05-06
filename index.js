// Criando um objeto para armazenar os dados do herói
const heroi = {
    nome: "Aniquilador",
    xp: 9500
  };
  
  // Função para determinar o nível do herói
  function determinarNivel(xp) {
    if (xp <= 1000) {
      return "Ferro";
    } else if (xp <= 2000) {
      return "Bronze";
    } else if (xp <= 5000) {
      return "Prata";
    } else if (xp <= 7000) {
      return "Ouro";
    } else if (xp <= 8000) {
      return "Platina";
    } else if (xp <= 9000) {
      return "Ascendente";
    } else {
      return "Radiante";
    }
  }
  
  // Exibindo a mensagem com o nome e o nível do herói
  console.log(`O herói ${heroi.nome} está no nível ${determinarNivel(heroi.xp)} pronto para enfrentar o mestre.`);