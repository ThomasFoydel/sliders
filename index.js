const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'client', 'build', 'public');

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static(publicPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
