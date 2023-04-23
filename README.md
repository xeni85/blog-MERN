## MERN Blog
This is a simple blogging platform built using the MERN (MongoDB, Express, React, Node.js) stack. Users can sign up, create new blog posts, and read other users' blog posts. The platform uses JSON Web Tokens (JWTs) for authentication and authorization.

## Prerequisites
Before running the application, make sure you have the following software installed on your machine:

# Node.js
# MongoDB

## Installation
Clone the repository: git clone https://github.com/your-username/mern-blog.git
Navigate to the project directory: cd mern-blog
Install dependencies: npm install
Create a .env file in the root directory and add the following environment variables:
makefile
Copy code
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Start the application: npm start
The application will start running on http://localhost:3000.

## Usage
Sign up
To create a new account, click the "Sign up" button on the navigation bar and fill in the registration form. Once you submit the form, you will be redirected to the login page.

## Login
To login, click the "Login" button on the navigation bar and enter your email and password. If your credentials are valid, you will be redirected to the home page.

## Create a blog post
To create a new blog post, click the "New Post" button on the navigation bar and fill in the form. Once you submit the form, your blog post will be published to the site.

## Read a blog post
To read a blog post, click on the post title on the home page. You will be redirected to the post page, where you can read the full post and any comments.

## Edit a blog post
To add a comment to a blog post, scroll to the bottom of the post page and fill in the comment form. Once you submit the form, your comment will be added to the post.


