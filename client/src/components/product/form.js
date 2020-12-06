import { PrimusForm } from 'primusfront'
import { CharField } from 'primusfront/forms/fields'
import { CustomIDField } from 'primusfront/utils/fields'

export class ProductForm extends PrimusForm {
  fields () {
    return {  
      id: new CustomIDField(),
      name: new CharField('Название')
    }
  }
}
