global.foodData = require("./db")(function call(err, data, CatData) {
  // console.log(data)
  if (err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
});

const express = require("express");
const FoodData = require("./models/FoodData");
const Orders = require("./models/Orders");
const order = require("./models/Orders");
const User = require("./models/User");
const app = express();
const cors = require("cors")

const port = 5000;
app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/foodData", async (req, res) => {
  const data = await FoodData.find({});
  // console.log(data);
  res.send(data);
});

app.get("/allorders", async (req, res) => {
  // const data = await FoodData.find({});
  // // console.log(data);
  // res.send(data);
  let orders = await order.find();
  res.status(200).send(orders)
});

// app.put('/updateOrder/:id/:email', async function (req, res) {
//   // const usersOfOrder = await Orders.find({ email: req.params.email, "order_data.$.id": req.params.id })\

//   const usersOfOrder2 = await Orders.findOneAndUpdate(
//     { email: req.params.email },
//     { $set: { "order_data.$[inner].status": "done" } },
//     { arrayFilters: [{ "inner.id": req.params.id }], new: true }
//   )
//   /***const usersOfOrder2 = await Orders.updateOne(
//     { email: req.params.email, "order_data.id": req.params.id },
//     { $set: { "order_data.$.status": "done" } }
//   )***/


//   // , { $set: { "order_data.status": "status" } }
//   const status = "done"
//   console.log(usersOfOrder2);
//   // db.myCollection.updateOne(
//   //   { "_id": ObjectId("6149c9a3fc0aa07c753082b3"), "items.id": 2 },
//   //   { $set: { "items.$.quantity": 20 } }
//   // )
//   // const orders = []
//   // if (users) {
//   //   for (let i = 0; i < users.length; i++) {
//   //     const element = users[i];
//   //     const yz = element.order_data[0]
//   //     orders.push(yz[1])
//   //   }
//   //   orders.map((el) => {

//   //   })
//   //   console.log(orders)
//   //   res.status(200).send("ok")
//   // }
// });
app.use("/api/auth", require("./Routes/Auth"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
