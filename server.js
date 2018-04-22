const express= require ('express');
const bodyParser= require('body-parser');

const app = express();

app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(__dirname+'/views'));

const server = app.listen(5000);

app.get('/', function(){
	res.render('index');
});

