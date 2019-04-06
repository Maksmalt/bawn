const express = require('express');
const app = express();

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

/* GET home page. */
app.get('/', (req,res) => res.json({
	msg: "Hello! Welcome to BAWN(Backend API with NodeJS)"
}));

// specifying port server will be running on (either server specifying port by itself OR port 5000)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

//