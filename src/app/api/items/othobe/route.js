import dbConnect from "@/lib/dbConnect";

// get Thobe test

// export async function GET(){
//   const data = {
//     message: "This is a Thobe",
//     error: false,
//     status: 200
//   }
//   return Response.json({data})
// }


 export async function GET() {
 
 const data = await dbConnect("othobe").find({}).toArray();
 
  return Response.json(data)
 }