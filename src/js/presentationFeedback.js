$(function() {
    $('#goButton').click(function(){
        
        if( $('#URLInput').attr('value').length > 1 ){
            $('#presentationIframe').attr('src', $('#URLInput').attr('value'));
        }
    });
});
