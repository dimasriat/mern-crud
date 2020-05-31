const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use("/assets", express.static(`${__dirname}/public`));

//ini buat berkomunikasi ke react
app.post("/", (req, res) => {
	const sender = req.body.chatForm.split(" ")[0].split(",")[0]; //ga penting cuma biar lucu aja ada sendernya
	setTimeout(() => res.send(`${sender}: iya dimm sama-sama yaa..`), 3000);
});

app.listen(8000, () =>
	console.log("The back-end is powered by express at http://localhost:8000/")
);
