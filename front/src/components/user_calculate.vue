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
                        <h4 class="user-component__title">결제 완료</h4><i class=" fa-2x" aria-hidden="true" image
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

    <h2 class="profile_loc_h2">결제 상품 확인</h2>

    <fieldset>
        <div class="white_div">
            <div class="goods_pay_section ">
                <div class="goods_group">
                    <ul class="goods_group_list">

                        <li id="_rowLi20220213173042CHK2022021381488661" class="goods_pay_item ">
                            <div class="goods_item">
                                <a href="/orderStatus/2022021339733581" class="goods_thumb">
                                    <img src="https://suhofarm.com/_upload/mall/20220112173148_86227.jpg" alt=""
                                        width="90" height="90"></a>
                                <div class="goods_info">

                                    <p class="guide2">
                                        못난이 사과 10kg
                                    </p>
                                    <p class="guide2">
                                        50,000 원
                                    </p>
                                </div>
                            </div>
                            <div class="seller_item">
                                <div class="inner">
                                    <a href="#"
                                        class="state_button qna _click(nmp.front.order.timeline.home.list.shoppingInquiry(/merchant/shoppingInquiry/2022021381488661)) _stopDefault">10kg</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </fieldset>

    <fieldset>
        <div class="divw100">
            <div class="divinw100">
                <p class="h3_left">매장 선택</p>
                <select class="select_box">
                    <option value="none">=== 선택 ===</option>
                </select>

                <button class="styled2">
                    찾기
                </button>
            </div>
        </div>

        <div class="divw100">
            <div class="divinw100">
                <p class="h3_left">일자 선택</p>
                <input type="date" value="currentDate" class="select_box">
            </div>
        </div>

        <div class="divw250">
            <div class="divinw100">
                <tr>
                    <p class="h3_left1">주문자 정보</p>
                    <button class="styled2">
                        변경
                    </button>
                    <div>
                        <br><br>
                        <p class="h4_left">이원범</p>
                        <br>
                        <p class="h4_left">010-8623-64xx</p>
                        <br>
                        <p class="h4_left">wkdch9@naver.com</p>
                    </div>
                </tr>
            </div>
        </div>

        <div class="divw250">
            <div class="divinw100">
                <p class="h3_left1">결제 방법</p>
                <br><br>

                <button class="styled3">
                    계좌이체
                </button>
                <button class="styled4">
                    신용카드
                </button>
            </div>
        </div>

        <div class="aside_area aside_popular">
            <div class="gray_div">
                <h3 class="h_popular"><span></span></h3>
                <table class="tbl_home">
                    <tbody>
                        <tr class="">
                            <th class="whitefont">상품금액
                            </th>
                            <td class="whitefont"> 55,000 원</td>

                        </tr>
                        <tr class="">
                            <th class="whitefont">적립금
                            </th>

                            <td class="whitefont"><input type="text">원</td>
                        <tr class="">
                            <th>
                                <div class="seller_item">
                                    <div class="inner">
                                        <a href="#"
                                            class="state_button qna1 _click(nmp.front.order.timeline.home.list.shoppingInquiry(/merchant/shoppingInquiry/2022021381488661)) _stopDefault">전체
                                            사용</a>
                                    </div>
                                </div>
                            </th>
                            <td class="whitefont1"><p>사용가능 적립금 <span id="max_use_point">8,000원</span></p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </fieldset>

    <fieldset>
        <div class="aside_area aside_popular">
            <h3 class="h_popular"><span></span></h3>
            <table class="tbl_home">
                <tbody>
                    <tr>
                        <th class="font15">최종입금금액
                        </th>
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
                    <a class="nav__link" href="user_calculate_clear">
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