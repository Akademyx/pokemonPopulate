$(document).ready(function(){

    $('#button').click(function(){
        var url = 'https://pokeapi.co/media/img/';
        var png = '.png';
        var pic;
   
        for (var i = 1; i <= 151; i++) {
            pic ="<img class='poke' id="+ i + " " + "src=" + url + i + ".png>"
            $("#left").append(pic)
        }
    })
    $(document).on('click', '.poke', function(){
        //console.log(this);
        var pokeId = $(this).attr('id');
        var img = $(this).attr('src')
        var src = "https://pokeapi.co/api/v2/pokemon/"

        $('#imgSlot').attr('src', img)

        $.get(src + pokeId, function(res){
            
            var pname = res.name;
            var height = res.height;
            // $('h2').html('<h2>'+ pname + '</h2>');
            // $('h4').html('')
            for(var i = 0; i < res.types.length;i++){
                console.log(res.types[i].type.name)
                var typing = res.types[i].type.name
                $('#types').html(typing)
            }
            console.log(res.height)
            $('h2').html(pname)
            $('#height').html(res.height);
            $('#weight').html(res.weight);
            
        }, "json")

    })

})