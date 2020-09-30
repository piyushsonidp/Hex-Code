let btn = document.getElementById("btn");

let text = document.getElementById("val");

let main = document.getElementById("main_div");

let error = document.getElementById("message");

function show() {
  error.style.display = 'block';
}

function hide(){
  error.style.display = 'none';
}

function see() {
  let result = document.getElementById("output");
  let ip = text.value.toLowerCase();
  if (ip[0] != '#') {
    show();
    setTimeout(hide,3000)
  }
  else if(ip.length>8){
    error.innerText = "Please Enter Correct Code"
    show();
    setTimeout(hide,3000)
  }
  else if (ip === '#fff' || ip === '#ffffff') {
      result.style.color = '#000';
      result.style.background = ip;
      main.style.background = ip;
      result.innerHTML = "You have choose " + ip + " color";
    }
    else if(ip.length < 6){
       error.innerText = "Please Enter Correct Code"
       show();
       setTimeout(hide, 3000)
    }
  else {
    result.style.color = '#fff';
    result.style.background = ip;
    main.style.background = ip;
    result.innerHTML = "You have chosen " + ip + " color";
  }
}