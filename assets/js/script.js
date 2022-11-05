window.onload = function() {
    const fruits = [
        ".\\apple.png",
        ".\\banana.png",
        ".\\cherry.png",
        ".\\kiwi.png",
        ".\\lemon.png",
        ".\\pear.png",
        ".\\pomegranate.png",
        ".\\pulm.png",
        ".\\watermelon.png",
    ];

    var button_spin = document.getElementById("button_spin");

    var Attempt = document.getElementById("attempt");

    var user = prompt("Enter your name: ");
    var choose_nameUser = document.getElementById("user");

    if(user == false || user == null)
    {
        choose_nameUser.innerHTML = "User";
    }
    else
    {
        choose_nameUser.innerHTML = user;
    }

    function GetRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    let attempt = 0;
    Attempt.innerHTML = "Attempt: " + attempt;
    button_spin.onclick = function() {
    attempt++;
    Attempt.innerHTML = "Attempt: " + attempt;

        for(let i = 1; i < 10; i++)
        {
            document.getElementById([i]).setAttribute("src", fruits[GetRandom(0,8)]);
        }

        if((document.getElementById('1').src == document.getElementById('2').src 
        && document.getElementById('2').src == document.getElementById('3').src) || 
        (document.getElementById('4').src == document.getElementById('5').src 
        && document.getElementById('5').src == document.getElementById('6').src) 
        || (document.getElementById('7').src == document.getElementById('8').src 
        && document.getElementById('8').src == document.getElementById('9').src)){ 
            alert("Вітаю ви вийграли! Ви це зробили з " + attempt + " спроби");
            button_spin.setAttribute("disabled", true);
            
        }
    }
}
