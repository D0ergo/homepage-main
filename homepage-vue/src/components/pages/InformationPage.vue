<template>
  <div class="information">
    <h2 class="title-information">COMPANY INFORMATION</h2>
      <p class="log">
        <img src="/web2.png" width="405">
      </p>
      <p class="text">
        株式会社WaSquate (英 : WaSquate inc.)<br><br>
        代表取締役 佐藤大輝<br><br>
        メンバー数 4人（役員を含む)<br><br>
        〒357-0033<br><br>
        東京都品川区東五反田5丁目22-37<br><br>
        連絡先 : contact@wasquate.com
      </p>
  </div>
</template>



<script>

</script>


<style scaped>

.information {
  padding-top: 10%;
}
/* company information */
.title-information{
  margin-bottom: 50px ;
  font-size:2vmax;
}

/* wasquateの画像 */ 
.log {
  margin-right: 15px;
  display: inline-block;
}
/* 会社情報テキスト */
.text {
  text-align: left;
  margin-left: 30px;
  display: inline-block;
  font-size: 1.2vmax;
}



@media screen and (max-width: 806px) {
.information {
  padding-top: 30%;
}


/* wasquateの画像 */ 
.log img{
  width: 100%;
  height: auto;
}
/* 会社情報テキスト */
.text {
  margin-left: 30px;
  display: inline-block;
  font-size: 2.0vmax;
}




}
</style>