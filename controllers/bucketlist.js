const bucketlist = require('./controllers/bucketlist');


// Route all HTTP requeststo /bucketlist to bucketlist controller
app.use('/bucketlist', bucketlist);