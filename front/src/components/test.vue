<template>
<div>
<div>
  
    <h4>상세페이지</h4>
    <p> 내용 </p>
<a v-for="name in 3" :key="name">Home</a>

</div>
  <div class = "black-bg" v-if="모달창열렸니 == true">
  <div class = "white-bg">
    <h4>상세페이지</h4>
    <p> 내용 </p>
    <button @click="모달창열렸니=false">닫기</button>
  </div>
</div>

  <div class="menu">
    <a v-for="a in 메뉴들" :key="a"> {{ a }} </a>
  </div>

 <div>

    <h4>{{원룸들}}</h4>
    <p>{{원룸들[0].price}}</p>
    // html 태그안의 속성 데이터바인딩은 :어쩌구
    // html 태그안의 내용 데이터바인딩은 {{어쩌구}}
  </div>

</div>
</template>

<script>
import data from '../assets/oneroom.js';

export default {
  name: 'App',
  data(){
    return {
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home','Shop','About'],
      products : ['역삼동원룸','천호동원룸','마포구원룸'],
    }
  },
  methods:{
    increase(){
      this.신고수 +=1;
    }
  },

  components: {
  }
}
</script>

<style>

body{ 
  margin : 0
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0,5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
   padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px; 
}
.menu a {
  color:white;
  padding:10px;
}

</style>