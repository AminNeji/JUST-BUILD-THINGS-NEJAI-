const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
    image: { 
        type: Buffer, 
        required: true 
    },
    contentType: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    }
}, {
    timestamps: true
});
const Image= mongoose.model('Image', ImageSchema);
module.exports = Image;
