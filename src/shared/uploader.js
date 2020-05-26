const dotenv = require('dotenv');
const cloudinary = require('cloudinary');
dotenv.config();

/**
 * Handlr the process of sending an email
 * 
 * @param  
 * @return 
 */
module.exports = async image => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        api_key: process.env.CLOUDINARY_API_KEY,
    });

    return await cloudinary.uploader.upload(image);
}