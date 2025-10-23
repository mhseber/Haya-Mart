import dbConnect from "@/lib/dbConnect";

// get caps test

// export async function GET(){
//   const data = {
//     message: "This is a Caps",
//     error: false,
//     status: 200
//   }
//   return Response.json({data})
// }

 export async function GET() {
 
 const data = await dbConnect("caps").find({}).toArray();
 
  return Response.json(data)
}