let nextId = 3;
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const addTeam = () => {
  nextId++
};

module.exports = {
  nextId,
  teams,
  addTeam
}
