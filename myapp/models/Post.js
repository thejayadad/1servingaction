import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
      },
      slug: {
        type: String,
      },
    desc: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    draft: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    favorite_user: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    }
}, {timestamps: true})

PostSchema.index({ title: 'text' });


export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)