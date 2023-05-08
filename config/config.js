module.exports = {
  DATABASE: {
    NAME: process.env.DATABASE_NAME,
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    HOST: process.env.DATABASE_HOST,
    PORT: process.env.DATABASE_PORT,
    DIALECT: process.env.DATABASE_DIALECT,
    SEQUELIZE_ALTER: process.env.DATABASE_DATABASE_SEQUELIZE_ALTERNAME,
    CHARSET: process.env.DATABASE_CHARSET,
    COLLATE: process.env.DATABASE_COLLATE,
  },
};
