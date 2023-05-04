// Import necessary modules
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

app.use(bodyParser.json());
// Enable CORS for cross-origin resource sharing
app.use(cors());

// Create a new Mongoose model for clients based on the schema
  

// Connect to MongoDB using the Mongoose library
try {
    mongoose.connect('mongodb+srv://beniaridani:Daniel112.@cluster0.qj2ixge.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('Connected to MongoDB Atlas!');
} catch (error) {
  console.error('Error connecting to MongoDB Atlas:', error);
}



const driverSchema = new mongoose.Schema({
  role: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  carModel: String,
  birthDate: String,
  phoneNumber:String
});
// Define a new Mongoose schema for clients
const clientSchema = new mongoose.Schema({
  role: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const Client = mongoose.model("Client", clientSchema);
const Driver = mongoose.model("Driver",driverSchema);

//check if the user already exist or not and send error or save new client
app.post('/cregister', async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingClient = await Client.findOne({ email: req.body.email });
    if (existingClient) {
      // If the email exists, send a 400 error response
      return res.status(400).send({ message: 'Email already exists' });
    }
    // If the email does not exist, create a new client in the database and send a success response
    
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newClient = new Client({
      role:"Client",
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
    });
    
    try {
      // Save the new client document to the database
      const savedClient = await newClient.save();
      // Send the saved client document as the response
      // res.send(savedClient);
    } catch (error) {
      // If there was an error saving the client document, send a 500 error
      res.status(500).send(error);
    }
    res.status(201).send({ message: 'Client created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
});



app.post('/dregister', async(req, res) =>{
  try {
    // Check if the email already exists in the database
    const existingDriver = await Driver.findOne({ email: req.body.email });
    if (existingDriver) {
      // If the email exists, send a 400 error response
      return res.status(400).send({ message: 'Driver already exists' });
    }
    const hash = bcrypt.hashSync(req.body.password, salt);

    // If the email does not exist, create a new client in the database and send a success response
    const newDriver = new Driver({
      role:"Driver",
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      carModel: req.body.carModel,
      birthDate: req.body.birthDate,
      phoneNumber: req.body.phoneNumber,
    });

    try {
      // Save the new client document to the database
      const savedDriver = await newDriver.save();
      // Send the saved client document as the response
      // res.send(savedDriver);
    } catch (error) {
      // If there was an error saving the client document, send a 500 error
      res.status(500).send(error);
    }
    res.status(201).send({ message: 'Driver created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
});


//check if the user on the data base 
app.post('/login', async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingClient = await Client.findOne({ email: req.body.email });
    const existingDriver = await Driver.findOne({ email: req.body.email });
  
    if (existingClient) {
      // If the email exists in Client, send a success response with the client object
      return res.status(200).json({ message: existingClient });
    } else if (existingDriver) {
      // If the email exists in Driver, send a success response with the driver object
      return res.status(200).json({ message: existingDriver });
    } else {
      // If the email does not exist, send a 400 error response
      res.status(400).send({ message: 'Email does not exist' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
  
});

// Start the server listening on port 5000
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
