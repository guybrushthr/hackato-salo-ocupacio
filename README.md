# hackato-salo-ocupacio

## Description

This project is designed to manage activities and user registrations for a centre civic. It includes features for creating, reading, updating, and deleting activities and users.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/guybrushthr/hackato-salo-ocupacio.git
   cd hackato-salo-ocupacio
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the database:

   - start docker container for your MongoDB database

     ```sh
     docker-compose up -d
     ```

   - Ensure MongoDB is running.

## Usage

To start the development server with live reload:

```sh
npm run dev
```

3. The server will be running at `http://localhost:3000`.

## API Endpoints

### Activities

- **Create Activity**
  - `POST /appActivitats/activity`
  - Example to send in req.body: `{ "nom": "Sessió de Ioga", "descripció": "Classe de ioga per relaxar-se i estirar els músculs.", "capacitat_màxima": 20 }`

### Users

- **Create User**

  - `POST /appActivitats/user`
  - Example to send in req.body: `{ "user_firstname": "Michael", "user_lastname": "R", "user_nickname": "guybrush", "user_age": 38, "user_email": "mr@example.com" }`

- **Delete User**
  - use email-address as an identifier, for example `DELETE /appActivitats/user/mr@example.com`
