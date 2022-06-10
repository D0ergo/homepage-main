<template>
  <div class="contact">
    <h2 class="title-message">MESSAGE</h2>

   <div id="formWrapper">
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMZoItsP1wLH5flSiEW8SHXBU_SjOaI8pof7B6I6_nYQwjdw/formResponse" method="post" name="myForm" target="dummyIframe" id="form" @submit="submit">

      <div id="Form-Item-Wrapper">
        <div class="Form-Item">
          <p class="Form-Item-Label">
            <span class="Form-Item-Label-Required" id="name_label">必須</span>名前
          </p>
          <input type="name" class="Form-Item-Input" id="name" placeholder="name" name="entry.1686445744" required v-model="name">
        </div>
      </div>

      <div id="Form-Item-Wrapper">
        <div class="Form-Item">
         <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>メールアドレス
         </p>
        <input type="email" class="Form-Item-Input" id="email" placeholder="e-mail" name="entry.1757014626" required v-model="email">
        </div>
      </div>

      <div id="Form-Item-Wrapper">
        <div class="Form-Item">
          <p class="Form-Item-Label">
            <span class="Form-Item-Label-Required">必須</span>件名
          </p>
          <input type="text"  class="Form-Item-Input" id="subject" placeholder="subject" name="entry.212935344" required v-model="subject">
        </div>
      </div>


      <div id="Form-Item-Wrapper">
        <div class="Form-Item">
          <p class="Form-Item-Label isMsg">
            <span class="Form-Item-Label-Required">必須</span>お問合せ内容
          </p>
          <textarea id="contact" class="Form-Item-Textarea" placeholder="message" name="entry.544391693" required v-model="message"></textarea>
        </div>
      </div>


      <div class="Form-Btn-div">
        <input class="Form-Btn" type="submit" value="送る" v-on:click="submitForm" id="button">
      </div>
      </form>

      <iframe name="dummyIframe" style="display:none;"></iframe>

    </div>
    <div id="thxMessage" style="display:none;"><p>お問い合わせありがとうございました。</p></div>

  </div>
  
</template>

<script>

export default {
  methods: {
    submitForm: async function() {
      if (
        ! document.myForm.name.value == "" &&
        ! document.myForm.email.value == "" &&
        ! document.myForm.subject.value == "" &&
        ! document.myForm.contact.value == "" 
        ) {

        document.myForm.submit();
        document.getElementById('formWrapper').style.display = 'none';
        document.getElementById('thxMessage').style.display = 'block';

        return true;
      }else{
        return false; 
      }
    }
    
  }
}

</script>


<style scaped>
.contact {
  padding-top: 10%;
  height: 700px;
}
/* message */
.title-message{
  display:block;
  font-size:2vmax;
}


#formWrapper {
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
#Form-Item-Wrapper {
  border-top: 1px solid #ddd;
}
.Form-Item {
  
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
}

.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  /*max-width: 248px;*/
  letter-spacing: 0.05em;
  font-size: 14px;
  text-align: left;
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 35px;
  display: inline-block;
  text-align: center;
  background: #5bc8ac;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
}
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 30px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 14px;
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 100px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 14px;
}
.Form-Btn-div{
  border-top: 1px solid #ddd;
}
.Form-Btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 150px;
  display: block;
  letter-spacing: 0.05em;
  background: #5bc8ac;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  border: none;
}




@media screen and (max-width: 806px) {
.contact {
  padding-top: 30%;
  height: 800px;
}

.Form-Item {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 70%;
  display: block;
}


}

</style>