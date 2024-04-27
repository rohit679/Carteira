export const getSecret = () => ({
  port: process.env.PORT,
  mongoUrl: process.env.MONGODB_URL,
  timezone: process.env.TZ,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
  baseUrl: process.env.BASE_URL,
  host: process.env.HOST,
  service: process.env.SERVICE,
  user: process.env.USER_NAME,
  pass: process.env.PASS
});