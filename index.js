const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/questions');
const answerRoutes = require('./routes/answers');
const resultRoutes = require('./routes/results');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/results', resultRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
