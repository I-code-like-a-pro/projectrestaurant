const dish = {
    name: "dish",
    title: "Dish",
    type: "document",
    fields: [

        { name: 'name', title: 'Name', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image' },
       
    ]

}
export default dish