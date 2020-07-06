const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const config = require('config');
const sequelize = require('./db/init');
const routePizza = require('./routes/pizza-route');
const routeAuth = require('./routes/auth-route');
const routeOrder = require('./routes/order-route');
const initFactoryPizza = require('./factory/init-factory-pizza');
const { Pizza } = require('./models/pizza');
const helmet = require('helmet');
const compression = require('compression');

const PORT = process.env.PORT || config.get('server.PORT');

app.use(helmet());
app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/pizza', routePizza);
app.use('/api/auth', routeAuth);
app.use('/api/order', routeOrder);

if (process.env.NODE_ENV === "development") {
  app.use(cors());

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}

if (process.env.NODE_ENV === "production") {
  app.use('/', express.static(path.join(__dirname, 'build')));
    
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

(async () => {
  try {
    await sequelize.sync({ force: true }).then().catch((err) => console.log(err));
    await initFactoryPizza(Pizza);

    app.listen(PORT, () => console.log(`Server started at ${PORT}`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
})();
