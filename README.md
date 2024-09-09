# Intergalactic Trade Network - Backend

This project is the backend for the Intergalactic Trade Network, built using *NestJS* and *MongoDB*. The API supports managing trades, cargo, and inventory through RESTful endpoints and real-time WebSocket features.

## Features

- *User Authentication*: JWT-based authentication.
- *Real-Time Updates*: WebSocket support for real-time notifications.
- *RESTful APIs*: CRUD operations for trades, cargo, and inventory.

## Design Decisions and Architecture

- *NestJS Framework*: Modular and scalable, allowing for easy integration and unit testing.
- *MongoDB*: A NoSQL database used for flexible schema management.
- *WebSocket*: Provides real-time updates for trades and inventory changes.

## Setup and Installation

### Prerequisites

- *Node.js*: Ensure you have Node.js v14 or higher installed.
- *MongoDB*: Install MongoDB and run it locally or use a cloud provider like MongoDB Atlas.

### Steps

1. Clone the repository:
   
   git clone https://github.com/amitkojha05/myproject
   cd circlepe-backend
   

2. Install dependencies:
   
   npm install
   

3. Set up environment variables:

   Create a .env file in the root directory:
   env
   
   DATABASE_URL=mongodb://127.0.0.1/circlepe
   JWT_SECRET=your_secret_key
   PORT=3000
   

5. Start MongoDB (if not using cloud):
   
   mongod
   

6. Start the backend in development mode:
   
   npm run start:dev
   

## Running Tests

To run unit tests, execute:

npm run test


## API Documentation

### Trades API

- *GET /trades*: Get all trades.
- *POST /trades*: Create a new trade.
- *GET /trades/:id*: Get a specific trade by ID.
- *PUT /trades/:id*: Update a trade by ID.
- *DELETE /trades/:id*: Delete a trade by ID.

### Cargo API

- *GET /cargo*: Get all cargo items.
- *POST /cargo*: Create a new cargo item.
- *GET /cargo/:id*: Get a specific cargo item by ID.
- *PUT /cargo/:id*: Update a cargo item by ID.
- *DELETE /cargo/:id*: Delete a cargo item by ID.

### Inventory API

- *GET /inventory*: Get all inventory items.
- *POST /inventory*: Add an item to the inventory.
- *GET /inventory/:id*: Get a specific inventory item by ID.
- *PUT /inventory/:id*: Update an inventory item by ID.
- *DELETE /inventory/:id*: Remove an inventory item by ID.

### WebSocket

- */ws-trades*: Subscribe to real-time updates on trades.

## Deployment

1. Deploy the project on any cloud provider like AWS, Render, etc.
2. Ensure that MongoDB is either hosted locally or on a cloud provider like MongoDB Atlas.
3. Update environment variables in the cloud deployment environment.

## Known Limitations

- No detailed error handling for some edge cases.
- WebSocket connections are not yet fully authenticated.

## Future Improvements

- Implement more advanced features for cargo and trade management.
- Enhance error handling and logging.

---

