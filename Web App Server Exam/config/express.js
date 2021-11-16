const { MongoClient } = require('mongodb');
//require mongoose up here 
const models = fs.readdirSync(config.rootPath + '/app/models');
models.forEach((model) => {
    require(confiv.rootPath + '/app/models/' + model);
});

const routes = require('../app/routes/index')

const uri = "mongodb+srv://Pounce:Panthers@carranzadb.g3itl.mongodb.net/CarranzaDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const DATABASE_URL = process.env.DATABASE_URL
    ? process.env.DATABASE_URL
    : 'mongodb://localhost:3000';
const DATABASE_NAME = process.env.DATABASE_NAME || 'my-tutorial-db';
const DATABASE_COLLECTION_NAME =
    process.env.DATABASE_COLLECTION_NAME || 'my-collection';

let mongoConnection = null;
let db = null;

try {
    mongoose.connect(
        config.dbURL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );
} catch (e) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => logger.log("Connected to DB!"));




console.log("Starting application");