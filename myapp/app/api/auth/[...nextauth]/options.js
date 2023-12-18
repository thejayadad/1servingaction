import GoogleProvider from 'next-auth/providers/google';
import db from '@/lib/db';
import User from '@/models/User';

let userRole = "Google User";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";

        if (profile?.email == "thejayadad@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
          name: profile.name.replace(" ", "").toLowerCase(),
          email: profile.email,
          avatar: profile.picture,
          followers: [],
          followings: [],
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session.user.email });

        if (!sessionUser) {
          throw new Error('User not found in the database');
        }

        const fullUserInfo = {
          ...sessionUser._doc,
          _id: sessionUser._id.toString(),
          role: sessionUser.userRole,
          name: sessionUser.name.replace(" ", "").toLowerCase(),
          email: sessionUser.email,
          avatar: sessionUser.picture,
          total_followers: sessionUser.followers ? sessionUser.followers.length : 0,
          total_followings: sessionUser.followings ? sessionUser.followings.length : 0,
          followers: sessionUser.followers || [],
          followings: sessionUser.followings || [],
          my_user: true,
        };

        session.user = fullUserInfo;

        return session;
      } catch (error) {
        console.log('Error retrieving user session: ', error.message);
        throw error; // Re-throw the error for handling at a higher level if needed
      }
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await db.connect();

        const userExists = await User.findOne({ email: profile.email });
        console.log("new" + userExists);
        if (!userExists) {
          await User.create({
            id: profile.sub,
            role: userRole,
            name: profile.name.replace(" ", "").toLowerCase(),
            email: profile.email,
            avatar: profile.picture,
            followers: [],
            followings: [],
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
};
