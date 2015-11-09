$(function() {
    var contactForm = $('#contact-form');
    
    contactForm.on('valid.fndtn.abide', function(e) {
        
        $.ajax({
            url: "//formspree.io/nicarali@gmail.com", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(data){
              // Success message
                $('#alert .success').show();
              //clear all fields

                $("#contact-form :input, #submit").prop('disabled', true);
                $("#submit").hide();
            
                $('html body').animate(
                    {
                    scrollTop: $('#alert').offset().top
                    },
                    500
                );
            },
            error: function(){
              // Fail message
              $('#alert .warning').show();
                $('html body').animate(
                    {
                    scrollTop: $('#alert').offset().top
                    },
                    500
                );
            }
          });          
        });
    });