module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timesstamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
