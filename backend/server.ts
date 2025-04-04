import express from 'express';
import sequelize from './src/config/db';
import Note from './models/note';
import notesRouter from './routes/notes';

const app = express();
app.use(express.json());
app.use('/api', notesRouter);

sequelize.sync()
    .then(() => app.listen(3000, () => console.log('server running on port 3000')))
    .catch(err => console.error(err));