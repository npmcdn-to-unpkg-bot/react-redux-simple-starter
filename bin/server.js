const config = require('../config');
const debug = require('debug')('app:bin:server');

if (process.env.NODE_ENV === 'production') {
  const prodServer = require('../server/prodServer');
  prodServer.listen(config.server.port, err => {
    if (err) {
      debug('Error starting production server.');
      return;
    }
  });
  debug(`Production server started @ localhost:${config.server.port}.`);
} else {
  const devServer = require('../server/devServer');
  devServer.listen(config.server.port, err => {
    if (err) {
      debug('Error starting development server.');
      return;
    }
    debug(`Development server started @ localhost:${config.server.port}.`);
  });
}
