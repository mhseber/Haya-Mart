import dbConnect from "@/lib/dbConnect";

// get Panjabi test

// export async function GET(){
//   const data = {
//     message: "This is a Panjabi",
//     error: false,
//     status: 200
//   }
//   return Response.json({data})
// }

 export async function GET() {
 
 const data = await dbConnect("panjabi").find({}).toArray();
 
  return Response.json(data)
}