import { defineQuery } from "next-sanity";

export const Menus_Query = defineQuery(
  `*[_type == "Menu" && defined(slug.current)]{
    _id,
    slug,
    name,
    tags,
    description,
    price
  }`,
);

export const Menu_Query = defineQuery(
  `*[_type == "Menu" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    tags,
    description,
    price
  }`,
);

export const Dish_Query = defineQuery(
  `*[_type == "dish"]{
    _id,
    slug,
    name,
    category,
    description,
    price,
    featured,
    region,
  }`,
);
