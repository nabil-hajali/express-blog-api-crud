const express = require('express');
const app = express();
const postsRouter = require('./controllers/postController');
const PORT = process.env.PORT || 3000;

app.use(express.static( 'public'));



app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
}); 
