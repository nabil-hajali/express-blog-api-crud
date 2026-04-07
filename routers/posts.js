const express = require('express');
const router = express.Router();


const posts = [
  {
    id: 1,
    title: 'Benvenuto al mio blog',
    content: 'Questo è il primo post del mio blog. Qui posso scrivere quello che voglio.',
    image: '/images/post1.svg',
    tags: ['welcome', 'intro']
  },
  {
    id: 2,
    title: 'Secondo post',
    content: 'Un altro testo d esempio per il secondo post.',
    image: '/images/post2.svg',
    tags: ['news']
  },
  {
    id: 3,
    title: 'JavaScript Tips',
    content: 'Consigli utili su JavaScript e Node.js.',
    image: '/images/post3.svg',
    tags: ['javascript','node']
  },
  {
    id: 4,
    title: 'Routing in Express',
    content: 'Come gestire le rotte e gli asset statici con Express.',
    image: '/images/post4.svg',
    tags: ['express','routing']
  },
  {
    id: 5,
    title: 'Ultime novità',
    content: 'Aggiornamenti e novità sul blog.',
    image: '/images/post5.svg',
    tags: ['update','news']
  }
];


// server entry point
router.get('/', (req, res) => {
  res.send('Server del mio blog');
});

router.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`)
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