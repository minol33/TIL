<template>
    <div>
        <img :src="oneroom.image" class="room-img">
        <h4 @click="$emit('openModal', oneroom.id)">{{oneroom.title}}</h4>
        <!-- <h4 @click="modalOpen = true; roomNum = i">{{a.title}}</h4> -->
        <p>{{oneroom.content}}</p>
        <p>{{oneroom.price}} 원</p>
    </div>
</template>

<script>
export default {
    name : 'Card',
    props : {
        oneroom : Object,
    }
}
</script>

<style>

</style>
