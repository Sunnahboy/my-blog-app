![Uploading image.png…]()

# My Blog App

A lightweight blog application built with Express, EJS, and Node.js that allows you to create, edit, and delete posts in a simple, in-memory datastore.

## Overview

My Blog App demonstrates core web development concepts using Node.js and Express. It features:
- **RESTful Routes:** Create, read, update, and delete blog posts.
- **Templating with EJS:** Dynamic HTML rendering for a seamless user experience.
- **Middleware Integration:** Utilizing body-parser for form data and method-override to simulate PUT and DELETE requests.
- **Rapid Setup:** Minimal configuration to get you started quickly on local development.

## Features

- **CRUD Operations:** Add new posts, edit existing posts, and delete posts.
- **Dynamic Content Rendering:** EJS templates render views dynamically based on server data.
- **In-Memory Data Storage:** Posts are stored in an array for simplicity (ideal for prototyping).
- **Easy-to-Extend Architecture:** A solid foundation for adding more advanced features like database integration.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/YOUR-USERNAME/my-blog-app.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd my-blog-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Application

Start the server with the following command:

```bash
node app.js
```

Then open your web browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Project Structure

quick overview of the project layout:

```
my-blog-app
├── node_modules/          # Project dependencies
├── public/                # Static assets (CSS, images, JS)
├── views/                 # EJS templates for dynamic pages
│   ├── partials/          # Reusable EJS partials (header, footer, etc.)
│   ├── edit.ejs           # Template for editing posts
│   ├── index.ejs          # Homepage template listing all posts
│   └── new.ejs            # Template for creating new posts
├── app.js                 # Main application file
├── package.json           # Project metadata and dependencies
├── .gitignore             # Files and folders to ignore in Git
└── README.md              # Project documentation (this file)
```

## How to Contribute

Contributions are welcome! If you’d like to improve the project, please follow these steps:

1. **Fork the Repository** and create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-name
   ```

2. **Commit Your Changes:**
   ```bash
   git commit -m "Add feature or fix issue"
   ```

3. **Push to Your Fork:**
   ```bash
   git push origin feature-name
   ```

4. **Submit a Pull Request** detailing your changes and why they should be merged.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact
---

Feel free to tweak any sections to better suit your needs or reflect additional project details. Enjoy coding and happy blogging!
