<template>
<div>
    <div class="main_nav_t_div">
        <nav class="main_t_nav">
            <ul class="main_t_nav_list">
                <li class="nav__btn">
                    <div class="nav__notification-dot"></div>
                    <a class="nav__link"><i class="fas fa-bars fa-2x" aria-hidden="true"></i>
                    </a>
                </li>


                <li class="main_m_li_list">
                    <a class="nav_m_link" href="workout.html">
                        <h4 class="user-component__title">정산금액 입금</h4><i class=" fa-2x" aria-hidden="true" image
                            src="../image/123.jpg"></i>
                    </a>
                </li>

                <li class="nav__btn">
                    <a class="nav__link" onclick="goBack()"><i class="fas fa-chevron-left fa-2x" aria-hidden="true"></i>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
    <h2 class="profile_loc_h2">결제 상품</h2>

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

    <fieldset>
        <div class="aside_area aside_popular">
            <h3 class="h_popular"><span></span></h3>
            <table class="tbl_home">
                <tbody>
                    <tr class="">
                        <th>못난이 복숭아</th>
                        <td>10kg</td>
                    </tr>

                    <tr class="">
                        <th>낙과 일자</th>
                        <td>2022.02.19</td>
                    </tr>

                    <tr class="">
                        <th>사이즈</th>
                        <td>대 중 소</td>
                    </tr>

                    <tr class="">
                        <th>상태</th>
                        <td>상 중 하</td>

                    <tr class="">
                        <th>낙찰된 가격</th>
                        <td>50,000 원</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </fieldset>

    <fieldset>
        <div class="aside_area aside_popular">
            <div class="gray_div">
                <h3 class="h_popular"></h3>
                <table class="tbl_home">
                    <tbody>
                        <tr class="">
                            <th class="whitefont">상품금액</th>
                            <td class="whitefont"> 50,000 원</td>

                        <tr class="">
                            <th class="whitefont">수수료 (10%)</th>
                            <td class="whitefont">5,000 원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </fieldset>

    <fieldset>
        <div class="aside_area aside_popular">
            <h3 class="h_popular"></h3>
                <table class="tbl_home">
                    <tbody>
                        <tr>
                            <th class="font15">최종입금금액</th>
                            <td class="font15">55,000 원</td>

                        </tr>
                    </tbody>
                </table>
        </div>
    </fieldset>

    <div class="main_nav_b_div">
        <nav class="main_b_nav">
            <ul class="main_m_ui_list">
                <li class="nav__btn">
                    <a class="nav__link" href="farm_calculate_clear">
                        <h4 class="user-component__title">정산하기</h4>
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