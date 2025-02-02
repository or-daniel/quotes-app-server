## Description

A React application for displaying random quotes of the day. This is the **backend** part.

## Prerequisites

- Node.js
- npm
- MongoDB [(Install MongoDB)](https://docs.mongodb.com/manual/installation/)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/or-daniel/quotes-app-server.git

   cd quotes-app-server
   ```

2. Ensure that the .env file is present in the root directory with the following content, and set up environment variables

   ```sh
    MONGO_URI=mongodb://localhost:27017/quotesdb

    PORT=3000

    FAVQS_API=https://favqs.com/api

    API_KEY=48cb1ca3a8f471bc661e9a49fbdc00fe

   ```

3. Start the MongoDB server if it is not already running:

   ```sh
   mongod
   ```

4. Start the server using nodemon
   ```sh
   npm run dev
   ```
