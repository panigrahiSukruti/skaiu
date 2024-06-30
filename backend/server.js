require('dotenv').config();
const path = require('path');
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes.js");
const episodeRoutes = require("./routes/episodeRoutes");
const cors = require("cors");
const connectToMongo = require('./db/connectToMongo.js');
const app = express();

const __directoryname = path.resolve()
if(process.env.NODE_ENV === "production"){
	app.use(express.static(path.join(__directoryname, "/my-react-app/dist")));

	app.get("*", (request, response) => {
		response.sendFile(path.resolve(__directoryname, "my-react-app", "dist", "index.html"))
	})
}

app.use(cors());
app.use(bodyParser.json());
app.use("/projects", projectRoutes);
app.use("/user", userRoutes);
app.use("/episodes", episodeRoutes);
// const mongoUrl = process.env.MONGO_URI;
// let mongoURI;
// if (process.env.NODE_ENV === "production") {
// 	mongoURI = mongoUrl;
// } else {
// 	mongoURI = "mongodb://localhost:27017/skailama";
// }


// mongoose
// 	.connect(process.env.MONGO_URI)
// 	.then(() => {
// 		console.log("Connected to MongoDB");
// 	})
// 	.catch((err) => {
// 		console.error("MongoDB connection error:", err);
// 	});
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
// 	console.log("Connected to MongoDB");
// });

app.get("/", (req, res) => {
	res.json({
		hello: "welcome",
	});
});

// node / express server
app.listen(process.env.PORT, () => {
	console.log(`server started on 8080`);
	connectToMongo()
});