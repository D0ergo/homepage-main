<template>

<header class="site_header">

    <h1 class="site_logo">
        <router-link to="/" class="link">
            <img src="/logo-name-mark.png">
        </router-link>
    </h1>

    <!-- =====PC用メニュー===== -->
    <nav class="site_nav">
        <ul class="site_nav_manu">
            <li class="site_nav_menu_item"><router-link to="/" class="link">ホーム</router-link></li>
            <li class="site_nav_menu_item"><router-link to="/news" class="link">ニュース</router-link></li>
            <li class="site_nav_menu_item"><router-link to="/information" class="link">会社情報</router-link></li>
            <li class="site_nav_menu_item"><router-link to="/contact" class="link">お問合せ</router-link></li>
        </ul>
    </nav>

    
    <!-- =====スマホ用メニュー===== -->
    <nav class="menu" v-bind:class="{'is-active' : open }">
        <ul>
            <div class="menu_item_slide_home" v-bind:class="{'is-active' : open }">
                <li class="menu_item" v-on:click="open=!open" ><router-link to="/" class="link">ホーム</router-link></li>
            </div>
            <div class="menu_item_slide_news" v-bind:class="{'is-active' : open }">
            <li class="menu_item" v-on:click="open=!open" ><router-link to="/news" class="link">ニュース</router-link></li>
            </div>
            <div class="menu_item_slide_information" v-bind:class="{'is-active' : open }">
            <li class="menu_item" v-on:click="open=!open" ><router-link to="/information" class="link">会社情報</router-link></li>
            </div>
            <div class="menu_item_slide_contact" v-bind:class="{'is-active' : open }">
            <li class="menu_item" v-on:click="open=!open" ><router-link to="/contact" class="link">お問合せ</router-link></li>
            </div>
        </ul>
    </nav>


    <!-- スマホ用メニューのボタン -->
    <div class="menu-btn" v-bind:class="{'active' : open }" v-on:click="open=!open">
      <span class="fa fa-bars" aria-hidden="true"></span>
    </div>
    <div class="bg-menu" v-bind:class="{'active' : open }"></div>


</header>

</template>


<script>
export default {
    el: '#sp-nav',
    data: function() {
        return {
            open: false,
        }
    }
}    
</script>


<style scoped>
* {
   box-sizing: border-box;
}
.menu {
    display: none;
}
body {
   margin: 0;
   padding: 0;
   background-color: #e6e6e6;
}

.site_header {
    width: 100%;
    padding: 0px 4% 0px;
    background-color: #fff;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
}

.site_log {
   margin: 0; 
   padding: 0;
}
.site_logo img {
    height: 2.5vw;
    width: auto;
}

.site_nav {
    margin: 0 0 0 auto;
}
.site_nav ul {
    list-style: none;
    margin: 0;
    display: flex;
}
.site_nav ul li {
    margin: 0 0 0 80px;
    font-size: 15px;
    font-weight: bold;
}

.site_nav_menu_item .link {
    text-decoration: none;
    color: gray;
    
}
.site_nav_menu_item .link:hover {
  color: #4b4b4b;
}
.site_nav_menu_item a.router-link-exact-active {
  color: #6BB0AB;
}




@media screen and (max-width: 806px) {
.site_nav {
    display: none;
}
.site_logo img {
    height: 6vw;
    width: auto;
}

/*----------------------------
* ハンバーガーメニューボタン
*----------------------------*/
.menu-btn{
    z-index: 9999;
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 5% 0 auto;
    background: #fff;
}
.menu-btn span {
    position: absolute;
    top: 50%;
    left: 25%;
    display: block;
    width: 50%;
    height: 2px;
    background-color: black;
    transform: translateY(-50%);
}
.menu-btn::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 20%;
    left: 25%;
    width: 50%;
    height: 2px;
    background-color: black;
}
.menu-btn::before {
    content: '';
    display: block;
    position: absolute;
    top: 20%;
    left: 25%;
    width: 50%;
    height: 2px;
    background-color: black;
}

.menu-btn.active span {
    opacity: 0;
}
.menu-btn.active::after {
    transform: translateY(-8px) rotate(45deg);
}
.menu-btn.active::before {
    transform: translateY(8px) rotate(-45deg);
}


/*----------------------------
* メニュー本体
*----------------------------*/

.menu{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9998;
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /*
    align-items: center;
    */
    justify-content: center;
    
    background: #fff;
    /*
    border-bottom-left-radius: 10px;
    */
}
.menu_item{
    width: 100%;
    height: auto;
    padding: 10% 20% 10% 20%;
    text-align: left;
    color: #fff;
    box-sizing: border-box;
}
.menu li {
    list-style-type: none;
}
.menu_item .link{
    text-decoration: none;
    color: black;
    font-size: 2.5vmax;
}

.bg-menu.active{
    background: #4b4b4b;
    position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9997;
	background: rgba(3,3,3,.5);
	display: block;
}
/*----------------------------
* アニメーション部分
*----------------------------*/


/* アニメーション前のメニューの状態 */
.menu{
  transform: translateX(100vw);
  transition: all .2s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}




.menu_item_slide_home {
  transform: translateX(100vw);
  transition: all .5s linear;
}
.menu_item_slide_home.is-active {
  transform: translateX(0);
}

.menu_item_slide_news {
  transform: translateX(100vw);
  transition: all .6s linear;
}
.menu_item_slide_news.is-active {
  transform: translateX(0);
}

.menu_item_slide_information {
  transform: translateX(100vw);
  transition: all .7s linear;
}
.menu_item_slide_information.is-active {
  transform: translateX(0);
}

.menu_item_slide_contact {
  transform: translateX(100vw);
  transition: all .8s linear;
}
.menu_item_slide_contact.is-active {
  transform: translateX(0);
}

}
</style>