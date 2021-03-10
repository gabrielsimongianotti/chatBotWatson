const venom = require("venom-bot");

venom.create().then((client) => start(client));

const start = async (client) => {
  const contacts = await client.getAllContacts();
  const consact = await contacts.filter(({ name }) => name === "iFood");
  console.log(contacts,consact,consact[0].id);
  // console.log(consact[0].id._serialized);

    // await client.sendText(
    //   consact[0].id._serialized,
    //   'hi'
    // );
  client.onMessage((message) => {
    if (message.body === "Oi" || message.body === "Olá") {
      client
        .sendText(message.from, "Olá! Tudo bem com você? é o venom-bot ")
        .then((result) => {
          console.log("Result: ", result); //retorna um objeto de successo
        })
        .catch((erro) => {
          console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
        });
    }
  });
};
