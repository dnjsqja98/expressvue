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
                        <h4 class="user-component__title">경매 등록</h4><i class=" fa-2x" aria-hidden="true" image
                            src="../image/123.jpg"></i>
                    </a>
                </li>
    
                <li class="nav__btn">
                    <a class="nav__link" onclick="goBack()"><i class="fas fa-chevron-left fa-2x"
                            aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

<fieldset>
    <div class="lnb_area">
        <div class="lnb_inner">
            <div id="menu">
                <ul class="menu">
                    <!-- <li class="m1"><a href="#" onclick="">
                        <span class="tx">전체</span></a></li>
                    <li class="m2"><a href="#" onclick="">
                        <span class="tx">채소</span></a></li>
                    <li class="m3"><a href="#" onclick="">
                        <span class="tx">과일</span></a></li>
                    <li class="m4"><a href="#" onclick="">
                        <span class="tx">잡곡</span></a></li>
                    <li class="m6"><a href="#" onclick=""></li> -->
                </ul>
            </div>
        </div>
    </div>
</fieldset>

<fieldset>
    <table class="table-100">
  
    <tbody>
          <tr>
        <td class="table-100-tyfk">작물</td>
        <td class="table-100-0pky" colspan="3" ><input id="td_input_text" type="text" name="text" size="20" style="width:100%;" required placeholder="작물을 입력해주세요"></td>
      </tr>
      <tr>
        <td class="table-100-tyfk">중량</td>
        <td class="table-100-0pky" colspan="3" ><input id="td_input_text" type="text" name="text" size="20" style="width:100%;" required placeholder="kg"></td>
      </tr>
      <tr>
        <td class="table-100-tyfk">시작 가격</td>
        <td class="table-100-0pky" colspan="3" ><input id="td_input_text" type="text" name="text" size="20" style="width:100%;" required placeholder="원"></td>
      </tr>
      <tr>
        <td class="table-100-tyfk">최대 가격</td>
        <td class="table-100-0pky" colspan="3"><input id="td_input_text" type="text" name="text" size="20" style="width:100%;" required placeholder="원"></td>
      </tr>
      <tr>
        <td class="table-100-tyfk">낙과 일자</td>
        <td class="table-100-1pky" colspan="3" ><input type="date" value="currentDate"></td>
      </tr>
      <tr>
        <td class="table-100-tyfk">크기</td>
        <td class="table-100-1pky">소</td>
        <td class="table-100-1pky">중</td>
        <td class="table-100-1pky">대</td>
      </tr>
      <tr>
        <td class="table-100-tyfk">상태</td>
        <td class="table-100-1pky">상</td>
        <td class="table-100-1pky">중</td>
        <td class="table-100-1pky">하</td>
      </tr>
      <tr>
        <td class="table-100-tyfk">설명</td>
        <td class="table-100-0pky" colspan="3" ><input id="td_input_text" type="text" name="text" size="20" style="width:100%;" required placeholder="작물의 세부사항을 적어주세요"></td>
      </tr>
    </tbody>
    </table>
</fieldset>

<div class="main_nav_b_div">
    <nav class="main_b_nav">
        <ul class="main_m_ui_list">
            <li class="nav__btn">
                <a class="nav__link" href="#"><h4 class="user-component__title">등록하기</h4>
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