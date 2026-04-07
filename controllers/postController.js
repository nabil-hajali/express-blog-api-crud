const express = require('express');
const router = express.Router();




// server entry point
router.get('/', (req, res) => {
  res.send('Server del mio blog');
});


// Index
router.get('/', (req, res) => {
  res.json({ posts });
});

// Show
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json({ post });
  } else {
    res.status(404).json({ error: 'Post non trovato' });
  }


  // Store
  router.post('/', (req, res) => {
    res.send('Create new post');
  });




  // Update
  router.put('/:id', (req, res) => {
    res.send(`Update post with id ${req.params.id}`);
  });

  // Modify
  router.patch('/:id', (req, res) => {
    res.send(`Modify post with id ${req.params.id}`);
  });

  // Destroy
  router.delete('/:id', (req, res) => {
    res.send(`Delete post with id ${req.params.id}`);
  });
});

module.exports = router;