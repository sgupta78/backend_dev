const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://shivamgupta01407:ywDrJ09krfeNtStp@backenddev.d1s42kb.mongodb.net/';

const client = new MongoClient(url);

const dbName = 'Testing';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('User');

    const data = {
        firstsname: "salman",
        lastname: "kh",
        city: "meerir"
    }

    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    const deleteResult = await collection.deleteMany({ firstname: "deepika" });
    console.log('Deleted documents =>', deleteResult);

    const updateResult = await collection.updateOne({ firstname: "shivam" }, { $set: { city: "delhi" } });
    console.log('Updated documents =>', updateResult);


    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());