jQuery(document).ready(function(){
  $('#button').on('click', function(){
  	$('#button').css({'display': 'hidden'});
  	$('#content').css({'display': 'block'});
  });
  $('#button').hover(function(){
    $(this).css('cursor', 'pointer');
  });
});
