const execution = require("./rendercarts");
$.get("https://students-api.up.railway.app/movies", (Data) => {
  execution(Data);
});
