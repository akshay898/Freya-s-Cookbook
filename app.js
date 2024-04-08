
$(document).ready(function() {
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout: 5000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      },
      1400:{
        items:4
    }
  }
});
});

window.onscroll = function () {headersticky()};
var header = document.getElementById("freyaheader")
var sticky= header.offsetTop;

function headersticky(){
  if (window.scrollY > sticky){
    header.classList.add("sticky-header");
  }
  else{
    header.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const accordionTitles = document.querySelectorAll('.drink-title');

  accordionTitles.forEach(title => {
    title.addEventListener('click', function() {
      const item = this.parentElement;
      const content = this.nextElementSibling;

      // Close all other accordion items
      const allItems = document.querySelectorAll('.drink-item');
      allItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('opened');
          const otherContent = otherItem.querySelector('.drink-content');
          otherContent.style.maxHeight = null;
          const otherArrow = otherItem.querySelector('.arrow');
          otherArrow.classList.remove('opened');
        }
      });

      // Toggle accordion
      item.classList.toggle('opened');

      // Toggle arrow direction
      const arrow = this.querySelector('.arrow');
      arrow.classList.toggle('opened');

      // Toggle content visibility
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

function avocado(){
  var avcurrent = document.getElementById('avocado').getAttribute('style');
      if (avcurrent != 'display:none')
          document.getElementById('avocado').setAttribute('style', 'display:none');
      else
          document.getElementById('avocado').setAttribute('style', 'display:block');
  };

  function avocadoclose(){
    document.getElementById('avocado').setAttribute('style', 'display:none');
    };
    
  function bananaclose(){
      document.getElementById('banana').setAttribute('style', 'display:none');
      };
      
  function pizzaclose(){
    document.getElementById('pizza').setAttribute('style', 'display:none');
    };      

  function banana(){
    var bancurrent = document.getElementById('banana').getAttribute('style');
        if (bancurrent != 'display:none')
            document.getElementById('banana').setAttribute('style', 'display:none');
        else
            document.getElementById('banana').setAttribute('style', 'display:block');
    };

    function pizza(){
      var currentpizza = document.getElementById('pizza').getAttribute('style');
          if (currentpizza != 'display:none')
              document.getElementById('pizza').setAttribute('style', 'display:none');
          else
              document.getElementById('pizza').setAttribute('style', 'display:block');
      };


      const toggleButton = document.getElementsByClassName('toggle-button')[0]
      const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      
      toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
      })

      function rajma(){
        var rajmacurrent = document.getElementById('rajma').getAttribute('style');
            if (rajmacurrent != 'display:none')
                document.getElementById('rajma').setAttribute('style', 'display:none');
            else
                document.getElementById('rajma').setAttribute('style', 'display:block');
        };
      
        function rajmaclose(){
          document.getElementById('rajma').setAttribute('style', 'display:none');
          };


          $( "#menthu_button" ).click(function() {
            var rajma = document.getElementById('rajma'); 
            var scrollTo = document.getElementById('menthu');
            rajma.scrollTop = scrollTo.offsetTop;
        });
        

      function menthu(){
        var menthucurrent = document.getElementById('menthu').getAttribute('style');
            if (menthucurrent != 'display:none')
                document.getElementById('menthu').setAttribute('style', 'display:none');
            else
                document.getElementById('menthu').setAttribute('style', 'display:block');
        };
      
        function menthuclose(){
          document.getElementById('menthu').setAttribute('style', 'display:none');
          };  
          
       function paneer(){
        var paneercurrent = document.getElementById('paneer').getAttribute('style');
            if (paneercurrent != 'display:none')
                document.getElementById('paneer').setAttribute('style', 'display:none');
            else
                document.getElementById('paneer').setAttribute('style', 'display:block');
        };
      
        function paneerclose(){
          document.getElementById('paneer').setAttribute('style', 'display:none');
          };    
          
          function pulihora(){
            var pulihoracurrent = document.getElementById('pulihora').getAttribute('style');
                if (pulihoracurrent != 'display:none')
                    document.getElementById('pulihora').setAttribute('style', 'display:none');
                else
                    document.getElementById('pulihora').setAttribute('style', 'display:block');
            };
          
            function pulihoraclose(){
              document.getElementById('pulihora').setAttribute('style', 'display:none');
              };    
              
              
          function dosa(){
            var dosacurrent = document.getElementById('dosa').getAttribute('style');
                if (dosacurrent != 'display:none')
                    document.getElementById('dosa').setAttribute('style', 'display:none');
                else
                    document.getElementById('dosa').setAttribute('style', 'display:block');
            };
          
            function dosaclose(){
              document.getElementById('dosa').setAttribute('style', 'display:none');
              };  
              
              function idli(){
                var idlicurrent = document.getElementById('idli').getAttribute('style');
                    if (idlicurrent != 'display:none')
                        document.getElementById('idli').setAttribute('style', 'display:none');
                    else
                        document.getElementById('idli').setAttribute('style', 'display:block');
                };
              
                function idliclose(){
                  document.getElementById('idli').setAttribute('style', 'display:none');
                  }; 

              function vada(){
                var vadacurrent = document.getElementById('vada').getAttribute('style');
                    if (vadacurrent != 'display:none')
                        document.getElementById('vada').setAttribute('style', 'display:none');
                    else
                        document.getElementById('vada').setAttribute('style', 'display:block');
                };
              
                function vadaclose(){
                  document.getElementById('vada').setAttribute('style', 'display:none');
                  };
                  
                  function poori(){
                    var pooricurrent = document.getElementById('poori').getAttribute('style');
                        if (pooricurrent != 'display:none')
                            document.getElementById('poori').setAttribute('style', 'display:none');
                        else
                            document.getElementById('poori').setAttribute('style', 'display:block');
                    };
                  
                    function pooriclose(){
                      document.getElementById('poori').setAttribute('style', 'display:none');
                      }; 
                      
                  function ponganalu(){
                    var ponganalucurrent = document.getElementById('ponganalu').getAttribute('style');
                        if (ponganalucurrent != 'display:none')
                            document.getElementById('ponganalu').setAttribute('style', 'display:none');
                        else
                            document.getElementById('ponganalu').setAttribute('style', 'display:block');
                    };
                  
                    function ponganaluclose(){
                      document.getElementById('ponganalu').setAttribute('style', 'display:none');
                      };        
                      
                  function salad(){
                    var saladcurrent = document.getElementById('fruit-salad').getAttribute('style');
                        if (saladcurrent != 'display:none')
                            document.getElementById('fruit-salad').setAttribute('style', 'display:none');
                        else
                            document.getElementById('fruit-salad').setAttribute('style', 'display:block');
                    };
                  
                    function saladclose(){
                      document.getElementById('fruit-salad').setAttribute('style', 'display:none');
                      }; 
                      
                      function wrap(){
                        var wrapcurrent = document.getElementById('egg-wrap').getAttribute('style');
                            if (wrapcurrent != 'display:none')
                                document.getElementById('egg-wrap').setAttribute('style', 'display:none');
                            else
                                document.getElementById('egg-wrap').setAttribute('style', 'display:block');
                        };
                      
                        function wrapclose(){
                          document.getElementById('egg-wrap').setAttribute('style', 'display:none');
                          };
                          
                      function muffin(){
                        var muffincurrent = document.getElementById('egg-muffin').getAttribute('style');
                            if (muffincurrent != 'display:none')
                                document.getElementById('egg-muffin').setAttribute('style', 'display:none');
                            else
                                document.getElementById('egg-muffin').setAttribute('style', 'display:block');
                        };
                      
                        function muffinclose(){
                          document.getElementById('egg-muffin').setAttribute('style', 'display:none');
                          };                            