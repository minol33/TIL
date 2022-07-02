<template>


  <!-- <div class="start" :class="{ end : modalOpen }"> -->
  <transition name="fade">
    <Modal @closeModal="modalOpen = false" :onerooms="onerooms" :roomNum="roomNum" :modalOpen="modalOpen" />
  </transition>
  <!-- </div> -->

  <div class="menu">
    <a v-for="(a, i) in menu" :key="i">{{a}}</a>
  </div>

  <Discount v-if="showDiscount == true" :amount="amount" />

  <button @click="priceSort">가격순정렬</button>
  <button @click="titleSort">가나다순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="modalOpen = true; roomNum = $event" :oneroom="onerooms[i]" v-for="(a,i) in onerooms" :key="i" />
  


</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data(){
    return {
      showDiscount : true,
      oneroomsOrigin : [...data],
      roomNum : 0,
      onerooms : data,
      modalOpen : false,
      menu : ['HOME', 'PRODUCTS', 'ABOUT'],
      amount : 30,
    }
  },
  methods : {
    titleSort(){
      this.onerooms.sort(function(a,b){
        return ( a.title < b.title ) ? -1 : ( a.title == b.title ) ? 0 : 1; 
      });
    },
    sortBack(){
      this.onerooms = [...this.oneroomsOrigin];
    },
    priceSort(){
      this.onerooms.sort(function(a,b){
        return a.price-b.price
      });   
    },
  },
  // mounted(){
  //   setTimeout(()=>{
  //     this.showDiscount = false;
  //   }, 2000);
  // },
  mounted(){
    setInterval(() => {
      if( this.amount > 0){
        this.amount--;
      }
    }, 1000);
  },

  // beforeUpdate(){
  //   if (this.month ==2 ){
  //     alert('3개월 이상 ')
  //   }
  // },
  components: {
    Discount,
    Modal,
    Card,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-from{ /*시작스타일*/
  opacity: 0;
}
.fade-enter-active { /*transition*/
  transition: all 1s;
}
.fade-enter-to { /*끝날때스타일*/
  opacity: 1;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background : rgba(0,0,0,0.5);
  position : fixed;
  padding : 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding : 20px;
}
.menu {
  background : darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  text-decoration: none;
}
.room-img {
  width: 100%;
  margin-top:40px;
}



</style>
