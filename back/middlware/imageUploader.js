const multer = require('multer')
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: "disb0qkhr",
    api_key: "965223264892684",
    api_secret: "U_vXLOAlOxBFiJNLdW5WepoYjjs",
  });


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: "galleries",
        format: async(req,res)=> 'png',
        public_id: (req,file)=> file.originalname.split('.')[0] + ""
    }
})

const cloudinaryFileUploader = multer({storage})

const uploadMultiple = cloudinaryFileUploader.array('images', 2);

module.exports = {uploadMultiple};