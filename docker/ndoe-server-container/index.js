const app = require("express")();
const mongoose = require("mongoose");

mongoose.connect("mongodb://dockermongo:27017/quteTube")
.then(() => {
	console.log("connected to db");
})
.catch(e => {
	console.log(e);
})

const schema = new mongoose.Schema({
	text: String,
});

const model = new mongoose.model("usermodel", schema);



app.get("/", async (req, res) => {
	await model.create({
		text: "hello there this is an entry"
	});
	res.json({ message: "hello from docker"});
});

app.listen(3000, () => {

	console.log("server is running on port 3000");

});
