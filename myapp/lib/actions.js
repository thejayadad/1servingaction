'use server'
import { revalidatePath } from "next/cache";
import Post from "@/models/Post";
import db from "./db";
import { redirect } from "next/navigation";
import getServerUser from "../lib/getServerUser"
import { slugify } from "./slugify";


export const addPost = async (formData) => {
    const userId = await getServerUser()
    const { title, desc, imageUrl,  draft  } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newPost = new Post({
            title,
            desc,
            draft,
            imageUrl,
            creator: userId && userId._id, 
            slug: slugify(title),
          
        })
        await newPost.save()
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create post!");
    }
    revalidatePath("/upload");
    redirect("/");

}