var express = require('express');
var router = express.Router();
var articles = require('../../controllers/admin/articles');
var multer = require("multer");
var upload = multer({ dest: 'public/uploads/' })
/* GET home page. */
router.get('/articles', articles.index);
// router.get('/articles', function (req, res, next) {
// 	res.render('admin/articles', { title: 'Express' });
// });

router.post('/articles', upload.single('picture'), articles.add);

module.exports = router;
