import mongoose from "mongoose";
let connection = false
const connectDB = async () => {
    if (connection) {
        console.log('🚀 ~ connectDB ~ connection:', connection)
        return
    }
    try {
        await mongoose.connect(process.env.DATABASE,{
            appName: "jobportal",
            dbName: "jobportal",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            deprecationErrors: true
        })
        connection = true
    } catch (error) {
        console.log('🚀 ~ connectDB ~ error:', error)
    }
}

export default connectDB