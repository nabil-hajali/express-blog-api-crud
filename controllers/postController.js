const datas = require('../data/datas');

// Index
const index = (req, res) => {
  const reqTag = req.query?.tag;

  if (reqTag == undefined) {
    return res.json(datas);
  }

  const filteredPosts = datas.filter((post) => Array.isArray(post.tags) && post.tags.includes(reqTag));

  if (filteredPosts.length === 0) {
    return res.json('No results found');
  }

  return res.json(filteredPosts);
};

// Show
const show = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = datas.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Not found',
      message: 'post not found'
    });
  }

  return res.json(post);
};

// Store
const store = (req, res) => {
  res.send('New post');
  console.log(req.body);
  
};

// Update
const update = (req, res) => {
  res.send(`post ${req.params.id} updated`);
};

// Modify
const modify = (req, res) => {
  res.send(`post ${req.params.id} modified`);
};

// Destroy
const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = datas.find((p) => p.id == id);

  if (!post) {
    return res.status(404).json({
      error: 'Not found',
      message: 'post not found'
    });
  }

  datas.splice(datas.indexOf(post), 1);
  console.log(datas);

  return res.sendStatus(204);
};

module.exports = {
  index, show, store, update, modify, destroy,
};