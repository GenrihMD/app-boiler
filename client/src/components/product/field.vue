<template>
  <div class="animal-field">
    <v-select
      :value="val"
      @input="inputHandler"
      :items="customChoices"
      item-value="value"
      item-text="text"
      :label="adminInstance.itemHeader"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import { adminInstance } from './admin'
import ShowInstanceMixin from '@/components/mixins/ShowInstance'

const base = adminInstance.generateFieldComponent()

export default {
  name: base.name,
  mixins: [base, ShowInstanceMixin],
  methods: {
    openItemPopup () {
      this.showComponent('AnimalPopup')
    },
    onMounted: function () {
      this.getItems().then(() => {
        this.$emit('input', this.Model.query().first().id)
      })
    }
  },
  computed: {
    val: function () {
      let Obj = this.Model.query().first()
      return Obj ? Obj.id : ''
    }
  }
}
</script>

<style lang="scss">
.animal-field {
  display: flex;
}

.animal-field__add-button {
  margin-left: 8px;
  height: 40px !important;
}
</style>
