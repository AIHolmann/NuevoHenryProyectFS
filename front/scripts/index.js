const execution = require("./rendercarts");
const axios = require("axios");

const fetchData = async () => {
  try {
    const data = await axios.get("http://localhost:3000/movies");
    console.log(data);
    execution(data.data.movies);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
