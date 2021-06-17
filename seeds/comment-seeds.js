const { Comment } = require('../models')

const commData = [
    {
        comment_text: 'The major advantages I can see for MVC are when working with relational databases since classes for each object type make code reusability much easier.',
        user_id: '5',
        post_id: '1',

    },
    {
        comment_text: 'Alot of my problems with sequelize come from the fact that im using sequlize to define my models.',
        user_id: '4',
        post_id: '2',

    },
    {
        comment_text: 'Its either that I really dont understand the ideology behind Handlebars or (call me crazy) dont agree with it.',
        user_id: '3',
        post_id: '3',

    },
    {
        comment_text: 'Node.js is certainly not dead, but the hype is over.',
        user_id: '2',
        post_id: '4',

    },
    {
        comment_text: 'Ruby code is very readable and mostly self-documenting.',
        user_id: '1',
        post_id: '5',

    },
];

const seedComments = () => Comment.bulkCreate(commData);

module.exports = seedComments;