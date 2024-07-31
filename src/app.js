const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();

const bookRoutes = require("./routes/book.route");

//Middlewares
const app = express();
app.use(bodyParser.json()); // Analiza los datos en formato JSON y los datos se adjuntan a req.body

//Conexion a base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

app.use("/books", bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Escuchando el puerto ${port}`);
});
