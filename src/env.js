function getEnvVar(env, key) {
  if (!process.env[key]) {
    // eslint-disable-next-line no-console
    console.error(`[APP ERROR] Missing env variable: ${key}`);

    return process.exit(1)
  }

  return process.env[key]
}

function createEnv({ env }) {
  if (env.error) {
    // eslint-disable-next-line no-console
    console.error(
      `Failed to load env: ${env.error}`
    )

    process.exit(1)
  }

  return {
    env: getEnvVar(env, 'NODE_ENV'),
    port: parseInt(getEnvVar(env, 'PORT'), 10),
    sqlFilePath: getEnvVar(env, 'SQL_FILE_PATH'),
  };
}

module.exports = createEnv;
