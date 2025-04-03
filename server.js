// Import the express module to create the server and handle HTTP requests
import express from "express";

// Import the method-override module to handle HTTP method overriding (PUT, DELETE)
import methodOverride from "method-override";

// Import the body-parser module to parse the request body
import bodyParser from "body-parser"; 

// Create a new instance of the express application
const app = express();

// Set the port number for the server to listen on
const port = 3000;

// Use the body-parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Use the method-override middleware to handle HTTP method overriding
app.use(methodOverride('_method'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use the express.static middleware to serve static files from the "public" directory
app.use(express.static('public'));

// Initialize an empty array to store the posts
let posts = [];

let idCounter = 1;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Define a function named findPostById that takes an 'id' parameter.
// This function is used to find a specific post in the 'posts' array by its ID.
// 
// The function uses the 'find' array method to iterate over each post in the 'posts' array.
// It defines an arrow function that takes a 'post' parameter and checks if the 'id' of the 'post'
// matches the 'id' parameter passed to the findPostById function.
// The 'parseInt' function is used to convert the 'id' parameter to a number before comparing it.
// If a match is found, the function returns that post.
// If no match is found, the function returns undefined.
function findPostById(id) {
  return posts.find(post => post.id === parseInt(id));
}


// Define a route for the root path ("/") that renders the "index" view, passing the "posts" array as a parameter.
app.get('/', (req, res) => {
  res.render('index', { posts }); // Render the "index" view and pass the "posts" array as a parameter.
});

// Define a route for the "/posts/new" path that renders the "new" view.
app.get('/posts/new', (req, res) => {
  res.render('new'); // Render the "new" view.
});

// Define a route for the "/posts" path that handles POST requests.
// When a user submits a form to create a new post, this route is triggered.
// The request body contains the data from the form, which is used to create a new post object.
// The new post object is added to the "posts" array and the user is redirected to the root path ("/").
app.post('/posts', (req, res) => {
  const newPost = {
    id: idCounter++,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    createdAt: new Date().toLocaleString(),
    tags: req.body.tags.split(',').map(tag => tag.trim())
  };
  posts.push(newPost);
  res.redirect('/'); // Redirect the user to the root path ("/").
});

// Define a route for the "/posts/:id/edit" path that handles GET requests.
// When a user navigates to this route, the server looks for a post with the specified ID in the "posts" array.
// If a post is found, the server renders the "edit" view and passes the post as a parameter.
// If a post is not found, the server responds with a 404 status code and a message indicating that the post was not found.
app.get('/posts/:id/edit', (req, res) => {
  const post = findPostById(req.params.id);
  if (post) {
    res.render('edit', { post }); // Render the "edit" view and pass the post as a parameter.
  } else {
    res.status(404).send('Post not found'); // Respond with a 404 status code and a message indicating that the post was not found.
  }
});

// Define a route for the "/posts/:id" path that handles PUT requests.
// When a user submits a form to edit a post, this route is triggered.
// The request body contains the updated data for the post.
// The server looks for a post with the specified ID in the "posts" array and updates the post with the new data.
// If a post is found, the server redirects the user to the root path ("/").
// If a post is not found, the server responds with a 404 status code and a message indicating that the post was not found.
app.put('/posts/:id', (req, res) => {
  const post = findPostById(req.params.id);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    post.author = req.body.author;
    post.tags = req.body.tags.split(',').map(tag => tag.trim());
    res.redirect('/'); // Redirect the user to the root path ("/").
  } else {
    res.status(404).send('Post not found'); // Respond with a 404 status code and a message indicating that the post was not found.
  }
});

// Define a route for the "/posts/:id" path that handles DELETE requests.
// When a user submits a form to delete a post, this route is triggered.
// The server looks for a post with the specified ID in the "posts" array and removes the post from the array.
// The server redirects the user to the root path ("/").
app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(post => post.id !== parseInt(req.params.id));
  res.redirect('/'); // Redirect the user to the root path ("/").
});

// Start the server and listen on port 3000.
// When the server is running, log a message to the console indicating that the server is running.
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
