const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from CI/CD'));

app.listen(3000, () => console.log('Server running in 3000 port'));