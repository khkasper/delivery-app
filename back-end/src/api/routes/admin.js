const express = require('express');
const { AdminController } = require('../../controllers');
const { validate } = require('../../middlewares');
const { userByAdmin } = require('../../schemas');

const router = express.Router();

router.get('/manage', AdminController.getAll);
router.post('/manage', validate(userByAdmin), AdminController.create);
router.put('/manage', validate(userByAdmin), AdminController.update);
router.delete('/manage/:id', AdminController.remove);

module.exports = router;
