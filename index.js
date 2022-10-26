const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories =require("./data/courseName.json")
app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.listen(port, () => {
    console.log('learning platform Server running on port', port);
})