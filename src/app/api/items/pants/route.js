import dbConnect from "@/lib/dbConnect";

// get Pants test

// export async function GET(){
//   const data = {
//     message: "This is a Pants",
//     error: false,
//     status: 200
//   }
//   return Response.json({data})
// }


 export async function GET() {
 
 const data = await dbConnect("pants").find({}).toArray();
 
  return Response.json(data)
}