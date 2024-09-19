require('dotenv').config()
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apidesafio.te92u.mongodb.net/?retryWrites=true&w=majority&appName=APIDesafio`);
        console.log("MongoDB conectado com sucesso!");
    } catch (err) {
        console.error(`Erro ao conectar ao MongoDB: ${err}`);
        process.exit(1);
    }
};

module.exports = connectDB;