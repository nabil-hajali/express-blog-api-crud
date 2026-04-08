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

  return res.json(datas);
};

// Store
const store = (req, res) => {

  //create a new post id
  const newId = datas.length > 0 ? datas[datas.length - 1].id + 1 : 1;


  //destructure the name and content from the request body
  const { name, title, content, image } = req.body;

  //create a new post object
  const newPost = {
    id: newId,
    title,
    name,
    content,
    image
  };

  //add the new post to the posts array
  datas.push(newPost);

  //console.log(datas);


  //return the new post as a response
  res.status(201).json(newPost);
  console.log(req.body);

};

// Update
const update = (req, res) => {

  //get the post id from the req and pars to a number
  const id = parseInt(req.params.id);

  //use find to get the post with the same id from the posts array
  const post = datas.find((p) => p.id === id);

  //if the post is not found return a 404 error
  if (!post) {
    return res.status(404).json({
      error: 'Not found',
      message: 'post not found'
    });
  }

  //if the post is found update the name and content with the values from the request body
  const { name, title, content, image } = req.body;
  post.name = name;
  post.title = title;
  post.content = content;
  post.image = image;

  //respond with the updated post

  res.json(post);
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