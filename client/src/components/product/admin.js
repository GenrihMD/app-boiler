import { PrimusAdmin } from 'primusfront'
import { ProductForm } from './form'

export class ProductAdmin extends CustomAdmin {
  constructor () {
    let baseAttrs = {
      form: new ProductForm(),
      componentBaseName: 'Product',
      itemHeader: 'Продукт',
      listHeader: 'Список продуктов'
    }
    super(baseAttrs)
    this.globalSet()
  }
}

export const adminInstance = new ProductAdmin()
