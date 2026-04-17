// app/component/MenuTabs.jsx
"use client";
import { Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MenuTabs({ categories, menuItems }) {
  const [activeTab, setActiveTab] = useState("appetizers");
  return (
    <div className="flex-1 bg-dark-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-gold text-sm tracking-[0.3em] uppercase mb-2 flex justify-center items-center">
          Curated by Chef Jean-Pierre
        </div>
        <h1 className="text-5xl text-white flex justify-center mb-2 font-serif mb-4">
          Our Menu
        </h1>
        <p className="text-neutral-400 mb-2 text-lg max-w-2xl mx-auto">
          Each dish is meticulously crafted with the finest seasonal
          ingredients, sourced from local farmers and international purveyors
        </p>
      </motion.div>
      <Tabs.Root
        className="w-full"
        value={activeTab}
        onValueChange={(details) => setActiveTab(details.value)}
      >
        <Tabs.List className="w-auto justify-start overflow-x-auto mb-12 bg-neutral-900 p-1 rounded-xl h-auto flex-wrap">
          {categories.map((category) => (
            <Tabs.Trigger
              key={category.id}
              value={category.id}
              px="6"
              py="3"
              borderRadius="lg"
              _selected={{
                bg: "#f59e0b", // your gold color (or "var(--color-gold)")
                color: "#0a0a0a", // neutral-950
              }}
            >
              <div className="text-left ">
                <div className="font-medium">{category.label}</div>
                <div className="text-xs opacity-70">{category.region}</div>
              </div>
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {categories.map((category) => (
          <Tabs.Content value={category.id} key={category.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {menuItems?.[category.id]?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-amber-400/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3 text-white">
                    <div className="flex flex-col">
                      <h3 className="text-white font-medium text-lg">
                        {item.name}
                      </h3>
                      <p className="text-neutral-400 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="text-gold">${item.price}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
