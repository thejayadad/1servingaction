'use server'
import Post from "@/models/Post";
import db from "./db";
import getServerUser from "./getServerUser";

export const fetchPost = async()=> {
    try {
        db.connect()
        const posts = await Post.find({}).populate("creator")
       
        return posts 
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Post!");
    
    }
}