'use strict';

module.exports = {
    env: 'development',
    dbUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017/GearVR',
    db_user: process.env.DB_USER || 'GearVR',
    db_password: process.env.DB_USER || '12345',
    port: process.env.APP_PORT || 5006,
    ip: process.env.IP,
    app_name: process.env.APP_NAME || "GearVR",
    api_host_url: process.env.API_HOST_URL || 'http://52.163.209.127:3000',
    frontend_host_url: process.env.FRONTEND_HOST_URL || 'http://52.163.209.127:9000',
    api_version: process.env.API_VERSION || '/api/1.0',
    token_secret: 'NODESocket',
    mailgun_public_key: 'pubkey-eba806ce4f01ea08b5e79ca977f523bf',
    mailgun_api_key: 'key-9fc41d653fa0eed2e7b3ee5b20f1fe6a',
    mailgun_domain: 'sandboxfcbb916b2714462fafb4848ad489aedc.mailgun.org'
};
