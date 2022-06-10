<template>

<div class = "news-wrap-2">

    <router-link to="/news" class="news-link">ニュースページに戻る</router-link>
    
    <p>2022年6月17日</p>

    <h2 class="news-title">オフィシャルホームページを開設しました</h2>
    <p>
        平素は格別のお引き立てを賜り誠にありがとうございます。<br>
        この度、株式会社WaSquateオフィシャルサイト（https://wasquate.com/）を開設致しましたことをご報告致します。<br>
        今後ともご愛顧のほどよろしくお願いいたします。<br>
        代表 ： 佐藤大輝<br>
    </p>
</div>

</template>


<style scaped>
.news-link{
    text-decoration: none;
    color: gray;
}
.news-link:hover {
     color: black;
}

.news-wrap-2{
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    margin-top: 10%;
}
.news-title {
    color: #65C2C2;
}
.news-wrap-2 p {
    text-align: left;
    line-height: 2.5;
}

@media screen and (max-width: 806px) {
.news-wrap-2{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    margin-top: 30%;
    height: 600px;
}


}


</style>