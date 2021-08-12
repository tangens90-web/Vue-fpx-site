import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


 export default new Vuex.Store({
  state:{
    products:[],
    cart:[],
  },
  mutations:{
    'SET_STORE' (state,products){
      state.products = products
    },
    'ADD_TO_CART' (state, product){
      if(state.cart.length){
        let bool = false
      state.cart.map((item)=>{
        
        if(item.title===product.title){
          bool = true
          // item.inCart-=1
          console.log('2gwegwg')
        }})
        if(!bool){
          state.cart.push(product)
        }
      
      }
      else{state.cart.push(product)}
      
    
      // product.availableItem -=1
      product.inCart +=1
      console.log(state.cart)
    },
    'DELETE_PRODUCT'(state, i){
      state.cart.splice(i,1)
    },
    'ADD_ONE_PRODUCT'(state, product){
      state.cart.map((item)=>{
        if(item.id == product.id){
          console.log('совпал продукт')
        }
      }

      )
    },
    'REMOVE_ONE_PRODUCT'(state, product){

    },
  },
  actions:{
    initStore:({commit})=>{
      axios.get('/static/products.json')                
    .then((response) =>{
      console.log(response)
      commit('SET_STORE', response.data.products)        
  })
    }
  },
  getters:{
    products:state=>state.products,
    cart:state=>state.cart
  }

  




})