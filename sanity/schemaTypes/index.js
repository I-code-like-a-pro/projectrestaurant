//import category from './category'
//import dish from './dish'
//import menu from './menu'
//import reservation from './reservation'

import menus from './Menu.js'
import dish from './Dish.js'

export const schemaTypes = [menus,dish]

// Export for the config
export const schema = {
  types: schemaTypes,
}