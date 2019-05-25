window.onload = function() {

  function current(hrefRef){
    nav = document.getElementsByClassName('navbar-nav')[0]
    arr = nav.children;
    arr = Object.entries(arr)
      hrefRef = "#" + hrefRef
    arr.forEach(function(element) {
      if (element[1].getAttribute("href") != hrefRef)
      element[1].classList.remove("current")
      else {
        if(!(element[1].classList.contains('current')))
          element[1].classList.add("current")
      }
    })
    }
  prev = null;
  wayPointArrs = []

  arrOfElementsIds = ['discover_wrapper', 'home', 'rev_slider_202_1', 'rev_slider_202_1_forcefullwidth', 'homeHeader', 'menu-btn', 'sliderUL', 'mmhome', 'rev_slider_632_1_wrapper']
  arrOfElementsIds.forEach(function(eleID) {
    var waypoint = new Waypoint({
      element: document.getElementById(eleID),
      handler: function(direction) {

        if (eleID === 'mmhome' || eleID === 'sliderUL')
          eleID = 'home'
        prev = eleID;
        console.log(eleID)


        current(eleID)


      },



    })
    wayPointArrs.push(waypoint)
  })
  // $('div').waypoint(function(direction){
  //   console.log(this.element)
  // })
}
function resetwp(){
  Waypoint.refreshAll();
}
window.setTimeout(resetwp, 200);
