

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors');

const host = "localhost";
const port = 8000;



app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(__dirname + "/public"));

app.post("/", function (req, res) {
  const { name, email, phone, company, subject, message } = req.body;

  res.write("<h1>Hola " + name + " de " + company + "!!! </h1>");
  res.write("<h2>Hemos recibido tu mensaje sobre " + subject + "!!</h2>");
  res.write("<h3>Mensaje: </h3><i><small>" + message + "</small></i>");
  res.write(
    `<h4>Contactaremos contigo a traves del telefono: ${phone} o a traves del e-mail ${email}</h4><br><br>`
  );

  //<img src="https://media2.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif?cid=ecf05e47k1wq5i0198zy4ahmx9h7dh5i4nie7fa3v7yb0qq2&rid=giphy.gif&ct=g" alt="Michael Scott dancing">

  res.write(
    "<img src=" +
      "https://media2.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif?cid=ecf05e47k1wq5i0198zy4ahmx9h7dh5i4nie7fa3v7yb0qq2&rid=giphy.gif&ct=g" +
      "alt=" +
      "Michael Scott dancing" +
      ">"
  );

  res.send();
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

