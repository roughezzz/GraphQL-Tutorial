const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

// connecting to database
mongoose.connect('mongodb+srv://boo2:boo2boo2@boo2-rafi-0euvl.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB');
});

const app = express();
// Using cors
app.use(cors());

app.use('/graphql', graphqlHTTP({ 
    schema: schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log('App is running in port 4000');
})