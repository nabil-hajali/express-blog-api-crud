const express = require('express');
const app = express();
const postsRouter = require('./router/posts');
const PORT = process.env.PORT || 3001;

app.use(express.json());


//register the body-parse 
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
}); 
