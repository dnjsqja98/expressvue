
<template>
	<div>
	<header class="welcome-header">
  	  <h1 class="welcome-header__title">회 원 가 입</h1>
  	</header>

		<!-- @ 는 v-on 과 같은 표현식이다. 폼 내부에서 버튼을 누르면 submit 이벤트가 form 으로 전송되고 v-on:submit이 실행된다.
		이때 페이지가 새로고침되므로 .prevent를 통해 새로고침을 막고 methods의 함수롤 호출하게 한다. -->
		<form @submit.prevent="submitForm" class="check_form">
    <input class="login-form__input" type="text" required placeholder="이름">
    <input class="login-form__input" type="email" required placeholder="이메일">
    <!-- </form>
    <form action="index.html" class="login-form" id="join"> -->
    <input class="login-form__input" type="password" id="password" required placeholder="비밀번호" minlength="6">
    <input class="login-form__input" type="password" id="passwordcheck" required placeholder="비밀번호확인" minlength="6">

    <!-- </form>
    <form action="index.html" class="login-form"> -->
    <input class="login-form__input" type="text" required placeholder="휴대폰번호">
    <input class="login-form__btn_right" type="submit" value="인증번호 받기">
    <input class="login-form__input" type="text" required placeholder="인증번호를 입력해주세요">
    <input class="login-form__btn_right" type="submit" value="인 증 확 인">
	<router-link to='/check_farm'>
    <input class="login-form__btn_right" type="submit" value="다 음">
	</router-link>
	</form>
	</div>


</template>

<script src="https://kit.fontawesome.com/75f55f0a8e.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>

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

	methods:{
	}

	
};

</script>


	
<style >
@import url(../assets/css/main.css);
</style>