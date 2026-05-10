import React from "react";
import { sanityFetch } from "../../sanity/lib/live";
import { Dish_Query } from "../../sanity/lib/queries";
import DishesTab from "./DishesTab";

export default async function Page() {
  const { data: dishes } = await sanityFetch({ query: Dish_Query });
  console.log("this is the dishes", dishes);

  const regions = [
    { id: "all", region: "All" },
    ...new Map(
      dishes.map((dish) => [
        dish.region,
        { id: dish.region, region: dish.region },
      ]),
    ).values(),
  ];
  console.log("this is the region", regions);

  return (
    <>
      <DishesTab dishes={dishes} regions={regions} />
    </>
  );
}
