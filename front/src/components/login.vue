
<template>

	<div>
	<header class="welcome-header1">
        <h1 class="welcome-header__title1">따 과 농 과</h1>
        <p class="welcome-header__text1">123123213</p>
    </header>
		<!-- @ 는 v-on 과 같은 표현식이다. 폼 내부에서 버튼을 누르면 submit 이벤트가 form 으로 전송되고 v-on:submit이 실행된다.
		이때 페이지가 새로고침되므로 .prevent를 통해 새로고침을 막고 methods의 함수롤 호출하게 한다. -->
		<form @submit.prevent="submitForm" class="login-form">

			<div>

				<input class="login-form__input" type="text" id="name" v-model="name" />
			</div>
			<div>
				<input class="login-form__input" type="password" id="password" v-model="password" />
			</div>

    <div class="login_keep_wrap" id="login_keep_wrap">
        <div class="keep_check">
            <input type="checkbox" id="keep" name="nvlong" class="input_keep" value="on">
            <label for="keep" class="keep_text">로그인 상태 유지</label>
        </div>
    </div>
		<router-link to='/clause'>
			<button class="login-form__btn" type="submit" >로그인</button>
		</router-link>
			<button class="login-form__btn" type="submit">회원가입</button>
			<a class="login-form__a" href="#">아이디 찾기</a>
		</form>
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