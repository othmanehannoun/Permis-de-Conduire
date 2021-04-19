var express = require('express');
var router = express.Router();
const conducteurCtrl = require('../controllers/conducteur-Ctrl')
// const auth = require('../middleware/auth')


router.post('/register', conducteurCtrl.register);
router.put('/activateAccount/:token', conducteurCtrl.activateAccount)
router.post('/login', conducteurCtrl.Login);




module.exports = router;