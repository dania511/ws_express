const express = require('express');
const app = express();
const availability =require('./availability.js')
//add pug engine to express
app.set('view engine', 'pug');
app.set('views','./views');
// The Middleware that makes the application available only during the work time.  
app.use(availability);
// response to the request of the Home page.
app.get('/', (req, res) => {
    res.render('Home')
});
// response to the request of the Contact page.
app.get('/contact',(req,res)=>{
    res.render('Contact_us')
});
// response to the request of the Our_services page.
app.get('/our_services',(req,res)=>{
    res.render('Our_Services')
});
//response to the request of the style sheet.
app.use(express.static('Styles'))
//Listen to the port 3000.
app.listen(3000, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("server is running on http://localhost:3000");
    }
})