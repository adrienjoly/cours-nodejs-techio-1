exports.printMessage = (message, channel = "Finalisation de l'exercice") =>
  process.env.HIDE_TECHIO_MESSAGES
    ? {}
    : console.log(`\nTECHIO> message --channel "${channel}" "${message}"`);

exports.congratulateStudent = () => {
  exports.printMessage(`👌 Nickel ! Ton code valide tout ce qui était demandé !`);
  exports.printMessage(``);
  exports.printMessage(`Avant de passer à l'exercice suivant, pense à:`);
  exports.printMessage(`1. nettoyer ton code, pour ne garder que les instructions et commentaires nécessaires à son bon fonctionnement;`);
  exports.printMessage(`2. commenter les parties du code les moins évidentes, pour te souvenir à quoi elles servent;`);
  exports.printMessage(`3. puis garder une copie du code dans tes notes de cours, de manière à les retrouver rapidement quand tu en auras besoin.`);
};

exports.countLines = (sourceCode) => sourceCode.split(/[\r\n]+/).length;
