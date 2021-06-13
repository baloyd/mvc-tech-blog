const { User } = require('../models')

const userData = [
    {
        username: 'Aspect',
        password: 'Aspect123',

    },
    {
        username: 'Sasquatch',
        password: 'Sasquatch123',
    },
    {
        username: 'Steelshot',
        password: 'Steelshot123',
    },
    {
        username: 'Vein',
        password: 'Vein1234',
    },
    {
        username: 'Indominus',
        password: 'Indominus123',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;