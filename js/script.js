(function ($, Drupal) {
    Drupal.behaviors.myThemeBehavior = {
      attach: function (context, settings) {
        console.log("✅ MyTheme JS is working!");
  
        // Example: Add a click event to any element with class 'test-button'
        $(".test-button", context).once("myThemeBehavior").click(function () {
          alert("Button clicked! JS is working!");
        });
      }
    };
  })(jQuery, Drupal);
  