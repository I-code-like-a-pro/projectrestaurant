import { sanityFetch } from "../../sanity/lib/live";
import { Menus_Query } from "../../sanity/lib/queries";
import { Tabs } from "@chakra-ui/react";
import MenuTabs from "./Menutabs";
import { motion } from "framer-motion";

export default async function Page() {
  const { data: menus } = await sanityFetch({ query: Menus_Query });

  const categories = [
    { id: "appetizers", label: "Appetizers", region: "French & Mediterranean" },
    { id: "mains", label: "Main Courses", region: "International" },
    { id: "seafood", label: "Seafood", region: "Coastal" },
    { id: "desserts", label: "Desserts", region: "French Patisserie" },
    { id: "beverages", label: "Beverages", region: "Curated Selection" },
  ];

  const menuItems = {
    appetizers: menus
      ?.filter((menu) => menu.tags?.includes("appetizer"))
      .map((menu) => ({
        name: menu.name,
        description: menu.description,
        tags: menu.tags,
        price: menu.price,
      })),
    mains: menus
      ?.filter((menu) => menu.tags?.includes("main course"))
      .map((menu) => ({
        name: menu.name,
        description: menu.description,
        tags: menu.tags,
        price: menu.price,
      })),
    seafood: menus
      ?.filter((menu) => menu.tags?.includes("seafood"))
      .map((menu) => ({
        name: menu.name,
        description: menu.description,
        tags: menu.tags,
        price: menu.price,
      })),
    desserts: menus
      ?.filter((menu) => menu.tags?.includes("dessert"))
      .map((menu) => ({
        name: menu.name,
        description: menu.description,
        tags: menu.tags,
        price: menu.price,
      })),
    beverages: menus
      ?.filter((menu) => menu.tags?.includes("beverages"))
      .map((menu) => ({
        name: menu.name,
        description: menu.description,
        tags: menu.tags,
        price: menu.price,
      })),
  };
  console.log("All menus:", menus);
  console.log("Appetizers found:", menuItems.appetizers);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <div className="w-full">
        <MenuTabs categories={categories} menuItems={menuItems} />
      </div>
    </main>
  );
}
