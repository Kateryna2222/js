let userChoice = +prompt("камінь(1), ножиці(2), папір(3)?");
let randomChoice = Math.ceil(Math.random() * 3);

alert(`${userChoice} VS ${randomChoice}`);

(randomChoice === userChoice)? alert("~ нічия ~") : (((randomChoice === 1 && userChoice === 2) ||
                                                      (randomChoice === 2 && userChoice === 3) ||
                                                      (randomChoice === 3 && userChoice === 1) )? 
                                                      alert("Ви програли :(") : alert("Ви виграли :)"));

                                                      