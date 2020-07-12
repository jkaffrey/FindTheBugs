
/*
* DO NOT modify this file, it's just data.
*/
module.exports = [
  {
    title: 'New route doesn\'t work',
    description: 'When I attempt to go to /bugs/new to create a new bug, instead of getting the new form I get a page with an error on it from ejs. The page and route do exist on the server and the HTML looks fine from what I can tell, so it doesn\'t seem to be directly related to the code itself. Maybe look over the server.js and see.',
    repoduceSteps: '',
    picture: '',
    developer: 'Vin Diesel',
    priority: 'High',
    resolved: false
  },
  {
    title: 'Edit route missing data',
    description: 'The edit route /bugs/:id/edit needs to automatically fill the inputs with the correct values, the description input field doesn\'t seem to be auto filling.',
    repoduceSteps: '',
    picture: '/images/bug_2.png',
    developer: 'Dwayne \'The Rock\' Johnson',
    priority: 'Low',
    resolved: false
  },
  {
    title: 'Missing validation on form',
    description: 'When creating a new bug using the /bugs/new route there is no validation on the title field to require it in the form. This means that the user can create a bug without a title which in turn breaks the styling of our show all page.',
    repoduceSteps: ['1) Go to localhost:3000/bugs/new', '2) Leave the title field empty', '3) Click the create button at the bottom of the page.', '4) Notice there is no title on the bug'],
    picture: '',
    developer: 'John Snow',
    priority: 'Medium',
    resolved: false
  }
];
