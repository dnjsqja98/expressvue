
<template>

	<div>
    <header class="welcome-header">
        <h1 class="welcome-header__title">지역 설정</h1>
    </header>
		<!-- @ 는 v-on 과 같은 표현식이다. 폼 내부에서 버튼을 누르면 submit 이벤트가 form 으로 전송되고 v-on:submit이 실행된다.
		이때 페이지가 새로고침되므로 .prevent를 통해 새로고침을 막고 methods의 함수롤 호출하게 한다. -->
		    <fieldset>
        <h2 class="profile_loc_h2">현재 지역은 x 입니다</h2>
        <div class="sh_group">
            <div class="sh_header">
                <div id="map" style="width:auto;height:400px;"></div>
            </div>
        </div>
    </fieldset>

		<form @submit.prevent="submitForm" class="login-form">
        <ul class="join_box">
            <li class="checkBox check02">
                <ul class="clearfix">
                    <li>위치정보 이용 동의</li>
                    <li class="checkBtn">
                        <input type="checkbox" name="chk">
                    </li>
                </ul>
                <textarea name="" id="">여러분을 환영합니다.
제1조(목적) 이 법은 사업자가 그 거래상의 지위를 남용하여 불공정한 내용의 약관(約款)을 작성하여 거래에 사용하는 것을 방지하고 불공정한 내용의 약관을 규제함으로써 건전한 거래질서를 확립하고, 이를 통하여 소비자를 보호하고 국민생활을 균형 있게 향상시키는 것을 목적으로 한다.

[전문개정 2010. 3. 22.]
 </textarea>
</li>
</ul>


		</form>
		<br><br>
				<router-link to='/login'>
			<button class="login-form__btn" type="submit" >확인</button>
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'SignupForm',
	data() {
		return {
			email: '',
			name: '',
			password: '',
			passwordConfirm: '',
			position: '',
			teamName: '',
		};
	},
	mounted() {
		this.fnGetView();
	}
	,methods:{
		onClickRedirect: function () {   
          window.open("/clause");
      },
	  

		fnGetView() {
			this.$axios.get('http://localhost:3000/api/board/'+this.body.num,{params:this.body})
			.then((res)=>{
				this.view = res.data.view[0];
				this.subject = this.view.subject;
				this.cont = this.view.cont.replace(/(\n)/g,'<br/>');
			})
			.catch((err)=>{
				console.log(err);
			})
		}
	}

	
};

</script>

<style>
@import url(../assets/css/main.css);
</style>