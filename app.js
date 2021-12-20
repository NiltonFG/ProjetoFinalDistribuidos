const http = require('http');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const express = require('express');
const notFoundController = require('./controllers/notFound');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/',shopRoutes);


app.use(notFoundController.notFound);

const server = http.createServer(app);
app.listen(3000);