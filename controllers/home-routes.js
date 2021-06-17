const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'id', 'title', 'content', 'created_at',
      ],
      include: [{
        model:Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at',
      ],
      include: {
        model:User,
        attributes: ['username'],
        exclude: [{attributes: ['password']
      }
    ]
      }
      }]
      
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
