// Bring in the express server and create application 
let express = require('express'); 
let app = express(); 

// Use the express Router object 
let router = express.Router(); 
// Create an array of pie objects 
let pies = [
  { "id": 1, "name": "Apple" },
  { "id": 2, "name": "Cherry"},
  { "id": 3, "name": "Peach" }, 
];

// Create GET to return a list of all pies
router.get('/', function(req, res, next) {
  //res.status(200).send(pies);
  res.status(200).json({
    "status": 200,
    "statusText": "OK",
    "message": "All pies retrieved.",
    "data": pies,
  });
});

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router); 

// Create server to listen on port 5000
var server = app.listen(5000, function () {
  console.log('Node server is running on http://localhost:5000..');
});