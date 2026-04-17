const dish = {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    { name: "image", title: "Image", type: "image" },
    { name: "price", title: "Price", type: "number" },
    { name: "region", title: "region", type: "string" },
    { name: "category", title: "category", type: "string" },
    { name: "featured", title: "Featured", type: "boolean" },
  ],
};
export default dish;
