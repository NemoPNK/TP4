const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'ekod',
    password: 'ekod',
    database: 'tasks'
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.listen(port, () => {
    console.log(`serveur sur http://localhost:${port}`);
})

// Routes API

app.post('/api/tasks', async (req, res) => {
    const newTask = req.body;
    await pool.query(
        'INSERT INTO tasks (id, titre, complete) VALUES ($1, $2, $3)',
        [newTask.id, newTask.titre, newTask.complete]
    );

    console.log("Task : ", newTask)
    res.status(201).json({
        message: 'Post ok',
        task: newTask
    });
});

app.get('/api/tasks', async (req, res) => {
    const result = await pool.query('SELECT * FROM tasks');
    console.log(result.rows);

    res.status(200).json({
        message: 'Get ok',
        task: result.rows
    });
});

app.put('/api/tasks/:id', async (req, res) => {
    const taskID = req.params.id;
    const putTask = req.body;

    const result = await pool.query(
        'UPDATE tasks SET titre = $1, complete = $2 WHERE id = $3 RETURNING *',
        [putTask.titre, putTask.complete, taskID]
    );

    res.status(200).json({
        message: 'Put ok',
        task: result.rows[0]
    });
});

app.delete('/api/tasks/:id', async (req, res) => {
    const taskID = req.params.id;

    const result = await pool.query(
        'DELETE FROM tasks WHERE id = $1 RETURNING *',
        [taskID]
    );

    res.status(200).json({
        message: 'Delete ok',
        task: result.rows[0]
    });
});

// Fonctionnalité A : marquer une tache complétée
app.patch('/api/tasks/:id', async (req, res) => {
    const taskID = req.params.id;

    const result = await pool.query(
        'UPDATE tasks SET complete = TRUE WHERE id = $1 RETURNING *',
        [taskID]
    );

    res.status(200).json({
        message: 'Patch ok',
        task: result.rows[0]
    });
});