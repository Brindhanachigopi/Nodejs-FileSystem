import express from "express";
import fs from "fs";
import { format } from "date-fns";

const app = express();
const PORT = 4000;

app.get('/', (request, response) => {
    response.status(200).json("Have a Nice Day!")
})

let currentDay = format(new Date(), "dd-mm-yyyy-hh-mm-ss");
//console.log(("currentDay", currentDay));
const filePath = `Date-Time/${currentDay}.txt`;

app.get("/write", (request, response) => {
  fs.writeFileSync(filePath, `${currentDay}`, "utf8");
  response.status(200).json({ currentDay });
});

app.get("/read", (request, response) => {
  const data = fs.readFileSync(filePath, "utf8");
  response.status(200).send(data);
});

app.listen(PORT, () => {
  console.log(`App is running in the port ${PORT}`);
});
