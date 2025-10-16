import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

// get
 export async function GET() {
 
 const data = await dbConnect("my_data").find({}).toArray();
 
  return Response.json(data)
}

// post

export async function POST(req){

  console.log(req);
    
    const postedData = await req.json();
const result = await dbConnect("my_data").insertOne(postedData);
revalidatePath("/products")
    return Response.json({ result})
}




