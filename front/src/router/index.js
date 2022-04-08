import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import alert from "@/components/alert";
import main from "@/components/main";
import test from "@/components/test";
import auction_detail from '@/components/auction_detail'
import auction_reg from '@/components/auction_reg'
import auction from "@/components/auction";
import check_farm from "@/components/check_farm";
import check_user from "@/components/check_user";
import clause from "@/components/clause";
import farm_biz_info from "@/components/farm_biz_info";
import farm_calculate_clear from '@/components/farm_calculate_clear'
import farm_calculate from "@/components/farm_calculate";
import farm_intro from '@/components/farm_intro'
import farm_mypage_auction from '@/components/farm_mypage_auction'
import farm_mypage_get_review from '@/components/farm_mypage_get_review'
import farm_mypage_keep from '@/components/farm_mypage_keep'
import farm_mypage_post_review from '@/components/farm_mypage_post_review'
import farm_mypage from "@/components/farm_mypage";
import farm_profile from "@/components/farm_profile";
import farm_user_info from "@/components/farm_user_info";
// import informationfarm from '@/components/informationfarm'
import loc from "@/components/loc";
import login from "@/components/login";
import search from "@/components/search";
import ServiceCenter from '@/components/ServiceCenter'
import signup from "@/components/signup";
import trand from '@/components/trand'
import user_calculate_clear from '@/components/user_calculate_clear'
import user_calculate from '@/components/user_calculate'
import user_loc from "@/components/user_loc";
// import user_mypage_auction from '@/components/user_mypage_auction'
// import user_mypage_keep from '@/components/user_mypage_keep'
// import user_mypage_post_review from '@/components/user_mypage_post_review'
// import user_mypage_profile from '@/components/user_mypage_profile'
// import user_mypage from '@/components/user_mypage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },

    { path: '/alert', name: 'alert', component: alert },
    { path: '/auction_detail', name: 'auction_detail', component: auction_detail },
    { path: '/auction_reg', name: 'auction_reg', component: auction_reg },
    { path: "/auction", name: "auction", component: auction },
    { path: "/check_farm", name: "check_farm", component: check_farm },
    { path: "/check_user", name: "check_user", component: check_user },
    { path: "/clause", name: "clause", component: clause },
    { path: "/farm_biz_info", name: "farm_biz_info", component: farm_biz_info },
    { path: '/farm_calculate_clear', name: 'farm_calculate_clear', component: farm_calculate_clear },
    { path: '/farm_calculate', name: 'farm_calculate', component: farm_calculate },
    { path: '/farm_intro', name: 'farm_intro', component: farm_intro },
    { path: '/farm_mypage_auction', name: 'farm_mypage_auction', component: farm_mypage_auction },
    { path: '/farm_mypage_get_review', name: 'farm_mypage_get_review', component: farm_mypage_get_review },
    { path: '/farm_mypage_keep', name: 'farm_mypage_keep', component: farm_mypage_keep },
    { path: '/farm_mypage_post_review', name: 'farm_mypage_post_review', component: farm_mypage_post_review },
    { path: '/farm_mypage', name: 'farm_mypage', component: farm_mypage },
    { path: "/farm_profile", name: "farm_profile", component: farm_profile },
    { path: "/farm_user_info", name: "farm_user_info", component: farm_user_info },
    // { path: '/informationfarm', name: 'informationfarm', component: informationfarm },
    { path: '/loc', name: 'loc', component: loc },
    { path: "/login", name: "login", component: login },
    { path: "/main", name: "main", component: main },
    { path: '/search', name: 'search', component: search },
    { path: '/ServiceCenter', name: 'ServiceCenter', component: ServiceCenter },
    { path: "/signup", name: "signup", component: signup },
    { path: "/test", name: "test", component: test },
    { path: '/trand', name: 'trand', component: trand },
    { path: '/user_calculate_clear', name: 'user_calculate_clear', component: user_calculate_clear },
    { path: '/user_calculate', name: 'user_calculate', component: user_calculate },
    { path: "/user_loc", name: "user_loc", component: user_loc }
    // { path: '/user_mypage_auction', name: 'user_mypage_auction', component: user_mypage_auction },
    // { path: '/user_mypage_keep', name: 'user_mypage_keep', component: user_mypage_keep },
    // { path: '/user_mypage_post_review', name: 'user_mypage_post_review', component: user_mypage_post_review },
    // { path: '/user_mypage_profile', name: 'user_mypage_profile', component: user_mypage_profile },
    // { path: '/user_mypage', name: 'user_mypage', component: user_mypage },
  ]
});
