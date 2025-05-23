const express = require('express');
const { validateTeam, existingId, apiCredentials } = require('../middlewares');
const { teams, nextId } = require('../teams');

// cria um router middleware
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ teams });
});

app.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', validateTeam, (req, res) => {
  if (!req.teams.teams.includes(req.body.initials)) {
    return res.status(422).json({ message: 'Já existe um time com essa inicial' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  addTeam();
  res.status(201).json(team);
});

router.put('/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const arrayPosition = teams.findIndex((t) => t.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = router;
