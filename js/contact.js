$(function() {
    var contactForm = $('#contact-form');
    
    contactForm.submit(function(e) {
        
        e.preventDefault();
        
        $.ajax({
            url: "//formspree.io/drventisette@gmail.com", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(data){
              // Success message
              $('#alert .success').show();
              //clear all fields
           contactForm.trigger("reset");
            },
            error: function(){
              // Fail message
              $('#alert .warning').show();
            }
          });
        });
    });