const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/admin', middlewares.auth(), (req, res) => {
  return res.render('admin/home', { user: req.user });
});
app.get('/recipes/new', middlewares.auth(), controllers.getNewRecipe);
app.post('/recipes/', middlewares.auth(), controllers.postNewRecipe);
app.get('/recipes/search', controllers.getSearch);
app.post('/recipes/:id', middlewares.auth(), controllers.postNewEdit);
app.get('/recipes/:id/edit', middlewares.auth(), controllers.recipeEdit);
app.get('/recipes/:id/delete', middlewares.auth(), controllers.recipeDelete);
app.post('/recipes/:id/delete', middlewares.auth(), controllers.postNewDelete);
app.get('/recipes/:id', middlewares.auth(false), controllers.recipeDetails);

app.get('/signup', controllers.getNewUser);
app.post('/signup', controllers.postNewUser);
app.get('/', middlewares.auth(false), controllers.recipeController);

app.get('/login', controllers.userController.loginForm);
app.get('/logout', controllers.userController.logout);
app.post('/login', controllers.userController.login);
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
