// get Panjabi test

export async function GET(){
  const data = {
    message: "This is a Caps",
    error: false,
    status: 200
  }
  return Response.json({data})
}