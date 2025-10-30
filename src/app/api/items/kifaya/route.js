// import dbConnect from "@/lib/dbConnect";

// get Kifaya test

export async function GET(){
  const data = {
    message: "This is a Kifaya",
    error: false,
    status: 200
  }
  return Response.json({data})
}


//  export async function GET() {
 
//  const data = await dbConnect("kifaya").find({}).toArray();
 
//   return Response.json(data)
//  }