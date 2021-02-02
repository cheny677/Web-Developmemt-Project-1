// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
const cloudinary = require("cloudinary");
const dotenv = require('dotenv')

dotenv.config()

cloudinary.config({
  cloud_name: "drnndssmw",
  api_key: "679778727736999",
  api_secret: "y-R8v49M6NtrRXvsTXJRhaigCQk",
});

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                image_url: result.url,
                image_id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}