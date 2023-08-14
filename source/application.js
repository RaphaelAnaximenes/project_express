import express from 'express';
import path from 'path';
import { homeController } from './controllers/homeController.js';
import { Utils } from './utils/Utils.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', Utils.getViewsDirectory());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.Utils = Utils;

app.get('/', homeController);


export default app;