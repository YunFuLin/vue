import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '@/pages/login.vue' 
import Index from '@/pages/index.vue' 
import HomePage from '@/pages/homePage.vue' // 主页
import Record from '@/pages/record.vue' // 记录页
import Information from "@/pages/information.vue"; // 消息页


import Personage from '@/pages/personage.vue' // 个人页
import PersonalInformation from '@/pages/personagePages/personalInformation.vue' // 个人信息页
import Modification from '@/pages/personagePages/modification.vue' // 密码修改
import AboutUs from '@/pages/personagePages/aboutUs.vue'// 关于我们

import NationalScholarship from '@/pages/applicationPages/nationalScholarship.vue' // 国家奖学金
import Encouragement from '@/pages/applicationPages/encouragementScholarship.vue' // 励志奖学金
import MeritStudent from '@/pages/applicationPages/meritStudent.vue'
import Leave from '@/pages/applicationPages/leave.vue' // 请假申请页
import Discipline from '@/pages/applicationPages/discipline.vue' // 违纪撤销
import DelayPayment from '@/pages/applicationPages/delayPayment.vue' // 缓缴申请

import MessageDetails from '@/pages/messageDetails/messageDetails.vue' // 消息详情

import Details from '@/pages/details.vue' // 详情页
import myTest from '../pages/test.vue' // 测试页面 -可删除


// 防止重复进入一个路由报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes:[
        // 入口重定项
        {
            path: '/',
            redirect:{path: '/login'}
        },


        {
            name:'login',
            path:'/login',
            component: Login
        },
        {
            name:'index',
            path:'/index',
            component: Index
        },
        {
            name:'record',
            path:'/record',
            component: Record
        },
        {
            name:'information',
            path:'/information',
            component: Information
        },
        {
            name:'details',
            path:'/details',
            component: Details
        },
        {
            name:'homePage',
            path:'/homePage',
            component: HomePage
        },
        {
            name:'personage',
            path:'/personage',
            component: Personage
        },
        // 申请页面
        {
            name:'leave',
            path:'/leave',
            component: Leave
        },
        {
            name:'nationalScholarship',
            path:'/nationalScholarship',
            component: NationalScholarship
        },
        {
            name:'encouragement',
            path:'/encouragement',
            component: Encouragement
        },
        {
            name:'meritStudent',
            path:'/meritStudent',
            component: MeritStudent
        },
        {
            name:'discipline',
            path:'/discipline',
            component: Discipline
        },


        // 个人页面
        {
            name:'personalInformation',
            path:'/personalInformation',
            component: PersonalInformation
        },
        
        {
            name:'modification',
            path:'/modification',
            component: Modification
        },
        {
            name:'aboutUs',
            path:'/aboutUs',
            component: AboutUs
        },
        {
            name:'delayPayment',
            path:'/delayPayment',
            component: DelayPayment
        },

        // 消息详情
        {
            name:'messageDetails',
            path:'/messageDetails',
            component: MessageDetails
        },




        {
            name:'test',
            path:'/test',
            component: myTest
        },
    ]
})
// 导航守卫
// 添加导航守卫:前置守卫：在跳转之前进行调用
// 路由跳转都会经过这个导航守卫, 当需要跳转时进入触发
// to:目标路由
// from:源路由
// next:下一步的操作，就是用户当前需要进行的操作
// router.beforeEach((to, from, next) => {
//   if(to.name == 'personal'){
//       let token = localStorage.getItem('lll')
//       if(token){
//           next()
//       }else {
//           next({path:'/login'})
//       }
//   }else {
//       next()
//   }
// })

export default router