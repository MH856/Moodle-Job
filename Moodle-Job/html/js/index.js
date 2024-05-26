  //Calling all function when the website is loaded and ready
  $(document).ready(function () {
    linkHover();
    breadCrumbHover();
    viewHover();
    buttonDirectory();
    buttonHover();
    aboutUsNavHover();
    navAboutUsContentContactHover();
  });

// Components of other function 

  const hoverOnItem = (item) => {
    $(""+item).css("transform", "scale(1.045)").css("transition", "all 0.5s").css("--bs-text-opacity", ".72"); 
  }

  const hoverOffItem = (item) => {
    $(""+item).css("transform", "scale(1)").css("--bs-text-opacity", "1");
  }

  const hoverOnBreadcrumb = (item) => {
    $(""+item).css("transform", "scale(1.075)").css("transition", "all 0.5s").css("text-decoration", "underline").css("--bs-text-opacity", ".72");
  }

  const hoverOffBreadcrumb = (item) => {
    $(""+item).css("--bs-text-opacity", "1").css("text-decoration", "none").css("transform", "scale(1)");
  }

  const hoverOnNavABoutUs = (item) => {
    $(""+item).css("transform", "scale(1.05)").css("transition", "all 0.5s");
  }

  const hoverOffNavAboutUs = (item) => {
    $(""+item).css("transform", "scale(1)").css("text-decoration", "none");
  }

// Link hover for navigation bar events
const linkHover = () => {
    $("#navItem1").hover(
      () => {
        hoverOnItem("#navItem1")
      },
      () => {
        hoverOffItem("#navItem1")
      }
    );

    $("#navItem2").hover(
      () => {
        hoverOnItem("#navItem2")
       
      },
      () => {
        hoverOffItem("#navItem2")
      }
    );

    $("#navItem3").hover(
      () => {
        hoverOnItem("#navItem3")
      },
      () => {
        hoverOffItem("#navItem3")
      }
    );

    $("#navItem4").hover(
      () => {
        hoverOnItem("#navItem4")
      },
      () => {
        hoverOffItem("#navItem4")
      }
    );
  };

// Bredcrumb hover events
const breadCrumbHover = () => {
      $("#breadcrumb-item1").hover(
          () => {
            hoverOnBreadcrumb('#breadcrumb-item1');
          },
          () => {
            hoverOffBreadcrumb("#breadcrumb-item1");
          }
        );

        $("#breadcrumb-item2").hover(
          () => {
            hoverOnBreadcrumb('#breadcrumb-item2');
          },
          () => {
            hoverOffBreadcrumb("#breadcrumb-item2");
          }
        );

        $("#breadcrumb-item3").hover(
          () => {
            hoverOnBreadcrumb('#breadcrumb-item3');
          },
          () => {
            hoverOffBreadcrumb("#breadcrumb-item3");
          }
        );
  }
  
//View List Hover Event
  const viewHover = () => {
      $("#listView").hover(
          () => {
            $("#listView").css("transform", "scale(1.075)");
            $("#listView").css("transition", "all 0.5s");
        
          },
          () => {
            $("#listView").css("transform", "scale(1)");
            $("#listView").css("text-decoration", "none");
        
          }
        );



        $("#gridView").hover(
          () => {
            $("#gridView").css("transform", "scale(1.075)");
            $("#gridView").css("transition", "all 0.5s");
        
          },
          () => {
            $("#gridView").css("transform", "scale(1)");
            $("#gridView").css("text-decoration", "none");
        
          }
        );
  }

//Button directory Hover Event
  const buttonDirectory = () => {

      $('#listView').click(() => {
          window.location.href = "../html/WIL_List.html";
      })

      $('#gridView').click(() => {
          window.location.href = "../html/WIL_Grid.html";
      })

      $('.card-container').click(() => {
          window.location.href = "../html/WIL_OL.html";
      })
  }

//Button Hover Event
  const buttonHover = () => {

      $("#reportButton").hover(
          () => {
            $("#reportButton").css("transform", "scale(1.075)");
            $("#reportButton").css("transition", "all 0.5s");
        
          },
          () => {
            $("#reportButton").css("transform", "scale(1)");
            $("#reportButton").css("text-decoration", "none");
        
          }
        );



        $("#applyButton").hover(
          () => {
            $("#applyButton").css("transform", "scale(1.075)");
            $("#applyButton").css("transition", "all 0.5s");
        
          },
          () => {
            $("#applyButton").css("transform", "scale(1)");
            $("#applyButton").css("text-decoration", "none");
        
          }
        );

  }

//About Us Navigation Bar Hover Event
  const aboutUsNavHover = () => {
      $("#aboutUsNavItem1").hover(
          () => {
            hoverOnNavABoutUs("#aboutUsNavItem1")
        
          },
          () => {
            hoverOffNavAboutUs("#aboutUsNavItem1")                 
          }
        );

        $("#aboutUsNavItem2").hover(
          () => {
            hoverOnNavABoutUs("#aboutUsNavItem2")
        
          },
          () => {
            hoverOffNavAboutUs("#aboutUsNavItem2")                    
          }
        );

        $("#aboutUsNavItem3").hover(
          () => {
            hoverOnNavABoutUs("#aboutUsNavItem3")
        
          },
          () => {
            hoverOffNavAboutUs("#aboutUsNavItem3")                    
          }
        );

        $("#aboutUsNavItem4").hover(
          () => {
            hoverOnNavABoutUs("#aboutUsNavItem4")
        
          },
          () => {
            hoverOffNavAboutUs("#aboutUsNavItem4")                    
          }
        );
  }

  //
  const navAboutUsContentContactHover = () => {
      
      $("#navAboutUsContentContact").hover(
          () => {
            $("#navAboutUsContentContact").css("transform", "scale(1.05)");
            $("#navAboutUsContentContact").css("transition", "all 0.5s");
        
          },
          () => {
            $("#navAboutUsContentContact").css("transform", "scale(1)");

        
          }
        );
      
  }