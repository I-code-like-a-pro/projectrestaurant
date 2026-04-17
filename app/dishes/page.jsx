import React from "react";
import { sanityFetch } from "../../sanity/lib/live";
import { Dish_Query } from "../../sanity/lib/queries";
import DishesTab from "./DishesTab";
import { motion } from "framer-motion";




export default async function Page() {
  const { data: dishes } = await sanityFetch({ query: Dish_Query });
  console.log(dishes)

const regions = dishes.map((dish) =>({
  id: dish._id,
  label: dish.name,
  region:dish.region

}))

console.log(regions)

  return (
    <>
      <div className="text-gold text-sm tracking-[0.3em] uppercase mb-2 flex justify-center items-center">
        Our chef's signature collection
      </div>
      <h1 className="text-5xl text-white flex justify-center mb-2 font-serif mb-4">
        Signature Dishes
      </h1>
      <p className="text-neutral-400 mb-2 text-lg max-w-2xl mx-auto">
        Explore our most celebrated creations, each a masterpiece of flavor,
        technique, and presentation
      </p>
    </>
  );
}
