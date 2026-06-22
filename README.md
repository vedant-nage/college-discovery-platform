# College Discovery Platform

## Overview

College Discovery Platform is a full-stack web application that helps students discover, search, and save colleges. Users can register, log in, browse colleges, search colleges by name, and save their preferred colleges for future reference.

The application also includes role-based access control where administrators can manage college data.

---

## Features

### User Features

* User Registration
* User Login with JWT Authentication
* Search Colleges
* View College Details
* Save Colleges
* View Saved Colleges
* Logout

### Admin Features

* Add New Colleges
* Update Existing Colleges
* Delete Colleges
* Role-Based Access Control (Admin Only)

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

---

## API Endpoints

### Authentication

#### Register

POST /api/auth/register

#### Login

POST /api/auth/login

---

### Colleges

#### Get All Colleges

GET /api/colleges

#### Search Colleges

GET /api/colleges?search=collegeName

#### Get College By ID

GET /api/colleges/:id

#### Add College (Admin Only)

POST /api/colleges

#### Update College (Admin Only)

PUT /api/colleges/:id

#### Delete College (Admin Only)

DELETE /api/colleges/:id

---

### Saved Colleges

#### Save College

POST /api/saved/:collegeId

#### Get Saved Colleges

GET /api/saved

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
cd client
npm run dev
```

---

## Future Enhancements

The current implementation stores an approximate annual college fee. Future versions will include:

* Branch-wise Fee Structure
* Course Specific Information
* Placement Statistics
* College Ranking System
* College Comparison Feature
* Admin Dashboard
* Pagination and Advanced Filters
* College Images and Gallery
* Reviews and Ratings by Students

---

## Project Structure

```text
college-discovery-api/

src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── validators/
├── app.js
└── server.js

client/
├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── App.jsx
```

---

## Author

Vedant

Built as a Backend Engineer Internship Assignment using MERN Stack and MongoDB.
