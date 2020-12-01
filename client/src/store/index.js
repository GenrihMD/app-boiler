
import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from './database'

Vue.use(Vuex)

// Register Models to Database.
database.register(User)
database.register(Post)

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store