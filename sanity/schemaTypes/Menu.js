const menus = {
  name: 'Menu',
  title: 'Menu',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'price', title: 'Price', type: 'number' },
    // Add tags as array of strings
    { 
      name: 'tags', 
      title: 'Tags', 
      type: 'array', 
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Appetizer', value: 'appetizer' },
          { title: 'Main Course', value: 'main' },
          { title: 'Seafood', value: 'seafood' },
          { title: 'Dessert', value: 'dessert' },
          { title: 'Beverages', value: 'beverages' }
        ]
      }
    }
  ]
}
export default menus