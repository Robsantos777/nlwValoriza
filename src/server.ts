import express from "express"

const app = express();


app.get("/test", (request, response) => {
   return response.send("Olá NLW, Minha primeira aplicação em NODE");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW, Enviando por POST");
 });

app.listen(3000, () => console.log("Server is Running"));