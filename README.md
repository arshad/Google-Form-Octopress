Contact form for Octopress
=====================

A Liquid tag to embed Google Forms in Octopress.

## Installation

The plugin requires the Nokigiri gem, so let's install that first.

* Edit your Gemfile and add **gem 'nokogiri'** to it and run: `bundle install`.

Octopress does not have a plugin manager yet, so we'll have to do this manually.
Download the files in the repo, and place them as follows:

* **google_form.rb** goes in the *plugins* directory
* **google_form.js** goes in *source/javascripts*

Next, add the following code to *source/_includes/custom/head.html*:

    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript">
        // Avoid conflict with ender.js.
        jQuery.noConflict();
    </script>
    <!-- jQuery Form Plugin -->
    <script src="http://malsup.github.com/jquery.form.js"></script>
    <!-- jQuery Form Validation Plugin -->
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js"></script> 
    <script src="{{ root_url }}/javascripts/google_form.js"></script>
      
Finally, add some custom CSS to make our forms look shiny. This goes in *sass/custom/_styles.scss*.

    .google-form-wrapper {
      .error {
        color: red;
        font-size: 12px;
      }
      .errorbox-good {
        margin-bottom: 20px;
      }
      .success-msg {
        display: none;
      }
      .ss-form-entry {
        label {
          display:block;
        }
        input {
          display: block;
          padding: 5px;
          width: 250px;
          font: inherit;
        }
        textarea {
          width: 450px;
          padding: 5px;
          font: inherit;
        }
      }
      .ss-navigate input {
        width: auto;
        cursor: pointer;
      }
    }
    
## Usage

    {% google_form formkey [message] %}

Example :

    {% google_form dGVfY3MwcklDcjVrZERGYlRoZWdJQnc6MQ Thank you. I'll get back to you shortly %}

