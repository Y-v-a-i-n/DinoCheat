var HelloWorld = prompt("what distance you want to add to your record : "),
    xhr = new XMLHttpRequest;
Number(HelloWorld)?(xhr.open("GET", "/inc/check.php?score=" + Math.ceil(Number(HelloWorld)*0.025), !1), xhr.send(), 200 != xhr.status || "" != xhr.responseText && ("" == user_name ? (user_name = prompt(xhr.responseText, "Yvain"), "null" != user_name && "" != user_name || (user_name = "Yvain")) : alert(xhr.responseText), xhr.open("GET", "/inc/set.php?name=" + user_name + "&score=" + Math.ceil(Number(HelloWorld),0.025), !1), xhr.send())):alert("The distance is invalid")
