$(function() {
    var lastTweetID = Number.MIN_VALUE;
    var tweetCount = 0;
    
    $('#goButton').click(function(){
        if( $('#URLInput').attr('value').length > 1 ){
            $('#presentationIframe').attr('src', $('#URLInput').attr('value'));
        }
        
        fetchTweets();
        
        $('#startPage').hide();
        $('#presentingPane').show();
    });
    
    function fetchTweets(){
        var tweep = $('#twitterInput').attr('value');
        
        $.getJSON('http://search.twitter.com/search.json?since_id=' + lastTweetID + '&q=%40' + tweep + '&callback=?', function(data){
            lastTweetID = data.max_id;
            var results = data.results;
            
            for( var i = results.length - 1; i >= 0; i-- ){
                var tweetColor = tweetCount % 2 == 0 ? 'odd' : 'even';
                
                $('#twitterInfo')
                .prepend(
                    $(document.createElement('div'))
                    .addClass('tweet')
                    .addClass(tweetColor)
                    .text(results[i].text)
                );
                
                tweetCount++;
            }
            
            window.setTimeout( fetchTweets, 5000 );
        });
    };
});
