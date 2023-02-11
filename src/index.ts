const express = require('express');
const app = express();

app.get('/:hash', (req, res) => {
  const hash = req.params.hash;
  const redirectUrl = `https://${hash}.ipfs.w3s.link`;
  res.redirect(redirectUrl);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
