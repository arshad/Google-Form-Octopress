(function ($) {
  $(document).ready(function() {
    //clean up empty tags
    $('.google-form-wrapper p, .google-form-wrapper br')
      .filter(function() {
        return $(this).html() == '';
      })
      .remove();

    //add required class to required elements
    $('.google-form-wrapper form')
      .find('.ss-item-required input, .ss-item-required textarea')
      .filter(function() {
        return jQuery(this).attr('name').match(/entry\.\d\.single/);
      })
      .addClass('required');

    //validate the form
    $('.google-form-wrapper form').validate({
      submitHandler: function(form) {
        $(form)
          .ajaxSubmit({
            success: function(data) {
              if (data) {
                $(form)
                .hide(200, function() {
                  $(this)
                    .prev('.success-msg')
                    .fadeIn('slow')
                })
              }
            },
            error : function (data) {
              console.error(data);
            }
          })
      }
    });
  });
})(jQuery);