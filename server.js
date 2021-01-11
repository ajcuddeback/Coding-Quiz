const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})