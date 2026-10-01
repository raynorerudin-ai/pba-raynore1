 /*
         * ================================
         * PRODUCT POPUP
         * ================================
         */

        $(document).on("pagecreate", "#products", function () {

            $(".product-item").on("click", function (e) {

                e.preventDefault();

                var product = $(this);

                // Get product information
                var name = product.find(".product-name").text();
                var description = product.find(".product-description").text();
                var image = product.find("img").attr("src");

                // Create unique popup ID
                var popupId = "product-popup";

                // Remove previous popup
                $("#" + popupId).remove();

                // Create popup
                var popupHTML =

                    '<div data-role="popup" ' +
                    'id="' + popupId + '" ' +
                    'class="product-popup" ' +
                    'data-overlay-theme="b" ' +
                    'data-dismissible="true">' +

                        '<div class="popup-header">' +
                            '<h2>' + name + '</h2>' +
                        '</div>' +

                        '<div class="popup-content">' +

                            '<img src="' + image + '" alt="' + name + '">' +

                            '<p>' + description + '</p>' +

                            '<a href="#" ' +
                               'data-rel="back" ' +
                               'class="ui-btn ui-corner-all ui-btn-b">' +
                               'Close' +
                            '</a>' +

                        '</div>' +

                    '</div>';

                // Add popup to current page
                $(popupHTML).appendTo($.mobile.activePage);

                // Enhance popup
                $("#" + popupId).popup();

                // Open popup
                $("#" + popupId).popup("open");

            });

        });


        /*
         * ================================
         * CONTACT FORM
         * ================================
         */

        $(document).on("submit", "#contactForm", function (e) {

            e.preventDefault();

            var name = $("#name").val();

            if (name.trim() === "") {

                alert("Please enter your name.");

                return;

            }

            alert("Thank you, " + name + "! Your message has been received.");

            // Clear form
            $("#contactForm")[0].reset();

        });
