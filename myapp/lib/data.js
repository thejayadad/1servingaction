'use server'
import Post from "@/models/Post";
import getServerUser from "./getServerUser";
import { Types } from "mongoose";

export const getPosts = async () => {
    try {
        const user = await getServerUser();
        const userId = user ? new Types.ObjectId(user?._id) : undefined;
        console.log("UserId " + userId);

        const basePipeline = [
            // Your base pipeline stages go here
            // For example, you might want to add a $match stage to filter by certain conditions
            // {
            //     $match: { field: value }
            // },
        ];

        // If userId is provided, add a $match stage to include posts with the matching userId
        if (userId) {
            basePipeline.push({
                $match: { creator: userId }
            });
        }

        // Add $lookup stage to populate the creator field with user details
        basePipeline.push({
            $lookup: {
                from: "users", // Assuming your user collection is named "users"
                localField: "creator",
                foreignField: "_id",
                as: "creatorDetails"
            }
        });

        // Add $unwind stage to flatten the 'creatorDetails' array
        basePipeline.push({
            $unwind: "$creatorDetails"
        });

        // Add $addFields stage to add 'isFavorite' field
        basePipeline.push({
            $addFields: {
                isFavorite: {
                    $cond: [{ $in: [userId, "$favorite_user"] }, true, false]
                }
            }
        });

        // Add $addFields stage to add details and number of followers/following
        basePipeline.push({
            $addFields: {
                "creatorDetails.total_followers": { $size: "$creatorDetails.followers" },
                "creatorDetails.total_following": { $size: "$creatorDetails.following" }
            }
        });

        // Log the total followers information
        console.log("Total Followers: ", basePipeline[basePipeline.length - 1].$addFields["creatorDetails.total_followers"]);

        // Add additional stages to your pipeline as needed
        // For example, $sort, $limit, etc.

        const posts = await Post.aggregate(basePipeline).exec();
        console.log("New Post " + posts);
        return posts;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        throw new Error("Failed to fetch posts!");
    }
};
