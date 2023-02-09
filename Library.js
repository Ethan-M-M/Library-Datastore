const { MongoClient, ObjectId, FindCursor } = require('mongodb');

class Library {
    constructor(dbUrl, dbName, collName) {
      this.dbUrl = dbUrl;
      this.dbName = dbName;
      this.collName = collName;
      this.dbClient;
      
    }

    async client() {
        console.log(`Connecting to ${this.dbUrl}...`)
        this.dbClient = MongoClient.connect(this.dbUrl)
        console.log("Connected to database.");
        return this.dbClient;
      }

      async test() {
        const client = await this.client()
        client.close()
      }

      async collection() {
        const client = await this.client();
        const db = client.db(this.dbName);
        const collection = db.collection(this.collName);
        return collection;
      }

      async allBooks() {
        const collection = await this.collection();
        return collection.find({});
      }

      async findOneBook(id) {
        const docId = ObjectId(id);
        const collection = await this.collection();
        return collection.find({docID});
      }

      async findBooks(query) {
        const collection = await this.collection();
        return collection.find(query);
      }

      async addBook(info) {
        const collection = await this.collection();
        collection.insertOne(info);
        await result;
        console.log(`Book was added!`);
      }
      // Add Books doesn't work, as far as I got.
}

module.exports = Library;