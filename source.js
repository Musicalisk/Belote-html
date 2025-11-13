const CARDS = ['trA', 'coA', 'piA', 'caA', 'tr10', 'co10', 'pi10', 'ca10', 'trR', 'coR', 'piR', 'caR', 'trQ', 'coQ', 'piQ', 'caQ', 'trV', 'coV', 'piV', 'caV', 'tr9', 'co9', 'pi9', 'ca9', 'tr8', 'co8', 'pi8', 'ca8', 'tr7', 'co7', 'pi7', 'ca7', 'placeholder'];
var remove;
var playerContractCard;
var cardDraw = [];
var redo;
var contract;
var possibleDraw = CARDS.toSpliced(32, 1);
var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];
var contractedPlayer;
var drawCounter = 0;
var playerTurn = 1;
var contractTaken = false;
var playerStart = 1;
var randomCard;
window.onload = gameSetup();
function gameSetup(){
    alert('gS1');
    startUpOne();
    if(redo == 1){
        clearVars();
        gameSetup();
    }
    alert('gS2');
    startUpTwo();
    if(redo == 1){
        clearVars();
        gameSetup();
    }
    alert('gS3');
    roundStart();
}
// clears variables incase of a incident
function clearVars(){
    remove;
    playerContractCard;
    cardDraw;
    redo;
    contract;
    possibleDraw;
    player1 = [];
    player2 = [];
    player3 = [];
    player4 = [];
    contractedPlayer;
    drawCounter = 0;
    playerTurn = 1;
    contractTaken = false;
    playerStart++;
    if(playerStart == 5){
        playerStart == 1;
        return playerStart;
    }
}
function startUpOne(){
    possibleDraw = CARDS.toSpliced(32, 1);
    alert('sUO1');
    // draw three cards for each player
    for(let i1 = 0; i1 < 4; i1++){
        for(let i2 = 0; i2 < 3; i2++){
            randomCard = Math.floor(Math.random() * possibleDraw.length);
            cardDraw.push(possibleDraw[randomCard]);
            switch(i1){
                case 0:
                    player1.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                case 1:
                    player2.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                case 2:
                    player3.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                case 3:
                    player4.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                default:
                    i2-3;
                    drawCounter--;
                    break;
            }
        }
    }
    console.log(player1 + ' | ' + player2 + ' | ' + player3 + ' | ' + player4);
    alert('sUO2');
    // draw two cards for each player
    for(let i3 = 0; i3 < 4; i3++){
        for(let i4 = 0; i4 < 2; i4++){
            randomCard = Math.floor(Math.random() * possibleDraw.length);
            cardDraw.push(possibleDraw[randomCard]);
            switch(i3){
                case 0:
                    player1.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                case 1:
                    player2.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                case 2:
                    player3.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                case 3:
                    player4.push(...cardDraw);
                    remove = possibleDraw.lastIndexOf(randomCard);
                    possibleDraw.splice(remove, 1);
                    cardDraw.pop();
                    drawCounter++;
                    break;
                default:
                    i4-2;
                    break;
            }
        }
    }
    console.log(player1 + ' | ' + player2 + ' | ' + player3 + ' | ' + player4);
    alert('sUO3');
    // draw card for possible contract; then vote for round 1 & round 2 of contract voting through functions
    randomCard = Math.floor(Math.random() * possibleDraw.length);
    cardDraw.push(possibleDraw[randomCard]);
    let possibleContract = cardDraw.substr(0, 2);
    do{
        contractChoosing(possibleContract, contractTaken);
        if(ContractTaken === true){
            playerContractCard = playerTurn;
            playerTurn = 4;
            return playerTurn;
        }
    }
    while(playerTurn == 4);
    switch(playerContractCard){
        case 1:
            contractedPlayer = player1.splice();
            break;
        case 2:
            contractedPlayer = player2.splice();
            break;
        case 3:
            contractedPlayer = player3.splice();
            break;
        case 4:
            contractedPlayer = player4.splice();
            break;
        default:
            redo = 1;
            return redo;
    }
    contractedPlayer.push(cardDraw);
    remove = possibleDraw.findIndex(cardDraw);
    possibleDraw.splice(remove, 1);
}
// function for contract voting
function contractChoosing(a, b){
    var contCounter = 1;
    let vote;
    if(contCounter == 1){
        switch(a){
            case 'tr':
                alert("Atout: Trèfle");
                vote = 'tr';
                break;
            case 'co':
                alert("Atout: Cœur");
                vote = 'co';
                break;
            case 'pi':
                alert("Atout: Pique");
                vote = 'pi';
                break;
            case 'ca':
                alert("Atout: Carreau");
                vote = 'ca';
                break;
            default:
                contCounter++;
                break;
        }
        if(contCounter != 1){
            voteContract(vote, b, contCounter);
            if(vote === true){
                return b;
            }
            else if(vote === false){
                return contCoutner++;
            }
        }
    }
    else if(contCounter == 2){
        switch(a){
            case 'tr':
                alert("Atout: Trèfle");
                vote = 'tr';
                break;
            case 'co':
                alert("Atout: Cœur");
                vote = 'co';
                break;
            case 'pi':
                alert("Atout: Pique");
                vote = 'pi';
                break;
            case 'ca':
                alert("Atout: Carreau");
                vote = 'ca';
                break;
            default:
                return false;
        }
        voteContract(vote, b, contCounter);
        if(vote === true){
            return b;
        }
        else if(vote === false){
            redo = 1;
            return redo;
        }
    }
}
// function used to determine votes; add html element to manipulate in future
function voteContract(c, b, d){
    let vote = document.getElementById('').value;
        if(d == 1){
            c = vote;
        }
        else if(d == 2){
            let voteTwo = document.getElementById('').value;
            b = voteTwo;
            c = true;
        }
}
// deal last three cards for all players and é to the contracted player, then start the round
function startUpTwo(){
    // switch(contractedPlayer){
    //     case player1:
    //         player1 = contractedPlayer.splice();
    //         break;
    //     case player2:
    //         player2 = contractedPlayer.splice();
    //         break;
    //     case player3:
    //         player3 = contractedPlayer.splice();
    //         break;
    //     case player4:
    //         player4 = contractedPlayer.splice();
    //         break;
    //     default:
    //         redo = 2;
    //         return redo;
    // }
}
// starts the 8 tricks for the Round
function roundStart(){
    // playerStart goes first then clockwise
}