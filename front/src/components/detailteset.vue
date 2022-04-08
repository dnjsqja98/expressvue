<template> <div> <h1>상세 내용</h1> 
<div class="container"> 
    <div class="outer"> 
        <div class="inner">
             <div class="centered"> 
                 <img v-bind:src="test.poster" class="poster"> 
                 <div> 
                     <strong>{{test.name}}</strong> 
                     - <i>{{test.director}}
                         </i> [{{test.year}}] 
                         <p>{{test.description}}</p> 
                         <router-link :to="{ name: 'testlist' }">돌아가기</router-link> 
                         </div>
                          </div>
                           </div> 
                           </div> 
                           </div> 
                           </div> 
                           </template>
                            <script> /* eslint-disable */ export default { created: function() { var id = this.$route.params.id; this.$http.get(`/tests/${id}`).then(response => { this.test = response.data[0]; }); }, data: function() { return { test: {} }; } }; </script>
