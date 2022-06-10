<template>
    <div class="gomiwaka-ru">
        <div class="gomi-wrap"><!--PC表示 , スマホ非表示-->
            <div class="phone">
                <img src="/phone.png">
            </div>

            <div class="gomi-text">
                <img src="/gomi.png"><br>
                ゴミを捨てようとした時<br>
                <span>「このゴミ何ゴミだっけ？」</span><br>
                となった経験、ありませんか？<br>
                調べる手間・時間をAIで解決します！
            </div>

        </div>

        <div class="btn-gomi"><!--PC表示 , スマホ非表示-->
            <a href="#" class="btn-flat-border">show more</a>
        </div>


        <div class="gomi-wrap-sp"><!--スマホ表示 , PC非表示-->
            <div class="gomi-text-sp">
                <img src="/gomi.png"><br>
                ゴミを捨てようとした時<br>
                <span>「このゴミ何ゴミだっけ？」</span><br>
                となった経験、ありませんか？<br>
                調べる手間・時間をAIで解決します！
            </div>
        </div>

        <div class="img-set-sp"><!--スマホ表示 , PC非表示-->
            <div class="phone-sp">
                <img src="/phone.png">
            </div>

            <div class="btn-gomi-sp">
                <a href="#" class="btn-flat-border-sp">show more</a>
            </div>
        </div>
        

    </div>
</template>

<style scaped>
/* floatの解除  */
.gomi-wrap::after{
  content: "";
  display: block;
  clear: both;
}


.gomiwaka-ru {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    padding-top: 12%;
}
.gomi-wrap div {
    margin: 0; /* 要素の外側の余白を0に定義 */
    padding: 0; /* 要素の内側の余白を0に定義 */
}

.phone {
    float: left;
    width: 50%;
}
.phone img {
    width: 18vw;
    height: auto;
}

.gomi-text {
    text-align: left;
    font-size: 2vmax;
    line-height: 7vmax;
    float: right;
    width: 50%; /* 要素の幅を50%に定義 */
}
.gomi-text img {
    width: 30vw;
    height: auto;
}
.gomi-text span {
    font-weight: bold;
    font-size: 2.5vmax;
}

.btn-gomi {
    margin-top: 3%;
}
.btn-flat-border {
    font-size: 1.6vmax;
    display: inline-block;
    padding: 0.3em 1em;
    text-decoration: none;
    color: #6BB0AB;
    border: solid 2px #6BB0AB;
    border-radius: 3px;
    transition: .4s;
}
.btn-flat-border:hover {
    background: #6BB0AB;
    color: white;
}


/* PC非表示 */
.gomi-wrap-sp {
    display: none;
}
.btn-gomi-sp {
    display: none;
}
.img-set-sp {
    display: none;
}


@media screen and (max-width: 806px) {
/* floatの解除  */
.img-set-sp::after{
  content: "";
  display: block;
  clear: both;
}

.gomi-wrap-sp {
    display: block;
    margin-top: 20%;
    margin-bottom: 10%;
}
.gomi-text-sp img {
    width: 60vw;
    height: auto;
}
.gomi-text-sp span {
    font-weight: bold;
    font-size: 2.2vmax;
}
.gomi-text-sp {
    margin-left:auto;
    margin-right: auto;
    font-size: 2vmax;
    line-height: 7vmax;
    width: 80%; /* 要素の幅を50%に定義 */
}


.img-set-sp {
    display: block;
}
.img-set-sp div {
    margin: 0; /* 要素の外側の余白を0に定義 */
    padding: 0; /* 要素の内側の余白を0に定義 */
}
.phone-sp {
    float: left;
    width: 50%;
}
.phone-sp img {
    width: 20vw;
    height: auto;
}

.btn-gomi-sp {
    display: block;
    float: right;
    width: 50%;   
}
.btn-flat-border-sp {
    font-size: 1.6vmax;
    display: inline-block;
    padding: 0.3em 1em;
    text-decoration: none;
    color: #6BB0AB;
    border: solid 2px #6BB0AB;
    border-radius: 3px;
    transition: .4s;
    margin-top: 40%;
}
.btn-flat-border-sp:hover {
    background: #6BB0AB;
    color: white;
}



/* スマホ非表示 */
.gomi-wrap {
    display: none;
}
.btn-gomi {
    display: none;
}


}

</style>