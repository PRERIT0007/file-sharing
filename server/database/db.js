import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGODB_URI = `mongodb+srv://preritg050:Omsairam7@file-sharing.9y6ijxf.mongodb.net/`;
    try {



        
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;