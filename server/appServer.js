const express = require('express');
const app = express();

const ctrl = require('./controller/feedController');

app.use(express.json());

app.route('/api/feed')
   .get(ctrl.getAll)
   .post(ctrl.create);

app.route('/api/feed/:id')
   .get(ctrl.getById)
   .patch(ctrl.updateById)
   .delete(ctrl.deleteById);

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});