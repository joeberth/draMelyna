module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'doctorMe',
    port: 5432, 
    database: 'doctorMe',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};

