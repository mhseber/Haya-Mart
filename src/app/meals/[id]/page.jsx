const fetchSingleMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function SingleMealPage({ params }) {
  const [singleMeal] = await fetchSingleMeal(params.id);

  if (!singleMeal) {
    return <p>No Meal Found</p>;
  }
  return (
    <div className="border-2 m-5 p-5">
      <p className="text-4xl text-sky-500 font-extrabold p-4">
        {singleMeal?.strMeal}
      </p>
      <p className="text-xl text-sky-600 font-bold p-2">
        {singleMeal?.strInstructions}
      </p>
      <p className="text-sky-700 font-light p-4">{singleMeal?.strArea}</p>
      <p className="text-amber-200">{singleMeal?.strCategory}</p>
      <p className="text-3xl text-amber-600">{singleMeal?.strMealAlternate}</p>
    </div>
  );
}
