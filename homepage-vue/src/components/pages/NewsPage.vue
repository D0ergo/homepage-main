<template>
  <div class="news">
    <h2 class="title-news">NEWS</h2>
    <div class="news-text-div">
      <ul>
        <li>2022/6/17&ensp;
          <router-link to="/news2" class="news-link">
            株式会社WaSquateオフィシャルサイトを公開
          </router-link>
        </li>

        <br>

        <li>2022/6/17&ensp;
          <router-link to="/news1" class="news-link">
            Microsoft Start-up 支援プログラムに採択されました
          </router-link>
        </li>

      </ul>
    </div>
  </div>
<router-view/>
</template>

<style scaped>
.news {
  padding-top: 10%;
  height: 500px;
}

.title-news{
  margin-bottom: 50px ;
  font-size:2vmax;
}

.news-link{
  text-decoration: none;
  color: black;
}
.news-link:hover{
  color:silver;/*カーソル乗せた後の背景色*/
}

.news-text-div{
  margin: 16px auto;
	text-align: center;
	display: block;
}
.news-text-div ul {
	padding-left: 0;
	list-style: none;
	display: inline-block;
}
.news-text-div ul li {
	text-align: left;
  font-size: 1.5vmax;
  
}




@media screen and (max-width: 806px) {
.news {
  padding-top: 30%;
  height: 600px;
}



}





</style>
