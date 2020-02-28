window.onload = function () {

    // XMLHttpRequestオブジェクトの作成
    var request = new XMLHttpRequest();
    var URL = "http://localhost:3000/api/v1/"
  
    // URLを開く
    request.open('GET', URL, true);
    request.responseType = 'json';
  
    // レスポンスが返ってきた時の処理を記述 
    request.onload = function () {
      // レスポンスが返ってきた時の処理
      console.log("something returned!!")
      var data = this.response;
      const body = document.getElementById('title');
      body.innerHTML = data.message;
    }
  
    if(getCookie()){
      request.send();
    }
  
    document.getElementById("english").onclick = function() {
      setCookie("en");
      request.send();
    };
  
    document.getElementById("japanese").onclick = function() {
      deleteCookie();
      window.location.reload()
    };
  }
  
  function getCookie(){
    var cookies = document.cookie;
    var cookiesArray = cookies.split(';'); // ;で分割し配列に
  
    for(var c of cookiesArray){
        var cArray = c.replace(/\s/g, '').split('=');
        console.log(cArray);
        if( cArray[0] == 'language'){
            console.log(cArray[1]);
            return cArray;
        }
    }
    return null;
  }
  
  function setCookie(language){
    document.cookie = "language=" + language;
  }
  
  function deleteCookie(){
    document.cookie = "language" + '=;max-age=0'
  }