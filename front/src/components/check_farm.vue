
<template>
	<div>
    <header class="welcome-header1">
        <h1 class="welcome-header__title1">사용자 확인</h1>
        <p class="welcome-header__text1">회원님의 유형을 선택해주세요</p>
    </header>

    <ul class="check button1">
		<router-link to='/user_loc'>
        <li><button type="button" class="fpmgBt1" onClick="location.href='/check_farm'">개인 회원</button></li>
		</router-link>
		<router-link to='/check_farm'>
        <li><button type="button" class="fpmgBt2" onClick="location.href='/user_loc'">사업자 회원</button></li>
		</router-link>
    </ul>
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