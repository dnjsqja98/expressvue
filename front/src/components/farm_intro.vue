<template>
<div>
    <div class="main_nav_t_div">
        <nav class="main_t_nav">
            <ul class="main_t_nav_list">
                <li class="nav__btn">
                    <a class="nav__link" href="alert"><i class="fas fa-bell fa-2x" aria-hidden="true"></i>
                    </a>
                </li>

                <li class="nav__btn">
                    <a class="nav__link" href="main"><i class="fas fa-running fa-2x" aria-hidden="true" image
                            src="../image/123.jpg"></i>
                    </a>
                </li>

                <li class="nav__btn">
                    <div class="nav__notification-dot"></div>
                    <a class="nav__link" href="auction"><i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>


    <!-- Swiper -->
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <!-- <fieldset>
        <ul class="button-100">
            <div class="goods_group">
                <ul class="goods_group_list">
                    <li id="_rowLi20220213173042CHK2022021381488661" class="goods_pay_item ">
                        <h2 class="profileh2">환경 레벨 LV3</h2>
                         <label>사용량 64% </label> 
                        <meter min="0" max="100" value="64" ></meter>
                    </li>
                </ul>
            </div>
    </fieldset> -->


<fieldset>
    <ul class="button-100">
        <li><button type="button" class="fpmgBt1" onclick="location.href='/informationfarm'">농가 소개</button></li>
        <div class="goods_group">
            <ul class="goods_group_list">

                <li id="_rowLi20220213173042CHK2022021381488661" class="goods_pay_item ">
                    <header class="welcome-header1">
                        <p class="welcome-header__text1">우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~우리 농가는 ~~</p>
                    </header>

                </li>
            </ul>
        </div>
    </ul>

    <ul class="button-100">
        <li><button type="button" class="fpmgBt1" onclick="location.href='/informationfarm'">주요 농작물</button></li>
    </ul>

            <span class="btn_file">
                <label for="inputImage" class="btn_model"><b id="btnChangeProfile" class="btn2"
                        onclick="">복숭아</b></label>
            </span>

            <span class="btn_file">
                <label for="inputImage" class="btn_model"><b id="btnChangeProfile" class="btn2"
                        onclick="">사과</b></label>
            </span>

            <span class="btn_file">
                <label for="inputImage" class="btn_model"><b id="btnChangeProfile" class="btn2"
                        onclick="">호두</b></label>
            </span>
            <span class="btn_file">
                <label for="inputImage" class="btn_model"><b id="btnChangeProfile" class="btn2"
                        onclick="">수박</b></label>
            </span>
            <span class="btn_file">
                <label for="inputImage" class="btn_model"><b id="btnChangeProfile" class="btn2"
                        onclick="">포도</b></label>
            </span>

</fieldset>


    <fieldset>
        <h2 class="profileh2">생산자 정보</h2>

        <div class="goods_group">
            <ul class="goods_group_list">

                <li id="_rowLi20220213173042CHK2022021381488661" class="goods_pay_item ">
                    <div class="goods_item">
                        <a href="/orderStatus/2022021339733581" class="goods_thumb">
                            <img src="https://suhofarm.com/_upload/mall/20220112173148_86227.jpg" alt="" width="90"
                                height="90"></a>
                        <div class="goods_info">

                            <p class="guide2">
                                농가명 : 따과농과
                            </p>
                            <p class="guide2">
                                대표자 : 김따과
                            </p>
                            <p class="guide2">
                                사업자 등록번호 : 2349782431978
                            </p>
                            <p class="guide2">
                                농가 주소 : 충청북도 충주시 대학로 50
                            </p>
                            <p class="guide2">
                                연락처 : 010-2343-2342
                            </p>
                        </div>

                    </div>
                    <div class="seller_item">
                        <div class="inner">

                            <span class="seller">따과농과</span>
                            <span class="tel">1544-0967</span>
                            <a href="#"
                                class="state_button qna _click(nmp.front.order.timeline.home.list.shoppingInquiry(/merchant/shoppingInquiry/2022021381488661)) _stopDefault">문의하기</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </fieldset>

    <!-- 하단 navbar -->
    <div class="main_nav_b_div">
        <nav class="main_b_nav">
            <ul class="main_m_ui_list">
                <li class="nav__btn">
                    <a class="nav__link" href="farm_mypage_myreview"><h4 class="user-component__title">거래후기 보러가기</h4>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/75f55f0a8e.js" crossorigin="anonymous"></script>

<script>

</script>

<style>
@import url(../assets/css/main.css);
</style>