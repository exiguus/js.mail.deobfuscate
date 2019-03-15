module.exports = {
  dist: {
    src: ['src/js/*.js'],
    options: {
      destination: '<%= paths.docs %>',
      readme: 'README.md',
    },
  },
};
