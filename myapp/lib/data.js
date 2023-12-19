'use server'
import Post from "@/models/Post";
import db from "./db";

export const fetchPost = async(q,page)=> {
    console.log(q)
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
    try {
        db.connect()
        const posts = await Post.find()
       
        return posts 
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Post!");
    
    }
}