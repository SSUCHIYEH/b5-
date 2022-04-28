(function(){
  var deepdropdowntoggle = false;
  var dropdowntoggle = false;

  /**
   * Easy selector helper function
   */
   const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

window.addEventListener('load', () => {
    
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
          
        });
      }, true);


    }

    on('click','#whyus_collapse',function(){
      this.addEventListener('shown.bs.collapse',function(){
        this.getElementsByTagName('i').classList.remove('bi-caret-down')
        this.getElementsByTagName('i').classList.add('bi-caret-up')
        console,log('here')
      })
      
    },true);

    on('click','#deepdrop_btn2',function(){
      if(deepdropdowntoggle){
        document.getElementById("deepdropmenu").style.display = "none"
      }
      else{
        document.getElementById("deepdropmenu").style.display = "block"
      }
    
      deepdropdowntoggle = !deepdropdowntoggle
      
    },false);
    
    on('click','#dropdownbtn',function(){
      if(dropdowntoggle){
        document.getElementById("mobiledrop").style.display = "none"
      }
      else{
        document.getElementById("mobiledrop").style.display = "block"
      }
    
      dropdowntoggle = !dropdowntoggle
      
    },false);



  });





/*
window.addEventListener('load',()=>{
 let portfoliocontainer = select('.portfolio-container');
 
 if(portfoliocontainer){
     let portfolioIsotope = new Isotope(portfoliocontainer,{
        itemSelector:'portfolio-item'
    });
    let portfoliofilter = select('#portfolio-filter button',true);
    on('click','#portfolio-filter button',function(e){
        e.preventDefault();
        portfoliofilter.forEach(function(el){
            el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');
        portfolioIsotope.arrange({
            filters : this.getAttribute('data-filter')

        });
        portfolioIsotope.on('arrangeCompelete',function(){
            AOS.refresh()
        });
    },true);
 

}

});

*/

window.addEventListener('scroll', function (e) {
    
    if (window.scrollY > 100) {
      this.document.getElementById("header").style.backgroundColor = "#37517e"
      this.document.getElementById("top").style.display = "block"
      
    }else{
      this.document.getElementById("header").style.backgroundColor = "rgba(55, 81, 126,0)"
      this.document.getElementById("top").style.display = "none"
    }
  })

function allportfolio() {
    var s_app = document.getElementsByClassName("t_app");
    var i;
    for (i = 0; i < s_app.length; i++) {
        s_app[i].style.display = "inline";
    }
    var s_web = document.getElementsByClassName("t_web");
    for (i = 0; i < s_web.length; i++) {
        s_web[i].style.display = "inline";
    }
    var s_card = document.getElementsByClassName("t_card");
    for (i = 0; i < s_card.length; i++) {
        s_card[i].style.display = "inline";
    }
    
};

function appbutton() {
    if (app_toggle) { //已經觸發只剩下app的
        allportfolio();
    } else { //還沒觸發
        var s_web = document.getElementsByClassName("t_web");
        var i;
        for (i = 0; i < s_web.length; i++) {
            s_web[i].style.display = "none";
        }
        var s_card = document.getElementsByClassName("t_card");
        for (i = 0; i < s_card.length; i++) {
            s_card[i].style.display = "none";
        }
    }
    app_toggle = !app_toggle;
    $grid.masonry('reloadItems')
}

function webbutton(){
    if (web_toggle) { //已經觸發只剩下app的
        allportfolio();
    } else { //還沒觸發
        var s_app = document.getElementsByClassName("t_app");
        var i;
        for (i = 0; i < s_app.length; i++) {
            s_app[i].style.display = "none";
        }
        var s_card = document.getElementsByClassName("t_card");
        for (i = 0; i < s_card.length; i++) {
            s_card[i].style.display = "none";
        }
    }
    $grid.masonry('reloadItems', function() {
        console.log('reload is complete');
      });

    web_toggle = !web_toggle;

    $grid.masonry( 'on', 'layoutComplete', function() {
        console.log('layout is complete');
      });
}


function cardbutton(){
    if (web_toggle) { //已經觸發只剩下app的
        allportfolio();
    } else { //還沒觸發
        var s_app = document.getElementsByClassName("t_app");
        var i;
        for (i = 0; i < s_app.length; i++) {
            s_app[i].style.display = "none";
        }
        var s_web = document.getElementsByClassName("t_web");
        for (i = 0; i < s_web.length; i++) {
            s_web[i].style.display = "none";
        }
    }
    card_toggle = !card_toggle;
    
}








function OpenDrawer() {
    document.getElementById("mobile-nav").classList.add('active')
};

function CloseDrawer() {
    document.getElementById("mobile-nav").classList.remove('active')
};

function DeepDropDown(){

  if(deepdropdowntoggle){
    document.getElementById("deepdropmenu").style.display = "none"
  }
  else{
    document.getElementById("deepdropmenu").style.display = "block"
  }

  deepdropdowntoggle = !deepdropdowntoggle
  
};






})()