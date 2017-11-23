/* ===== Edit Function ===== */

function dribbleShots(cb) {
  var shots = [];
  $.ajax({
    url: "https://kiteapi.herokuapp.com/dribbble/shots/1", 
    success: function(response){
      for(var row in response.shots){
        if(response.shots[row].images.hasOwnProperty('hidpi')){
            shots.push({
              title: response.shots[row].title,
              image: response.shots[row].images.hidpi,
              link: response.shots[row].link, 
              created: response.shots[row].created
            })
        }
      }   
      cb(shots);
    }
  });
  
}

/* ===== End Function ===== */