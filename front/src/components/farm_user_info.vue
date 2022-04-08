
<template>

	<div>
    <header class="welcome-header">
        <h1 class="welcome-header__title">정 보 입 력</h1>
      </header>
		<!-- @ 는 v-on 과 같은 표현식이다. 폼 내부에서 버튼을 누르면 submit 이벤트가 form 으로 전송되고 v-on:submit이 실행된다.
		이때 페이지가 새로고침되므로 .prevent를 통해 새로고침을 막고 methods의 함수롤 호출하게 한다. -->
		<form @submit.prevent="submitForm" class="login-form">
        <label id="login-form-label">농가명</label>
        <input class="information-form__input" type="text" required placeholder="농가명">
        <label id="login-form-label">대표자</label>
        <input class="information-form__input" type="text" required placeholder="대표자">
        <label id="login-form-label">주민등록번호</label>
        <input class="login-form__input" type="text" required placeholder="주민등록번호">
        <label id="login-form-label">사업장 소재지</label>
        <input class="login-form__input" type="text" required placeholder="사업장 소재지">
        <label id="login-form-label">휴대폰번호</label>
        <input class="login-form__input" type="text" required placeholder="휴대폰번호">
        <input class="login-form__btn" type="submit" value="다음">
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