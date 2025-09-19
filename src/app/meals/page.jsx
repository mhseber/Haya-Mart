import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { SUSE } from "next/font/google";

const suse = SUSE({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "All Meals",
  description: "Meals loaded from MealDB API",
};

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      // setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div className="flex justify-center pt-7">
        <MealSearchInput />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {meals?.map((singleMeal) => {
          return (
            <section className={suse}>
              <div className="border-2 m-5 p-5 " key={singleMeal.idMeal}>
                <Image
                  src={singleMeal?.strMealThumb}
                  width={641}
                  height={641}
                  alt={meals}
                ></Image>
                <p className="text-4xl text-sky-500 font-extrabold p-4">
                  {singleMeal?.strMeal}
                </p>
                <p className="text-xl text-sky-600 font-bold p-2">
                  {singleMeal?.strInstructions}
                </p>
                <p className=" text-sky-700 font-light  p-4">
                  {singleMeal?.strArea}
                </p>
                <p className="text-amber-200">{singleMeal?.strCategory}</p>
                <p className="text-3xl text-amber-600">
                  {singleMeal?.strMealAlternate}
                </p>
                <Link
                  className="text-2xl text-green-400"
                  href={`/meals/${singleMeal.idMeal}`}
                >
                  Details
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

// export default MealsPage;
