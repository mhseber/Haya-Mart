// import dbConnect from "@/lib/dbConnect";

// get Accessories test

export async function GET(){
  const data = {
    message: "This is a Accessories",
    error: false,
    status: 200
  }
  return Response.json({data})
}


//  export async function GET() {
 
//  const data = await dbConnect("accessories").find({}).toArray();
 
//   return Response.json(data)
// }