"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
const DishesTab = ({ dishes, regions }) => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const filteredDishes =
    selectedRegion === "All"
      ? dishes
      : dishes.filter((dish) => dish.region === selectedRegion);

  return (
    <div className="mb-4">
      <div className="text-gold text-sm tracking-[0.3em] uppercase mb-2 flex justify-center items-center mt-5">
        Our chef's signature collection
      </div>
      <h1 className="text-5xl text-white flex justify-center  font-serif mb-4">
        Signature Dishes
      </h1>
      <p className="text-neutral-400 mb-2 text-lg max-w-2xl mx-auto text-center">
        Explore our most celebrated creations, each a masterpiece of flavor,
        technique, and presentation
      </p>
      <div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.region)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                selectedRegion === region.region
                  ? "bg-amber-500 text-neutral-950"
                  : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
              }`}
            >
              {region.region}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <Image
                  src={dish.imagelink}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                {dish.featured && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}
              </div>
              <div className="px-2 items-center">
                <div className="flex justify-between ">
                  <h3 className="text-white font-serif text-xl">{dish.name}</h3>
                  <div className="text-gold">${dish.price}</div>
                </div>
                <div className="text-sm text-neutral-400 leading-relaxed">
                  {dish.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishesTab;
