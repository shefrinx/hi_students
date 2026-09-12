# Hi Students 🎓

A simple **Student Management System** built using:

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas

This project allows users to:

- Add student details
- View student details
- Edit student details
- Delete student details

---

# 📌 What Is This Project?

**Hi Students** is a simple full-stack web application for managing student information.

The application has three main parts:

### 1. Frontend

The frontend is the part you see in your browser.

It is built using:

- HTML
- CSS
- JavaScript

### 2. Backend

The backend handles the application's logic and communication.

It is built using:

- Node.js
- Express.js

### 3. Database

The database stores the student information.

This project uses:

- MongoDB Atlas

---

# 🧠 How Does the Project Work?

The basic flow is:

```text
You
 ↓
Web Browser
 ↓
Frontend
 ↓
Node.js + Express.js
 ↓
MongoDB Atlas
 ↓
Database
```

For example, when you add a student:

```text
You enter student details
        ↓
Frontend collects the details
        ↓
Frontend sends the details to the backend
        ↓
Backend receives the details
        ↓
Backend sends the data to MongoDB Atlas
        ↓
MongoDB stores the student
        ↓
Backend sends a response
        ↓
Frontend displays the updated information
```

---

# ✨ Features

The application supports CRUD operations.

CRUD means:

| Operation | Meaning                  |
| --------- | ------------------------ |
| Create    | Add a new student        |
| Read      | View students            |
| Update    | Edit student information |
| Delete    | Remove a student         |

The backend provides these API endpoints:

| Operation | Method | Endpoint        |
| --------- | ------ | --------------- |
| Create    | POST   | `/students`     |
| Read      | GET    | `/students`     |
| Update    | PUT    | `/students/:id` |
| Delete    | DELETE | `/students/:id` |

---

# 📁 Project Structure

The project looks like this:

```text
hi_students/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### What are these files?

### `public/index.html`

Contains the structure of the website.

### `public/style.css`

Contains the design and styling of the website.

### `public/script.js`

Contains the frontend JavaScript logic.

It communicates with the backend.

### `server.js`

This is the main backend file.

It:

- Starts the server
- Connects to MongoDB
- Handles API requests
- Adds students
- Gets students
- Updates students
- Deletes students
- Serves the frontend

### `package.json`

Contains information about the project and the Node.js packages required by the project.

### `package-lock.json`

Keeps the exact dependency information used by npm.

### `.gitignore`

Tells Git which files should not be uploaded to GitHub.

For example:

```text
node_modules/
.env
```

### `.env`

Contains private environment variables such as the MongoDB connection string.

**This file should never be uploaded to GitHub.**

### `.env.example`

Shows which environment variables are required.

It does not contain the real database credentials.

### `README.md`

This file contains the instructions for setting up and running the project.

---

# ⚙️ Requirements

Before starting, make sure you have:

1. VS Code
2. Node.js
3. A MongoDB Atlas account
4. Internet connection

You already know how to clone this GitHub repository and open it in VS Code.

You do **not** need:

- MongoDB Server installed locally
- MongoDB Compass
- Any paid software

MongoDB Atlas is used as the cloud database.

---

# 🟢 STEP 1 — Install Node.js

Node.js is required to run the backend of this project.

Go to the official Node.js website:

https://nodejs.org/

Download the **LTS version** and install it using the normal installation options.

After installation, restart VS Code if it was already open.

---

# 🟢 STEP 2 — Check Node.js Installation

Open the project in VS Code.

Then open the VS Code terminal.

You can open the terminal using:

```text
Terminal → New Terminal
```

Run:

```powershell
node -v
```

You should see a version number.

For example:

```text
v22.x.x
```

Then run:

```powershell
npm -v
```

You should also see a version number.

For example:

```text
10.x.x
```

If both commands show version numbers, Node.js is installed correctly.

---

# 🟢 STEP 3 — Install Project Dependencies

The project requires several Node.js packages.

You do not need to install them one by one.

In the VS Code terminal, make sure you are inside the project folder.

Then run:

```powershell
npm install
```

This reads the project's `package.json` file and installs the required packages.

After it finishes, a folder called:

```text
node_modules
```

will be created.

You do not need to upload or commit the `node_modules` folder to GitHub.

It is already ignored by `.gitignore`.

---

# 🟢 STEP 4 — Create a MongoDB Atlas Account

This project needs a database to store student information.

We use **MongoDB Atlas** for this.

MongoDB Atlas is a cloud-based MongoDB database.

That means your database is stored online instead of only on your computer.

Create an account here:

https://www.mongodb.com/atlas

You can create a free account.

---

# 🟢 STEP 5 — Create a MongoDB Atlas Deployment

After creating your MongoDB Atlas account:

1. Log in to MongoDB Atlas.
2. Create a project.
3. Create a database deployment.
4. Select the free option if available.
5. Give your deployment a name.

You can use any name you want.

For example:

```text
hi_students
```

or:

```text
Cluster0
```

The exact deployment name does not matter for this project.

Wait for the deployment to finish creating.

---

# 🟢 STEP 6 — Create a Database User

MongoDB Atlas needs a username and password to allow your application to connect to the database.

In MongoDB Atlas:

1. Open your project.
2. Go to the database security section.
3. Find **Database Access**.
4. Create a new database user.

For example:

```text
Username:
my_student_user

Password:
your_password
```

You can choose your own username and password.

### ⚠️ IMPORTANT

Remember the username and password.

You will need them when creating the MongoDB connection string.

Do not share your database password publicly.

---

# 🟢 STEP 7 — Allow Your Computer to Connect

MongoDB Atlas blocks unknown connections by default.

You need to allow your computer's IP address.

In MongoDB Atlas:

1. Open your project.
2. Go to **Network Access**.
3. Add your current IP address.
4. Save the change.

MongoDB Atlas may automatically detect your current IP address.

Choose the option to add your current IP address if available.

### Why is this required?

Your application is running on your computer.

MongoDB Atlas needs permission to accept a connection from your computer.

---

# 🟢 STEP 8 — Get Your MongoDB Connection String

Now we need the connection string.

The connection string tells your application:

> "Which MongoDB database should I connect to, and how should I connect to it?"

In MongoDB Atlas:

1. Open your database deployment.
2. Click **Connect**.
3. Choose **Drivers**.
4. Select **Node.js** as the driver if required.
5. Copy the connection string.

It will look similar to:

```text
mongodb+srv://username:password@cluster.mongodb.net/
```

Your actual connection string will be different.

---

# 🟢 STEP 9 — Create the `.env` File

Go back to your project in VS Code.

You should already see:

```text
.env.example
```

Create a new file in the main project folder.

Name it exactly:

```text
.env
```

Your project should now contain:

```text
.env
.env.example
```

---

# 🟢 STEP 10 — Add Your MongoDB Connection String

Open the `.env` file.

Add:

```env
MONGODB_URI=your_mongodb_connection_string_here
```

Replace:

```text
your_mongodb_connection_string_here
```

with the MongoDB Atlas connection string you copied earlier.

For example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/studentDB?retryWrites=true&w=majority
```

### Important

Do not put spaces around `=`.

Correct:

```env
MONGODB_URI=mongodb+srv://...
```

Wrong:

```env
MONGODB_URI = mongodb+srv://...
```

---

# 🔐 IMPORTANT SECURITY WARNING

Your `.env` file contains private information.

For example:

```env
MONGODB_URI=mongodb+srv://username:password@...
```

This may contain your database username and password.

### NEVER upload `.env` to GitHub.

Do not:

- Post it online
- Send it to strangers
- Put it in screenshots
- Commit it to Git
- Share your database password

The project already contains a `.gitignore` file that ignores `.env`.

---

# 🟢 STEP 11 — What Is `.env.example`?

You may see:

```text
.env.example
```

This file is safe to share.

It contains something like:

```env
MONGODB_URI=your_mongodb_connection_string_here
```

It tells another developer:

> "This project needs a variable called MONGODB_URI."

It does not contain the real database password.

The developer must create their own `.env` file and add their own MongoDB Atlas connection string.

---

# 🟢 STEP 12 — Start the Application

Now everything should be ready.

Open the VS Code terminal.

Run:

```powershell
npm start
```

The application should start.

You should see something similar to:

```text
MongoDB connected successfully!
Website running at http://localhost:3000
```

If you see the MongoDB connection success message, the application has successfully connected to your MongoDB Atlas database.

---

# 🟢 STEP 13 — Open the Website

Open your web browser.

Go to:

```text
http://localhost:3000
```

The Hi Students application should now open.

You can use the application to:

- Add students
- View students
- Edit students
- Delete students

---

# 🗄️ Where Is the Student Data Stored?

When you add a student through the website, the data is not stored inside the HTML file.

The data is sent to the backend.

The backend sends it to MongoDB Atlas.

The database contains:

```text
Database:
studentDB

Collection:
students
```

The exact database and collection names are created/used by the application.

---

# 🔄 Understanding the Complete Application

Here is the complete flow:

```text
                 USER
                   │
                   ▼
             WEB BROWSER
                   │
                   ▼
          ┌─────────────────┐
          │    FRONTEND     │
          │ HTML/CSS/JS     │
          └─────────────────┘
                   │
                   │ HTTP Request
                   ▼
          ┌─────────────────┐
          │     BACKEND     │
          │ Node.js/Express │
          └─────────────────┘
                   │
                   │ MongoDB Request
                   ▼
          ┌─────────────────┐
          │  MONGODB ATLAS  │
          │    DATABASE     │
          └─────────────────┘
```

---

# 🧩 What Does `server.js` Do?

`server.js` is the main backend file.

When you run:

```powershell
npm start
```

the following happens:

```text
npm start
   ↓
node server.js
   ↓
Express server starts
   ↓
MongoDB connection is created
   ↓
Application waits for requests
```

When you use the website, the backend handles the requests.

---

# 🔌 API Endpoints

The backend provides these endpoints:

## Create Student

```text
POST /students
```

Used to add a new student.

---

## Get Students

```text
GET /students
```

Used to retrieve student information.

---

## Update Student

```text
PUT /students/:id
```

Used to update an existing student.

---

## Delete Student

```text
DELETE /students/:id
```

Used to delete a student.

---

# 🧠 What Is CRUD?

CRUD is a common term in software development.

It means:

```text
C → Create
R → Read
U → Update
D → Delete
```

In this project:

```text
Create → Add Student
Read   → View Students
Update → Edit Student
Delete → Remove Student
```

---

# 🛠️ MongoDB Compass (Optional)

MongoDB Compass is **not required** to run this project.

However, you can install MongoDB Compass if you want a graphical interface to view your MongoDB database.

You can connect Compass to your MongoDB Atlas database using your Atlas connection string.

This allows you to view the student data stored in:

```text
studentDB
   ↓
students
```

Again:

> MongoDB Compass is optional.

The website can work without Compass.

---

# ❗ Common Problems and Solutions

## Problem 1 — `npm is not recognized`

Example:

```text
npm is not recognized...
```

### Solution

Node.js may not be installed correctly.

Install Node.js from:

https://nodejs.org/

Then restart VS Code.

Check:

```powershell
node -v
npm -v
```

---

# Problem 2 — `MONGODB_URI` is undefined

You may see an error related to:

```text
MONGODB_URI
```

### Check these things:

1. Make sure `.env` exists.
2. Make sure `.env` is in the main project folder.
3. Make sure the variable is exactly:

```env
MONGODB_URI=your_connection_string
```

4. Make sure you saved the `.env` file.
5. Restart the application.

---

# Problem 3 — MongoDB Connection Error

If MongoDB does not connect, check:

### 1. MongoDB Atlas is running

Make sure your Atlas deployment is available.

### 2. Username is correct

Check your MongoDB Atlas database user.

### 3. Password is correct

Make sure the password in the connection string is correct.

### 4. IP address is allowed

Go to MongoDB Atlas:

```text
Network Access
```

Make sure your current IP address is allowed.

### 5. Connection string is correct

Make sure the MongoDB connection string was copied correctly.

---

# Problem 4 — Website Does Not Open

If you run:

```powershell
npm start
```

and the terminal shows:

```text
Website running at http://localhost:3000
```

open:

```text
http://localhost:3000
```

Do not open `index.html` directly from your computer.

For example, do not use:

```text
file:///C:/hi_students/public/index.html
```

The application needs the Node.js server to run correctly.

---

# Problem 5 — Port Already in Use

If another application is already using the required port, the server may not start correctly.

Close the other application using the port and try again.

Then run:

```powershell
npm start
```

---

# 🛑 How to Stop the Server

When the application is running in the terminal, press:

```text
Ctrl + C
```

This stops the Node.js server.

To start it again:

```powershell
npm start
```

---

# 🔒 Security Rules

Please follow these rules when using or modifying this project.

### Never upload:

```text
.env
```

### Never publish:

- MongoDB passwords
- Database credentials
- API keys
- Secret tokens

### Safe to upload:

```text
.env.example
```

because it does not contain real credentials.

---

# 🌐 GitHub and Database Are Different

The GitHub repository contains the **application code**.

MongoDB Atlas contains the **database**.

They are separate.

```text
GitHub
   ↓
Application Code

MongoDB Atlas
   ↓
Student Data
```

The GitHub repository does not need to contain the actual database password.

---

# 👤 Using Your Own MongoDB Atlas Account

If you are another person using this project, you should create and use your **own MongoDB Atlas account and database credentials**.

Do not ask the project author for their `.env` file.

Create your own:

```text
.env
```

and put your own:

```env
MONGODB_URI=...
```

inside it.

This keeps database credentials private and allows you to run your own copy of the project.

---

# 📋 Quick Start

If you already understand the detailed instructions above, the basic setup is:

### 1. Clone the repository

```powershell
git clone https://github.com/shefrinx/hi_students.git
```

### 2. Open the project in VS Code

### 3. Install dependencies

```powershell
npm install
```

### 4. Create MongoDB Atlas account

Create a free database deployment and database user.

### 5. Allow your IP address

Add your current IP address in MongoDB Atlas Network Access.

### 6. Get your MongoDB connection string

MongoDB Atlas → Connect → Drivers

### 7. Create `.env`

```env
MONGODB_URI=your_mongodb_connection_string
```

### 8. Start the project

```powershell
npm start
```

### 9. Open the website

```text
http://localhost:3000
```

That's it.

---

# 💡 Technologies Used

## HTML

Used to create the structure of the web page.

## CSS

Used to design and style the web page.

## JavaScript

Used to add functionality and communicate with the backend.

## Node.js

Used to run JavaScript on the server.

## Express.js

Used to create the backend server and API endpoints.

## MongoDB

Used as the database.

## MongoDB Atlas

Provides MongoDB as a cloud database.

## Git

Used for version control.

## GitHub

Used to store and share the project source code.

---

# 📚 What You Can Learn From This Project

This project is useful for learning the basics of full-stack web development.

You can learn:

- Frontend development
- Backend development
- REST APIs
- CRUD operations
- Node.js
- Express.js
- MongoDB
- MongoDB Atlas
- Environment variables
- `.env` files
- Git
- GitHub
- Client-server communication
- Database operations

---

# 👨‍💻 Author

**Shefrin Xavier A**

Instagram:

https://www.instagram.com/shefrin.a/

B.E. Electronics and Communication Engineering

GitHub:

https://github.com/shefrinx

---

# 📄 License

This project is available for learning and educational purposes.
