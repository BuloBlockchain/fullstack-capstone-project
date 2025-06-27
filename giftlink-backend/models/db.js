// db.js
require('dotenv').config();
console.log('🔍 MONGO_URL:', process.env.MONGO_URL); // ADICIONE ESTA LINHA
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    try {
        const client = new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log('✅ Conectado ao MongoDB');
        dbInstance = client.db(dbName);
        return dbInstance;

    } catch (err) {
        console.error('❌ Erro ao conectar no MongoDB:', err);
        throw err;
    }
}

module.exports = connectToDatabase;