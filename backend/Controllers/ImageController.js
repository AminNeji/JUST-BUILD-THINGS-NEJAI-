const Image=require('../models/Image');



const getImages = async (req, res) => {
    try {
        const images = await Image.find();
        const formattedImages = images.map(img => ({
            id: img._id,
            description: img.description,
            imageUrl: `data:${img.contentType};base64,${img.image.toString('base64')}`
        }));
        res.status(200).json(formattedImages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve images." });
    }
};

const postImage=async(req,res)=>{
    try{
        const Image=new Image(req.boy);
        const savedImage=await Image.save();
        if(savedImage){
            res.status(201).json(savedImage);
        } 
    }
    catch(err){
        res.status(500).json({err:"Image Not saved"});
    }
}

module.exports={getImages,postImage}