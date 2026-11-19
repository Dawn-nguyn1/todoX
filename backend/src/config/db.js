import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTIONSTRING
        );
  
        //     , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // }
        console.log(`MongoDB Connected `);
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error`);
        process.exit(1);
    }
}