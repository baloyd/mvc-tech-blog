const { Comment } = require('../models')

const commData = [
    {
        comment_text: 'The major advantages I can see for MVC are when working with relational databases since classes for each object type make code reusability much easier, but I can also see how making a single page for each function can provide a lot of flexibility. I was wondering what you guys thought about these methodologies and if there were other design patterns that work even better in PHP.',
        user_id: '5',
        post_id: '1',

    },
    {
        comment_text: 'alot of my problems with sequelize come from the fact that im using sequlize to define my models. I would prefer to use plain javascript objects to define my models without sequelize. Ideally I could follow a more classic object-oriented approach where my models could extend or implement an orm that takes care of relaying data back and forth between the databasr and client and nothing else.',
        user_id: '4',
        post_id: '2',

    },
    {
        comment_text: 'Its either that I really dont understand the ideology behind Handlebars or (call me crazy) dont agree with it. There is supposed to be no logic in the templates? Are they crazy? No logic at all? Yes, I get it. Im not supposed to program the whole business logic in the template, but a simple "if statusIsClosed" statement to display a simple message is "bad logic inside a template"?',
        user_id: '3',
        post_id: '3',

    },
    {
        comment_text: 'Node.js is certainly not dead, but the hype is over. As of 2019, all of Nodes innovations (non-blocking I/O, same language on front-end and backend) are copied and even made better by other languages.',
        user_id: '2',
        post_id: '4',

    },
    {
        comment_text: 'Ruby code is very readable and mostly self-documenting. This increases productivity, as there is less need to write out separate documentation, making it easier for other developers to pick up existing projects.',
        user_id: '1',
        post_id: '5',

    },
];

const seedComments = () => User.bulkCreate(commData);

module.exports = seedComments;