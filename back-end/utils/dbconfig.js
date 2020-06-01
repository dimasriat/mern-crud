const mysql = require("mysql");

const resetTable = (turnedOn) => {
	if (turnedOn) {
		db.query(`DROP TABLE panitia`, (err) => {
			if (err) throw err;
			console.log("table dihapus");
			db.query(
				`create table panitia (
					id int auto_increment,
					nama varchar(255) not null,
					whatsapp varchar(255) not null,
					bidang varchar(255) not null,
					foto varchar(255),
					primary key (id)
				)`,
				(err) => {
					if (err) throw err;
					console.log("tabel dibuat");
				}
			);
		});
	}
};

const db = mysql.createConnection({
	user: "root",
	password: "",
	host: "localhost",
	database: "mernstack",
});

db.connect((err) => {
	if (err) throw err;
	console.log("connected!");
	resetTable(true);
});

module.exports = db;
