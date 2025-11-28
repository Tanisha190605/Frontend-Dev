$(document).ready(function() {

    $("#search-box").on("keyup", function () {
        let query = $(this).val().trim();

        $("#loading").show();    

        $.ajax({
            url: "/products",
            type: "GET",
            data: { q: query },

            success: function (response) {
                $("#loading").hide();

                $("#results").empty();

                if (response.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                response.forEach(product => {
                    $("#results").append(`
                        <div class="product">
                            <img src="${product.image}" alt="">
                            <div>
                                <h4>${product.name}</h4>
                                <p>₹${product.price}</p>
                            </div>
                        </div>
                    `);
                });
            },

            error: function () {
                $("#loading").hide();
                $("#results").html("<p>Error loading products</p>");
            }
        });
    });

});
