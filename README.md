This WordPress plugin adds a custom shortcode to display a styled call-to-action (CTA) box on any page or post in your WordPress website. The shortcode allows you to customize the CTA box with a title, a short message, and a button with a customizable label and URL.

The plugin also includes a click counter that increments each time the button is clicked and stores the count per user using the browser's localStorage. This allows you to track how many clicks your CTA box is getting and adjust your strategy accordingly.

## Installation

* Download the cta-box-shortcode folder from this repository.
* Upload the cta-box-shortcode folder to the wp-content/plugins/ directory of your WordPress installation.
* Activate the plugin from the "Plugins" menu in your WordPress dashboard.

## Usage

To use the CTA box shortcode, simply add [cta_box] to any page or post in your WordPress website. You can also include the following optional attributes to customize the CTA box:

* title: The title of the CTA box. Defaults to "Start Using Divi".
* message: The short message of the CTA box. Defaults to "Discover the power and flexibility of Divi, the ultimate WordPress theme and visual page builder. Create stunning websites with ease and elevate your web design game. Click the button below to get started with Divi today!"
* button_label: The label of the CTA button. Defaults to "Try it for free".
* button_url: The URL that the CTA button links to. Defaults to "https://elegantthemes.com".

Here's an example of how to use the shortcode with all the available attributes:

[cta_box title="Start Using Divi" message="Discover the power and flexibility of Divi, the ultimate WordPress theme and visual page builder. Create stunning websites with ease and elevate your web design game. Click the button below to get started with Divi today!" button_label="Try it for free" button_url="https://elegantthemes.com"]ates delivered straight to your inbox." button_label="Subscribe Now" button_url="https://example.com/newsletter"]

## Customization

You can customize the styles of the CTA box by adding CSS code to your theme's stylesheet or to the "Additional CSS" section in the WordPress Customizer. The CTA box is wrapped in a <div> element with the class "cta-box", and the title, message, and button each have their own class as well. You can target these elements with CSS to style them as desired.