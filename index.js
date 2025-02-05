const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações do Telegram
const TELEGRAM_TOKEN = "7573837799:AAE1wxCcI0uVKOcQftJuvnsL9r9Up1YOeZo"; // 🔴 Substitua pelo seu token
const CHAT_ID = "7286269202"; // 🔴 Substitua pelo ID do chat
const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

// Função para enviar mensagem ao Telegram
function enviarMensagem(mensagem) {
    fetch(TELEGRAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: mensagem }),
    })
    .then(response => response.json())
    .then(data => console.log("Mensagem enviada:", data))
    .catch(error => console.error("Erro ao enviar mensagem:", error));
}

// Quando alguém acessar o site, envia mensagem ao Telegram
app.get("/", (req, res) => {
    enviarMensagem("🚀 Alguém acessou o site!");
    res.sendFile(__dirname + "/index.html"); // Exibe a página HTML
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
