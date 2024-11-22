const execution = require("./rendercarts");
const axios = require("axios");

const fetchData = async () => {
  try {
    const data = await axios.get("https://students-api.up.railway.app/movies");
    console.log(data);
    execution(data.data);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
