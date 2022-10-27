const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories =require("./data/courseName.json")
const allcoursesDetails=require("./data/details.json")

app.use(cors());

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/course-categories', (req, res) => {
  
    res.send(categories)
});


app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const courseDetails =allcoursesDetails.find(course =>course.id===id);
    res.send(courseDetails);
});
app.listen(port, () => {
    console.log('learning platform Server running on port', port);
})