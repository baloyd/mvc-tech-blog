const { User } = require('../models')

const userData = [
    {
        username: 'Aspect',
        password: 'Aspect123',
        email: 'aspect@test.com',

    },
    {
        username: 'Sasquatch',
        password: 'Sasquatch123',
        email: 'sasquatch@test.com',
    },
    {
        username: 'Steelshot',
        password: 'Steelshot123',
        email: 'steelshot@test.com',
    },
    {
        username: 'Vein',
        password: 'Vein1234',
        email: 'vein@test.com',
    },
    {
        username: 'Indominus',
        password: 'Indominus123',
        email: 'indominus@test.com',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;