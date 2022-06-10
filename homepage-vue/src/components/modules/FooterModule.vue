<template>

<footer>
  <div class="footer-wrap">
    <div class="copyrigh">Copyright ©︎ 2022 WaSquate inc. Reserved. </div>
   
    <div class="p-text">
      <router-link to="/privacy-policy" class="link">プライバシーポリシー</router-link>
    </div>

  </div>
</footer>

</template>

<style scoped>
/*フッター*/
footer {
  width: 100%;
  height: 5%;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  margin-top: 20%;
  font-weight: bold;
}
footer a{
  text-decoration: none;
  color: black;
  
}
footer a:hover {
  color: #65C2C2;
}

.footer-wrap::after{
  content: "";
  display: block;
  clear: both;
}
.copyrigh {
  float: left;
  width: 50%; /* 要素の幅を50%に定義 */
  font-size: 1vmax;
}
.p-text {
  float: right;
  width: 50%; /* 要素の幅を50%に定義 */
  font-size: 1vmax;
}

@media screen and (max-width: 806px) {
.p-text {
  float: center;
}

}

</style>