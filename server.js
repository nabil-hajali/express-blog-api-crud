const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));



app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
}); 
