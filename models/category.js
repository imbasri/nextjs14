import { Schema,model,models } from "mongoose";
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [6,"Minimal 6 character"]
    },
    description:{
        type: String,
        required: true
    }
})

const Categories = models.Categories || model("Categories", categorySchema)

export default Categories