const express = require('express');
const app = express();
const postsRouter = require('./router/posts');
const PORT = process.env.PORT || 3001;
const checkTime = require('./middleware/checkTime');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

app.use(express.json());
//register the checkTime middleware
app.use(checkTime);
//register the error handler middleware
app.use(errorHandler);
//register the not found middleware
app.use(notFound);
//register the body-parse 
app.use('/posts', postsRouter);



app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
}); 
