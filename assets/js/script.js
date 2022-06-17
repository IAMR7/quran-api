$.getJSON("https://api-alquranid.herokuapp.com/surah", function(value){

    function set(){
        sessionStorage.setItem('key','value');
    }

    $.each(value.data, function(i, value){
        $('#list-surah').append('<div class="col-lg-2 col-md-3 col-6 mb-3"><a onClick="sessionStorage.somekey = '+ value.nomor +'; console.log(sessionStorage.somekey);" data-fajax="false" href="detail-surah.html" data-transition="slidefade" class="text-decoration-none text-dark"><div class="card"><div class="card-body"><h6>'+ value.nomor +'. '+ value.nama+'</h6></div></div></a></div>');
    });
    

});


let data = sessionStorage.getItem('somekey');

$.getJSON("https://api-alquranid.herokuapp.com/surah/"+data, function(value){
    console.log(value.data);

    $.each(value.data, function(i, value){
        $('#body-detail-surah').append('<div class="mb-5"><h6 class="text-center fs-4 fw-bolder">'+ value.ar+'</h6><p class="mt-3 text-center">'+ value.tr +'</p><p class="mt-3 text-center">'+ value.id +'</p></div>');
    });
    

});