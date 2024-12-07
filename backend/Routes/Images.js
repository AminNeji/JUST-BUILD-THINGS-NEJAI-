express=require('express');
Router=express.Router();
ImageController=require('../Controllers/ImageController');



Router.use('/images',ImageController.getImages);
Router.use('/images/post',ImageController.postImage);