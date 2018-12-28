const express = require ('express');
const app = express();
const path = require ('path');

//setings
app.set('puerto', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//midllewares

//routes
app.use(require('./routes'));
//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening server
app.listen(app.get('puerto'), () => {
    console.log('servidor en puerto', app.get('puerto')); 
});
