'use server'
import Post from "@/models/Post";
import db from "./db";

export const fetchPost = async()=> {
    // console.log(q)
    // const regex = new RegExp(q, "i");
    // const ITEM_PER_PAGE = 2;
    try {
        db.connect()
        // const count = await Post.find({ title: { $regex: regex } }).count();
        const posts = await Post.find()
        // .limit(ITEM_PER_PAGE)
        // .skip(ITEM_PER_PAGE * (page - 1));
        console.log(posts)
        return  posts
    } catch (error) {
        console.log(err);
        throw new Error("Failed to fetch Post!");
    
    }
}