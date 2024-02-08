const multer = require("multer");
const fs = require("fs");
const path = require("path");

// img uplode using multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "blog_images") {
            fs.mkdirSync(path.join(__dirname, "../public/blog_images"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/blog_images"));
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            cb("only .png,.jpg and .jpeg format are allowed!");
        }
        cb(null, new Date().getTime() + ext);
    },
});

const upload = multer({
    storage: storage,
});

module.exports = { upload };