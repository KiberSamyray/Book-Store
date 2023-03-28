$('#btn-like').on("click", function() {
    if( $('#path1').css('fill') == "rgb(255, 0, 0)"){
        $('#path1').css({ fill: "#ffffff" });
    }else{
        $('#path1').css({ fill: "#ff0000" });
    }    
  });