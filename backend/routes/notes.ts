import express, { Request, Response } from 'express';
import Note from '../models/note';

const router = express.Router();

// add note
router.post('/notes', async (req: Request, res: Response) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).send(note);
    } catch (error) {
        res.status(400).send({ error: 'unable to create note'});
    }
});

// change note
router.put('/notes/:id', async (req: Request, res: Response) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (note) {
            await note.update(req.body);
            res.send(note);
        } else {
            res.status(404).send({ error: 'note not found'});
        }
    } catch (error) {
        res.status(400).send({ error: 'unable to update note'});
    }
});

// delete note
router.delete('/notes/:id', async (req: Request, res: Response) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (note) {
            await note.destroy();
            res.status(204).send();
        } else {
            res.status(404).send({ error: 'note not found'});
        }
    } catch (error) {
        res.status(500).send({ error: 'unable to delete note'});
    }
});

export default router;