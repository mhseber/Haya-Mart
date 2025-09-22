import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// get
 export async function GET(req,{params}) {
 
    const p = await params;
    const singleData = await dbConnect("my_data").findOne({ _id: new ObjectId (p.id) });
   
 
  return Response.json(singleData )
}


// DELETE
 export async function DELETE(req,{params}) {
 
    const p = await params;
    const response = await dbConnect("my_data").deleteOne({ _id: new ObjectId (p.id) });
   
 
  return Response.json(response )
}
    
// PATCH
 export async function PATCH(req,{params}) {
    
     const p = await params;
     const postedData = await req.json();
     const filter = { _id: new ObjectId (p.id) }
    const updatedResponse = await dbConnect("my_data").updateOne(filter,{$set : { ...postedData}},{ upsert: true });
   
 
  return Response.json(updatedResponse )
}