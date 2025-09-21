import dbConnect from "@/lib/dbConnect";

// get
 export async function GET() {
 
 const data = await dbConnect("my_data").find({}).toArray();
 
  return Response.json(data)
}

// post

export async function POST(req){

  console.log(req);
    
    const postedData = await req.json();

    return Response.json({ postedData})
}

