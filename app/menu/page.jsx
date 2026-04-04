import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { Menus_Query } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: menus } = await sanityFetch({ query: Menus_Query });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Todays Menu</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100 gap-6">
        {menus.map((menu) => (
          <li key={menu._id}>
            <Link
              className="block p-4 hover:text-blue-500"
              href={`/Menu/${menu?.slug?.current}`}
            >
              {menu?.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}