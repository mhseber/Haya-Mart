// get t-shirt

export async function GET(){
  const data = {
    message: "This is a T-Shirt",
    error: false,
    status: 200
  }
  return Response.json({data})
}