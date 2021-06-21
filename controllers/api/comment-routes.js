const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',withAuth, async (req, res) => {
    try {
      const comData = await Comment.findAll({
      
      });
      res.status(200).json(comData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const comData = await Comment.findByPk({
        where: {id: req.params.id}
      });
  
      if (!comData) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
      }
  
      res.status(200).json(comData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', withAuth, async (req, res) => {
    if(req.session) {
       try {
      const comData = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });

      res.status(200).json(comData);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const comData = await Comment.update({
      comment_text: req.body.comment_text
      },{
        where: {
          id: req.params.id
        }
      });
  
      if (!comData) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
      }
  
      res.status(200).json(comData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const comData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!comData) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
      }
  
      res.status(200).json(comData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  module.exports = router;
  