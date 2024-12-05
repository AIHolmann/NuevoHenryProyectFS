const app = require("./src/server");
const conDB = require("./src/config/conDb");

conDB()
  .then((res) => {
    app.listen(3000, () => {
      console.log("escuchando en el puerto 3000 creo");
    });
  })
  .catch((err) => {
    console.log(err);
  });
