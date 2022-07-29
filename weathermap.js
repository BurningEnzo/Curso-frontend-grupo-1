import fetch from "node-fetch";

async function getMyData() {
  let response = await fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat={41.3879}&lon={2.16992}&appid={98c5a609f513ca79bdbd1c97df82d17e}"
  );
  let data = await response.json();
  console.log(data);
}

modules.exports={getMyData};
