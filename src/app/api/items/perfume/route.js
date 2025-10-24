// import dbConnect from "@/lib/dbConnect";

// get perfume test

export async function GET(){
  const data = {
    message: "This is a Perfume",
    error: false,
    status: 200
  }
  return Response.json({data})
}