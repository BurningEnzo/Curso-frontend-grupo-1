export const country = async function getCountries() {
  let queryC = `query{
        countries{
            name
            code
            native
            phone
            continent{
              name
            }
            capital
            currency  
            languages{
            name
            }
            emoji
            emojiU  
            states{
            name
                  }
            }           
       }`;

  let body = { query: queryC };
  console.log("body", body);

  let resp = await fetch("https://countries.trevorblades.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let data = await resp.json();
  console.log("data", data);
  return data;
};
