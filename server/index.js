import express from "express";
import mongodb from "mongodb";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";


const app = express();
app.use(morgan("start"));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const URL_MONGODB = "mongodb+srv://SouhailaBenAllal:RxsloScxMVRe6m2J@cluster0.il0qq.mongodb.net/BEL-universities?retryWrites=true&w=majority"


const port = 3003;

mongoose.connect(URL_MONGODB)
  .then(() => {
    app.listen(port, () => console.log(`Server listen to ${port}`));
}).catch((error) => console.log(`${error} did not connect`));