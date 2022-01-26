const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => 
  callback(null, path.resolve(__dirname, '..', '..', 'uploads')), // gravar imagem
  filename: (req, file, callback) => callback(null, `${req.params.id}.jpeg`),
});

const upload = multer({ storage }).single('image');

module.exports = upload;