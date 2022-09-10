
async function getCountries() {
    let query = `query {
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
            }
       }`;

    let body = { query: query };
    console.log("resp",resp);
    let resp = await fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    console.log("body",body);
    let data = await resp.json()
    console.log(data)
}

export {getCountries};