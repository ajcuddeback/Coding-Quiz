const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});