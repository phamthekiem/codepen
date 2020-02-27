$(function(){
  
  var $parent = $('.video-intro'),
      $f = $parent.find('iframe'),
      $image = $parent.find('.image'),
      f = $f[0],
      url = $f.attr('src').split('?')[0];
 
      window.addEventListener('message', function(e){
        var d = JSON.parse(e.data);
      }, false);
  
      $('.btn').click(function(){
        var $t = $(this);
        runCommand('play');
        $image.hide();
      });
  
      function runCommand(cmd){
        var data = {method : cmd};
        f.contentWindow.postMessage(JSON.stringify(data), url);
      }
  
      // fitvids
      $('.video-intro').fitVids();
  
});