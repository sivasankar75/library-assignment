const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sivasankar:atLasDB22@cluster0.nxczl99.mongodb.net/LibraryDB?retryWrites=true&w=majority')
.then(() => { console.log("Mongodb has been successfully connected"); })
.catch( error => { console.log("Mongodb connection error : "+ error);})