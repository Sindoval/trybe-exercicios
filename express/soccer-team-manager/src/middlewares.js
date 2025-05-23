const fs = require('fs/promises');
const { teams } = require('./teams');

const validateTeam = (req, res, next) => {
  const { name, initials } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (!initials) return res.status(400).json({ message: 'O campo "initials" é obrigatório' });
  next();
};

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.find((team) => team.id === id)) {
    next();
  } else {
    return res.status(404).send({ message: 'Time não encontrado' })
  }
}

async function apiCredentials(req, res, next) {
  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');
  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });
  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    // modifica o req para guardar a informação importante
    req.teams = authorized[token];
    next(); // pode continuar
  } else {
    res.status(401).json({ message: 'Token inválido ou expirado.' });
    // não autorizado
  }
}

module.exports = {
  validateTeam,
  apiCredentials,
  existingId
};
