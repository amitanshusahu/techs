const app = require("express")();
const cors = require("cors");
app.use(cors());

const Client = require("pg").Client;

async function getClient(){
  const client = new Client("postgresql://localhost/postgres?user=postgres&password=example");
  await client.connect();
  return client;
}



// ( async () => {

//   const client = await getClient();

//   // create a user table
//   await client.query(`
//     CREATE TABLE users(
//       id SERIAL PRIMARY KEY,
//       email VARCHAR(225) unique not null,
//       password varchar(225) not null
//     );
//   `);

//   // create a todo table
//   await client.query(`
//       create table todos(
//         id serial primary key,
//         title text not null,
//         description text,
//         user_id integer references users(id),
//         done boolean default false
//       );
//   `)


// })();

// inserting data





app.get("/", (req, res) => {

  res.json({msg: "hello world"});

})


app.listen(8000, () => {
  console.log("server is running on port 8000");
})