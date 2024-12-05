require("dotenv").config();
const mongoose = require("mongoose");

// hacer la conexion a la db en una funciona y despues exportar la funcion

const conDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = conDB;
