<?php

if (! defined('ABSPATH')) {
  // Exit if accessed directly.
  exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> itemscope itemtype="https://schema.org/WebPage">
  <div class="preloader">
    <div class="d-flex align-items-center justify-content-center position-fixed w-100 h-100">
      <div class="loader"></div>
    </div>
  </div>
  <div class="overlay"></div>
  <?php
  // Hook to include default WordPress hook after body tag open.
  if (function_exists('wp_body_open')) {
    wp_body_open();
  }

  // Hook to include additional content after body tag open.
  do_action('qi_action_after_body_tag_open');
  ?>
  <header>
    <nav class="navbar navbar-expand-lg navbar-glass shadow rounded-pill mx-auto" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="520">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center text-warning fw-bold" href="<?php echo home_url(); ?>">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt="Logo">
        </a>
        <div class="collapse navbar-collapse justify-content-end">

          <?php
          wp_nav_menu(array(
            'theme_location' => 'main-navigation',
            'menu_class' => 'navbar-nav mb-2 mb-lg-0',
            'container' => false
          ));
          ?>



        </div>
        <a class="btn btn-consult rounded-pill px-4 py-2 mt-0" href="contact-us">
          <span>BOOK A CONSULTATION <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2001_1234)">
                <path d="M15.8414 6.61535L10.387 1.16088C10.191 0.932089 9.84669 0.905418 9.6179 1.1014C9.3891 1.29733 9.36243 1.64167 9.55841 1.87046C9.57669 1.89179 9.59657 1.91171 9.6179 1.92995L14.1396 6.45715H0.545428C0.244215 6.45715 0 6.70136 0 7.00262C0 7.30388 0.244215 7.54805 0.545428 7.54805H14.1396L9.6179 12.0698C9.3891 12.2657 9.36243 12.61 9.55841 12.8388C9.75439 13.0676 10.0987 13.0943 10.3275 12.8983C10.3488 12.88 10.3687 12.8602 10.387 12.8388L15.8414 7.38437C16.0529 7.1717 16.0529 6.82811 15.8414 6.61535Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2001_1234">
                  <rect width="16" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg></span></a>

      </div>
    </nav>
  </header>