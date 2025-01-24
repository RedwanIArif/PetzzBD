PetzzBD is a MERN stack project designed as a complete pet care service provider platform. It mainly has the following features.
- Veterinarian Doctor's Portal.
- Shop for medicine and pet care products.
- Adoption Service.
- Blog section.
- Daycare Service.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, you'll need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

### Steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/RedwanIArif/PetzzBD.git
   cd PetzzBD
   ```

2. **Install Dependencies:**

   Navigate to the frontend and backend directories and install the necessary dependencies.

   ```bash
   # Navigate to the frontend
   cd petzzbd-frontend
   npm install

   # Navigate to the backend
   cd ../petzzbd-server-main
   npm install
   ```

## Setup

1. **Environment Variables:**

   Create `.env` files in both the `petzzbd-frontend` and `petzzbd-server-main` directories.

   For `petzzbd-server-main/.env`:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=your_port_number
   ```

   For `petzzbd-frontend/.env.local` (if applicable):

   ```env
   REACT_APP_API_URL=http://localhost:your_backend_port
   ```

2. **Start MongoDB:**

   Ensure MongoDB is running on your system. You can start MongoDB using:

   ```bash
   mongod
   ```

## Running the Project

### Backend:

Navigate to the `petzzbd-server-main` directory and start the backend server:

```bash
npm start
```

### Frontend:

Navigate to the `petzzbd-frontend` directory and start the frontend server:

```bash
npm start
```

### Access the Application:

Once both servers are running, open your browser and go to `http://localhost:3000` to see the application.

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS (or any other CSS framework used)

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

## Project Structure

```
PetzzBD/
├── petzzbd-frontend/
│   ├── public/
│   ├── src/
│   ├── .env.local
│   └── package.json
├── petzzbd-server-main/
│   ├── src/
│   ├── .env
│   └── package.json
└── README.md
```
