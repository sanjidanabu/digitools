import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is missing");
}

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("digitools");

export const auth = betterAuth({
  
  database: mongodbAdapter(db , {
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }
});