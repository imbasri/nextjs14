import mongoose from "mongoose";
let connection = false
const connectDB = async () => {
    if (connection) {
        return connection
    }
    try {
        const connect = await mongoose.connect(process.env.DATABASE)
        connection = connect
    } catch (error) {
        console.log('🚀 ~ connectDB ~ error:', error)   
    }
    return connection
}

export default connectDB