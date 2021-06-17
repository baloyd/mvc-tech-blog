const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
attributes: ['id','title','content','created_at'],
order: [['created_at', 'DESC']
],
include: [{
        model: User,
        attributes: ['username']
    },
    {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    }
]
})

const posts = res.json(postData.reverse())
} catch (err) {
    console.log(err)
res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findOne({
          where: { id: req.params.id 
        },
        attributes: ['id','content','title','created_at'],

        include: [{ model: User,
        attributes: ['username']
     },
    {
        model: Comment,
        attributes: ['id','comment_text','post_id','user_id','created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    }
],
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.create({
          title: req.body.title,
          content: req.body.content,
          user_id: req.session.user_id
      })
      res.status(200).json(postData);
    } catch (err) {
        console.log(err)
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.update({
          title: req.body.title,
          content: req.body.content
        },{
        where: {
          id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const PostData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;