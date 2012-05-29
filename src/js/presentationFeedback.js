$(function() {
    $('#goButton').click(function(){
        $('#presentation').append("Hi people");
        console.log($('#presentationIframe').attr('src'));
        if( $('#presentationIframe').attr('src') === 'http://www.reddit.com/' ){
            $('#presentationIframe').attr('src', 'http://www.bbc.co.uk');
        } else {
            $('#presentationIframe').attr('src', 'http://www.reddit.com/');
        }
    });
});
