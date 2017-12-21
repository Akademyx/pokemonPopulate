$(document).ready(function(){

    $('#button').click(function(){
        var url = 'http://pokeapi.co/media/img/';
        var png = '.png';
        var pic;
        console.log("in buton")
        for (var i = 1; i <= 151; i++) {
            pic ="<img class='poke'"+ " " + "src=" + url + i + ".png>"
            $("#wrapper").append(pic)
            console.log(pic)
        }
    })

})