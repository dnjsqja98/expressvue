
<template>

	<div>
    <header class="welcome-header">
        <h1 class="welcome-header__title">프로필 입력</h1>
    </header>
        <fieldset>
        <h2 class="profileh2">프로필 사진</h2>
        <div class="sh_group">
            <div class="sh_header">
                <legend>프로필 수정</legend>
                <table border="0" class="tbl_model">
                    <caption><span class="blind">프로필 수정</span></caption>
                    <colgroup>
                        <col style="width:22%">
                        <col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <div class="thcell">프로필 사진</div>
                            </th>
                            <td>
                                <div class="tdcell">
                                    <div class="profile_photo">
                                        <img class="profile_photo2" id="imgThumb"
                                            src="https://static.nid.naver.com/images/web/user/default.png?type=s160"
                                            width="100" height="100">
                                        <span class="mask"></span>
                                    </div>
                                    <div class="btn_area_btm">
                                        <span class="btn_file">
                                            <label for="inputImage" class="btn_model"><b id="btnChangeProfile"
                                                    class="btn2"
                                                    onclick="clickcr(this,'prf.upimg','','',event);">사진변경</b></label>
                                            <input type="file" id="inputImage" name="profileImage" accept="image/*">
                                        </span>

                                    </div>
                                    <br>
                                    <!-- <a href="javascript:;" class="btn_model"><b id="btnDelete" class="btn2 btn_disable"
                                            onclick="clickcr(this,'prf.delimg','','',event);">삭제</b></a> -->
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <tr>
                <th scope="row">
                    <div class="thcell"><label for="inpNickname">농가명</label></div>
                </th>
                <td>
                    <div class="tdcell">
                        <p class="contxt_webctrl nickname">
                            <input type="text" name="nickname" id="inpNickname" value="xx농가"
                                onclick="clickcr(this,'prf.nick','','',event);">
                            <!-- Enter 입력으로 submit이 되는걸 방지하기 위한 Input -->
                            <input type="text" style="display: none;">
                        </p>
                    </div>
                </td>
            </tr>
        </div>
    </fieldset>

    <fieldset>
        <h2 class="profileh2">지역 설정</h2>
        <div class="sh_group">
            <div class="sh_header">

            </div>
            <div class="sh_content">
                <dl class="sh_lst2">
                    <dt>지역</dt>
                    <dd>충청북도 제천시 천남동</dd>
                </dl>
            </div>
            <p class="btn_area_btm"><a href="/loc" onclick="clickcr(this,'imn.regmodify','','',event);"
                    class="btn_model"><b class="btn2">설정하기</b></a>
            </p>
        </div>
    </fieldset>
    
    <fieldset>
        <h2 class="profileh2">브랜드 스토리</h2>

        <div class="sh_group">
            <div class="sh_header">

            </div>
            <div class="sh_content">
                <dl class="sh_lst2">
                    <img class="profile_photo3" id="profile_photo"
                        src="https://static.nid.naver.com/images/web/user/default.png?type=s160">
                    <img class="profile_photo3" id="profile_photo"
                        src="https://static.nid.naver.com/images/web/user/default.png?type=s160">
                </dl>
            </div>
            <div class="btn_area_btm">
                <span class="btn_file">
                    <label for="inputImage" class="btn_model"><b id="btnChangeProfile" class="btn2"
                            onclick="clickcr(this,'prf.upimg','','',event);">사진 추가</b></label>
                    <input type="file" id="inputImage" name="profileImage" accept="image/*">
                </span>

            </div>

        </div>
        <form>
            <p><textarea class="profile_textarea" required placeholder="농가에 대한 소개를 적어주세요"></textarea></p>
        </form>

    </fieldset>

    <ul class="check button1">
        <li><button type="button" class="fpmgBt1" onClick="location.href='login'">다음에 수정</button></li>
        <li><button type="button" class="fpmgBt2" onClick="location.href='login'">수정하기</button></li>
    </ul>

	</div>
</template>

<script>


</script>

<style>
@import url(../assets/css/main.css);
</style>