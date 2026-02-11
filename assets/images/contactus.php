   <?php
    /*
Template Name: Contact Us
*/
    get_header();
    ?>

   <!-- Contact Hero Section -->
   <section class="contact-hero">
     <div class="container">
       <div class="contact-hero-content">
         <div class="contact-hero-text">
           <div class="heading_grid">
             <div text-split="" letters-slide-up="" class="heading_grid_h2">
                <h1>Connect With Al Moosa IVF<h1>
                <h2>Start Your Fertility Journey Here</h2>
             </div>
           </div>

           <!-- <button class="cta-button-outline">Book a consultation <img src="assets/images/icons/arrow_img.svg" alt=""></button> -->
          <a class="btn btn-consult2 rounded-pill mt-3" href="#contact-us" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
             <span>BOOK A CONSULTATION <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_2001_1234)">
                   <path d="M15.8414 6.61535L10.387 1.16088C10.191 0.932089 9.84669 0.905418 9.6179 1.1014C9.3891 1.29733 9.36243 1.64167 9.55841 1.87046C9.57669 1.89179 9.59657 1.91171 9.6179 1.92995L14.1396 6.45715H0.545428C0.244215 6.45715 0 6.70136 0 7.00262C0 7.30388 0.244215 7.54805 0.545428 7.54805H14.1396L9.6179 12.0698C9.3891 12.2657 9.36243 12.61 9.55841 12.8388C9.75439 13.0676 10.0987 13.0943 10.3275 12.8983C10.3488 12.88 10.3687 12.8602 10.387 12.8388L15.8414 7.38437C16.0529 7.1717 16.0529 6.82811 15.8414 6.61535Z" fill="white" />
                 </g>
                 <defs>
                   <clipPath id="clip0_2001_1234">
                     <rect width="16" height="14" fill="white" />
                   </clipPath>
                 </defs>
               </svg>
             </span>
          </a>
         </div>
         <div class="contact-hero-image" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
           <img src="<?php echo get_template_directory_uri(); ?>/assets/img/baby.png" alt="">
         </div>
       </div>
     </div>
   </section>

   <section class="contact-info py-5" style="background-color: #fdf7f1;">
     <div class="container">
       <div class="contact-info-content">
         <div class="row text-start">
           <!-- Opening Times -->
           <div class="col-md-4 mb-4">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="540">
              <h5>Opening Times</h5>
              <p><strong>Mon. - Fri.:</strong> <span class="ms-2">10.00am - 6.00pm</span></p>
              <p><strong>Fri.:</strong> <span class="ms-4">9.00am - 1.00pm</span></p>
              <div class="mt-3 d-flex align-items-center gap-2">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/phone.svg" alt="Phone Icon" class="phone-icon">
                <a href="tel:+97142267736">+971 4 2267736</a>
              </div>
            </div>
           </div>
           <!-- Find Us -->
           <div class="col-md-4 mb-4">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="520">
                <h5>Find Us</h5>
                <small>A.L.Moosa.IVF Clinic</small>
                <p>5B St, Jumeirah 1, Dubai, UAE</p>
                <div class="mt-3 d-flex align-items-center gap-2">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/location.svg" alt="Location Icon" class="location-icon">
                  <a href="https://maps.app.goo.gl/ceF3iZ3GhQZj7xCd9" target="_blank">Get Directions</a>
                </div>
              </div>
           </div>
           <!-- Emergency Line -->
           <div class="col-md-4 mb-4">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <h5>Emergency Line</h5>
                <span>In case of a medical emergency,<br> please dial this number immediately:</span>
                <div class="mt-3 d-flex align-items-center gap-2">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/phone.svg" alt="Phone Icon" class="phone-icon">
                  <a href="tel:+971565001089">+971 56 5001089</a>
                </div>
              </div>
           </div>

         </div>
       </div>
     </div>
   </section>


   <!-- Contact Form Section -->
   <section class="form-section" id="contact-us">
     <div class="container">
       <div class="row">
         <div class="col-12">
           <div class="form-content position-relative d-flex align-items-center justify-content-between">
             <div class="form-text">
                <div class="heading_grid">
                  <div text-split="" letters-slide-up="" class="heading_grid_h2 text-center">
                    <h1>Schedule Your Personalized Consultation Today</h1>
                  </div>
                </div>
               
               <?php echo do_shortcode('[custom_contact_form]'); ?>
             </div>

           </div>
         </div>
       </div>
     </div>

   </section>



   <?php get_footer(); ?>


   <script>
  $(document).ready(function () {
    var picker = new Lightpick({
      field: document.getElementById('datePicker'),
      singleDate: true,
      numberOfMonths: 2,
      autoclose: true,
      onSelect: function (date) {
        if (date) {
          document.getElementById('datePicker').value = date.format('DD-MM-YYYY');
          picker.hide();
        }
      }
    });
  });
</script>

   