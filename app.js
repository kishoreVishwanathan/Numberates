let num = document.getElementById("btn");
            let prompt_box = document.getElementById("prompt_box");
            let promt_box = document.getElementById("promt_box");
            let txt = document.getElementById("txt");
            let num1 = document.getElementById("num");
            let noOfAttempts = document.getElementById("chancesText");
            let randomNumber = Math.floor(Math.random() * 100 ) + 1;

            let number;
            let  NO_OF_ATTEMPTS = 10;
            noOfAttempts.innerHTML = "No of Attemps:- " + NO_OF_ATTEMPTS;
            num.addEventListener("click", (e) => {
                if(num.value) {
                e.preventDefault();
                NO_OF_ATTEMPTS --;
                noOfAttempts.innerHTML = "No of Attemps:- " + NO_OF_ATTEMPTS;
                if(NO_OF_ATTEMPTS == 0 ) {
                    activateBox("Loss");
                }
                number = num1.value;
                checkNum(number);
                num1.value = "";
                
                // console.log("attemps",NO_OF_ATTEMPTS);
                }
            });
            
            function checkNum(number) {
                if(number == randomNumber) {
                    activateBox("Win");
                } else if(number > randomNumber) {
                    txt.innerHTML = "Enter Small Number";
                } else {
                    txt.innerHTML = "Enter Large Number";
                }
            }


            function activateBox(e) {
                prompt_box.classList.add("active"); 
                promt_box.innerHTML = "You" + e +"The game";
                txt.innerHTML = "";
                randomNumber = Math.floor(Math.random() * 100 ) + 1;
            }
            function playAgain(e) {
                prompt_box.classList.remove("active");
                NO_OF_ATTEMPTS = 10;
                txt.innerHTML = "";
                noOfAttempts.innerHTML = "No of Attemps:- " + NO_OF_ATTEMPTS;
            }
