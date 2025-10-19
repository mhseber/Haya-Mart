// get Panjabi test

export async function GET(){
  const data = {
    message: "This is a Panjabi",
    error: false,
    status: 200
  }
  return Response.json({data})
}