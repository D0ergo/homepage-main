<template>
  <div class="home">
    <div id="logo">
      <img src="/logo-name-mark.png" width="500" height="100">
    </div>

    <div class="yajirushi">
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>

    <div class="catch-copy-wrap">
      <div>
      <p class="catch-copy">AIで持続可能な社会を実現</p>
      <p class="catch-text">AIを用いて様々な環境問題の解決の糸口を模索し提案</p>
      <p class="catch-text">自社サービス「ごみわかーる」</p>
      <p class="catch-text">はゴミ問題の解決に大きな可能性を提供します</p>
      </div>

      <div class="gomi-sdgs-wrap">
        <div class="btn-primary-wrap">
            <a class="btn-primary" @click="scrollToAnchorPoint('gomi-waka-ru')">
              「 ごみわかーる 」についてみる
            </a>
        </div>

        <div class="sdgs"><!--PC表示 , スマホ非表示-->
          <img src="/SDGs.png">
        </div><!--sdgs-->
      </div><!--gomi-sdgs-wrap-->

    </div><!--catch-copy-wrap-->
    
    <div ref="gomi-waka-ru">
      <Gomi/>
    </div>
  </div>
</template>


<script>

import Gomi from '../modules/servise/GomiWaka-ru.vue'

export default {
  name: 'HomeView',
  components: {
    Gomi
  },
  methods: {
    scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth'})
    }
  }
}
</script>

<style scaped>
/* ロゴのdiv */
#logo {
  margin-top: 20% ;
  margin-bottom: 7%;

}
/* ロゴのimg */
#logo img {
  width: 80%;
  height: auto;
}


div .catch-copy-wrap p {
  margin: 0.30em 0px;
  
}
.catch-copy-wrap {
  margin-left: auto;
  margin-right: auto;
  padding-left: 10%;
  padding-right: 10%;
}
.gomi-sdgs-wrap {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 3%;
}
.gomi-sdgs-wrap div {
  flex-grow: 1;   
}

.catch-copy {
  font-size: 5vmax;
  font-weight: bold;
  text-align: left;
  color: #65C2C2;
}
.catch-text {
  font-size: 2vmax;
  text-align: left;
}


.btn-primary-wrap {
  text-align: left;
}
.btn-primary {
  font-size: 2vmax;
  color: black;
  border-bottom: 3px solid #ddd;
}
.btn-primary:hover {
  color: #65C2C2;
}
.sdgs {
  text-align:right;
}
.sdgs img {
  width : 23vw ;
  height: auto;
}



.arrows {
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 75px;
  display: block;
  margin-bottom: 10%;
}
.arrows path {
  stroke: #65C2C2;
  fill: transparent;
  stroke-width: 2px;  
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite; 
}
@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
.arrows path.a1 {
  animation-delay:-1s;
  -webkit-animation-delay:-1s; /* Safari 和 Chrome */
}
.arrows path.a2 {
  animation-delay:-0.5s;
  -webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}
.arrows path.a3 { 
  animation-delay:0s;
  -webkit-animation-delay:0s; /* Safari 和 Chrome */
}





/* スマホ対応 */
@media screen and (max-width: 806px) {
#logo {
  margin-top: 40% ;
  margin-bottom: 20%;
}

.btn-primary-wrap {
  margin-top: 5%;
}




/* 矢印の非表示 */
.yajirushi {
  display: none;
}




/* スマホ非表示 */
.sdgs {
  display: none;
}



}

</style>