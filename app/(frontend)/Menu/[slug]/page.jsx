import { sanityFetch } from "@/sanity/lib/live";
import { Menu_Query } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({ params }) {
  const { data: menus } = await sanityFetch({
    query: Menu_Query,
    params: await params,
  });

  if (!menus) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold text-balance text-white">{menus?.name}</h1>
      <hr />
      Welcome
    
      <Link href="/Menu">&larr; Return to index</Link>
    </main>
  );
}