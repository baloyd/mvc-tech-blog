const { Post } = require('../models')

const postData = [
    {
        title:'MVC Pros',
        content: 'MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner.',
        user_id: 1
    },
    {
        title:'ORMS',
        content: 'Object-relational-mapping is the idea of being able to write queries like the one above, as well as much more complicated ones, using the object-oriented paradigm of your preferred programming language.',
        user_id: 2
    },
    {
        title:'Handlebars',
        content: 'Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.',
        user_id: 3
    },
    {
        title:'Node',
        content: 'Node is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript.',
        user_id: 4
    },
    {
        title:'Express',
        content: 'Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks.',
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;