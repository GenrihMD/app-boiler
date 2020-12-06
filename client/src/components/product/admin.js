import { CustomAdmin } from '@/components/utils/customAdmin'
import { ProductForm } from '@/components/product/forms'

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
