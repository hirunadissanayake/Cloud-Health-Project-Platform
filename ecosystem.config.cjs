const logDirectory = process.env.HEALTHCARE_LOG_DIR || '/var/log/cloud-health';

module.exports = {
  apps: [
    {
      name: 'config-server',
      script: 'java',
      args: ['-jar', 'config-server/target/config-server-0.0.1-SNAPSHOT.jar'],
      cwd: __dirname,
      interpreter: 'none',
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      output: `${logDirectory}/config-server-out.log`,
      error: `${logDirectory}/config-server-error.log`,
      env: {
        SERVER_PORT: '8888',
        SPRING_PROFILES_ACTIVE: 'git'
      }
    },
    {
      name: 'discovery-server',
      script: 'java',
      args: ['-jar', 'discovery-server/target/discovery-server-0.0.1-SNAPSHOT.jar'],
      cwd: __dirname,
      interpreter: 'none',
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      output: `${logDirectory}/discovery-server-out.log`,
      error: `${logDirectory}/discovery-server-error.log`,
      env: {
        SERVER_PORT: '8761'
      }
    },
    {
      name: 'api-gateway',
      script: 'java',
      args: ['-jar', 'api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar'],
      cwd: __dirname,
      interpreter: 'none',
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      output: `${logDirectory}/api-gateway-out.log`,
      error: `${logDirectory}/api-gateway-error.log`,
      env: {
        SERVER_PORT: '8080'
      }
    }
  ]
};

