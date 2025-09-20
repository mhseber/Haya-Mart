// get
 export async function GET() {
 
    const data = {
        message: "Hello, this is the items API endpoint!",
        error: false,
        status: 200
    }
 
  return Response.json({ data })
}

// post

export async function POST(req){
    
    const postedData = await req.json();

    return Response.json({ postedData})
}

