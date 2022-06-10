<template>

<div class = "news-wrap-1">

   <router-link to="/news" class="news-link">ニュースページに戻る</router-link>

    <p>2022年6月17日</p>

    <h2 class="news-title">マイクロソフト社の<br class="spbr">スタートアップ支援プログラム<br>
    「Microsoft for Startups Founders Hub」<br class="spbr">に採択されました
    </h2>
    <p>
        平素は格別のお引き立てを賜り誠にありがとうございます。<br>
        弊社はこの度、Microsoft Corporation（本社：米国ワシントン州、以下「マイクロソフト社」）が提供する、スタートアップ支援プログラム<br>
        「Microsoft for Startups Founders Hub」に採択されましたことをご報告致します。<br>
        Microsoft for Startups採択により、弊社はAzureを活用したサービスの展開していく予定です。<br>
        また、メンター制度やテクニカルサポートを活用して、セキュリティ並びにサービスの向上にも努めてまいります。<br>
        今後ともご指導、ご鞭撻を賜りますよう、よろしくお願い申し上げます。<br>
        代表 ： 佐藤大輝
    </p>
    <div class="news-img">
        <img src="/press-release.png" width="100%">
    </div>

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

.news-wrap-1{
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    width:60%;
}
.news-title {
    color: #65C2C2;
}

.news-wrap-1 p {
    text-align: left;
    line-height: 2.5;
}
.news-img {
    text-align: center;
}
.news-img img {
    width: 50vw;
    height: auto;
}

.spbr{
    display: none;
}

@media screen and (max-width: 806px) {
.news-wrap-1{
    margin-top: 30%;
    width:90%;
    height: 1300px;
}
.news-title {
    color: #65C2C2;
    font-size: 2vmax;
}
.news-img img {
    width: 80vw;
    height: auto;
}
.spbr{
    display: block;
}

}
</style>