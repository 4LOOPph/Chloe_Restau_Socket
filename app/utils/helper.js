'use strict';

module.exports = function(app, log, config) {
    app.listen(config.port, function connection(err) {
        if (err instanceof Error) {
            log.error('Unable to start Server', config.port);
        } else {
            log.info('Server started at ' + config.port + ' Using ' + config.api_version);
        }
    });
};
