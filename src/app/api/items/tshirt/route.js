import dbConnect from "@/lib/dbConnect";

// get t-shirt test

// export async function GET(){
//   const data = {
//     message: "This is a T-Shirt",
//     error: false,
//     status: 200
//   }
//   return Response.json({data})
// }

// get t-shirt
 export async function GET() {
 
 const data = await dbConnect("t-shirt").find({}).toArray();
 
  return Response.json(data)
}