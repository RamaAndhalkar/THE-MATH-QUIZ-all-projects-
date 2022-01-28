
function addUser()
{
    player1= document.getElementById("player1_nameinput").value;
    player2= document.getElementById("player2_nameinput").value;

    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);

    window.location="game_page.html";

}
