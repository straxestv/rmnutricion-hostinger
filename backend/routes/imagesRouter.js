import { Router } from "express";
//import AWS from "aws-sdk";
import Image from "../models/Image";
import config from "../confi";
import { isAuthFactory } from '../util';
import { isAuth, isAdmin } from '../util';


const router = Router();


router.post('/', isAuth, isAdmin, async (req, res) => {
    const image = new Image({
        title: req.body.name,
        user: req.body.user,
        image: req.body.image,
    });
    //console.log(image)
    const newImage = await image.save();
    if (newImage) {
        return res
        .status(201)
        .send({ message: 'New Image Created', data: newImage });
        }
    return res.status(500).send({ message: ' Error in Creating Image.' });
});

router.get("/:email", async (req, res) => {
    const images = await Image.find({user:req.params.user});
    res.json(images);
});

router.get("/:id", async (req, res) => {
    const images = await Image.findById(req.params.id);
    res.json(images);
});
router.get("/img",isAuthFactory (async (req, res) => {
    const images = await Image.find({user:req.params.user});
    res.json(images);
}));


router.delete("/:id", async (req, res) => {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);

    await s3
        .deleteObject({
        Bucket: config.BucketName,
        Key: deletedImage.key,
        })
        .promise();

    res.json(deletedImage);
});

export default router;
