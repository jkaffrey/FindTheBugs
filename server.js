// Setup our npm modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Configure our npm modules
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true }));
app.use(methodOverride('_method'));

// Import our data from our datastore
const databaseEntries = require('./models/data.js');

// The Index route. This is the home page that the user will hit when they go
// to our website urlencoded
app.get('/', function (req, res) {
  res.render('index.ejs');
})

// The route will render when we go  to localhost:3000/bugs/showall
// The page should show all of the bugs that we have found and reported
app.get('/bugs/showall', function (req, res) {
  res.render('showall.ejs', {
    allOfOurData : databaseEntries // send all the information in our databaseEntries to the client with a name of allOfOurData
  });
})

// This route will render one of our bug objects and all the data associated with it
// This route ALWAYS NEEDS TO BE THE LAST ROUTE in this file otherwise it can break other routes.
app.get('/bugs/:id', function(req, res) {
  res.render('show.ejs', {
    singularBug : databaseEntries[req.params.id],
    id : req.params.id
  })
})

// This route will render a page with a form for generating new bugs
app.get('/bugs/new', function (req, res) {
  res.render('new.ejs');
})

// Route that houses the logic for generating a new bug
app.post('/bugs/new', function (req, res) {
  req.body.resolved = false;
  req.body.picture = '';
  databaseEntries.push(req.body);
  res.redirect('/bugs/' + (databaseEntries.length - 1));
})

// The edit route that shows the form and data of bugs that we can then edit
app.get('/bugs/:id/edit', function (req, res) {
  res.render('edit.ejs', {
    singularBugEntry : databaseEntries[req.params.id],
    id : req.params.id
  })
})

// Route that houses all the logic for editing a bug
app.put('/bugs/:id/edit', function(req, res) {
  databaseEntries[req.params.id] = req.body;
  res.redirect('/bugs/' + req.params.id);
})

// Route that houses all the logic for deleting a bug
app.delete('/bugs/:id', function(req, res) {
  databaseEntries.splice(req.params.id, 1);
  res.redirect('/bugs/showall');
})

app.listen(3000);
