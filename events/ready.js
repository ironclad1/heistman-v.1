const MongoClient = require("mongodb").MongoClient;
const MongoDBProvider = require("commando-provider-mongo").MongoDBProvider;
const mongoose = require("mongoose");
const mongoPath = process.env.MONGO;

module.exports = {
  name: "ready",
  async execute(client) {
    // Saving configurations to MongoDB
    client.setProvider(
      MongoClient.connect(process.env.MONGO)
        .then((clientSettings) => {
          return new MongoDBProvider(clientSettings, "FrocklesDatabases");
          // Please rename "FrocklesDatabases" to your collection's name
        })
        .catch((err) => {
          console.error(err);
        })
    );

    // Connecting to MongoDB
    const connectToMongoDB = async () => {
      await mongoose
        .connect(mongoPath, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        })
        .then(() => {
          console.log("Successfully Connected to MongoDB Atlas.");
        });
    };
    connectToMongoDB();
  },
};

module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity("under development", {type:"WATCHING"})
    await mongo()
}
