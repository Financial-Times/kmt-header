const fs = require('fs');

require('dotenv').config({silent: true});

const config = {
  'NODE_ENV': process.env.NODE_ENV || 'development',
  'BASE_PATH_URL': process.env.BASE_PATH_URL || '',
  'API_PATH_URL': process.env.API_PATH_URL || ''
};

fs.writeFileSync('config.js', `module.exports=${JSON.stringify(config)};`);
