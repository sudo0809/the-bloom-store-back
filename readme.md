# The Bloom Store
Place to buy or sell everything and anything related fauna.

# Dependencies
- Node { v20.7.0 }
- Nodemon
- express
- mongodb
- mongoose
- multer
- node-mailjet

# Getting Started

### Step-1
Clone this repo.\
HTTPS clone -> `git clone https://github.com/sudo0809/the-bloom-store-back.git`

### Step-2
Run `npm install` to get all the node packages

### Step-3
create a .env file in the root directory and add the below content.
Replace the `{}` value accordingly
```
NODE_ENV = 'development'

PORT = 8080
DATABASE = {mongo db server url}
CLIENT_ORIGIN = 'http://localhost:3000'
SECRET_KEY = 'secret'

MAILJET_API_KEY = {MAILJET_API_KEY}
MAILJET_SECRET_KEY = {MAILJET_SECRET_KEY}
```

### Step-4
Run the below command to start the server.\
command -> `npm run dev`

### Step-5
Proceed with the frontend [repo](https://github.com/sudo0809/the-bloom-store-front)



