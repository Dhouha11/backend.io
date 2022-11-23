const express = require('express');
const booksRouter = require('./routes/booksRouter');
const app = express();


app.use('/books',booksRouter);





//lancer le serveur sur le port 3000
app.listen(8000, () => {
console.log("server is running");
}
);