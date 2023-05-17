const express = require('express')
const { default: mongoose } = require('mongoose')
const mongoURL = "mongodb+srv://jarenas340:KFMh5jfq65QjP5TY@cluster0.b7csfht.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser');
//Modelos -- Tablas de MongoDB
mongoose.connect(mongoURL)


app.use(express.json());
app.use(cookieParser());

const whitelist = ['http://localhost:3000', 'https://travel-advisor.p.rapidapi.com']; // Agrega aquí la URL permitida
const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
      if (whitelist.includes(origin) || !origin) { // Verifica si el origen está en la lista blanca o si no se proporciona el origen
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };

app.use(cors(corsOptions))
app.use('/registro', require('./Routes/registerRoutes'));
app.use('/login', require('./Routes/loginRoutes'));
app.use('/servicios', require('./Routes/solicitudRoutes'));
app.use('/prestador', require('./Routes/solicitudRoutes'));

app.get('/test', (req, res) => {
    res.json('test ok')
})
//KFMh5jfq65QjP5TY

app.listen(4040);