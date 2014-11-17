$(document).on('click','.rm-button-open',function(e){
    $('#rm-container').addClass('rm-open');
    console.log('Class added !');
});
$(document).on('click','.rm-close',function(e){
   $('#rm-container').removeClass('rm-open');
});