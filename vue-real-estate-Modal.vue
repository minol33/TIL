<template>
    <div class="black-bg" v-if="modalOpen == true">
        <div class="white-bg">
            <img :src="onerooms[roomNum].image" style="width:100%">
            <h4>{{onerooms[roomNum].title}}</h4>
            <p>{{onerooms[roomNum].content}}</p>
            <!-- <input @input="month = $event.target.value"> -->
            <input v-model="month">
            <p>{{ month }}개월 가격 : {{onerooms[roomNum].price * month}} 원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Modal',
    data(){
        return {
            month : 1,
        }
    },
    watch : {
        month(a){  //a는 month
            if( a >= 13 ){
                alert('최대 12개월까지 입력해주세요')
            } else if ( isNaN(a) == true ){
                alert('숫자만 입력해 주세요');
                this.month = 1;
            }
        },
    },
    props : {
        onerooms : Array,
        roomNum : Number,
        modalOpen : Boolean,
    }
}
</script>

<style>
</style>
