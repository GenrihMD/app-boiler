import VuexORM from '@vuex-orm/core'
import Product from '@/models/Product'
 
export const database = new VuexORM.Database()

database.register(Product)

export default database