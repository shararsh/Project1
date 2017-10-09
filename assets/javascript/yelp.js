  $(document).ready(function() {


        var results;
        var feeling = $("#sel1 :selected").text();
        console.log(feeling);
        var budget = $("#sel2 :selected").text();
        console.log(budget);
        var location = $("#sel3 :selected").text();
        console.log(location);
        var sidebar = $("#mySidebar");
        var div;

        yelpBudget();

        function captain() {
            var rapid = new RapidAPI("default-application_59d047ace4b0b0cacf7cd159", "a0a1fa0b-9987-4b27-b004-aab10d3f2c95");

            rapid.call('YelpAPI', 'getBusinesses', {
                'accessToken': 'XagdwX1Mk3Zi8cr73ZyrJHSRy7FIC_6m5xNsYl1DpKzyhT4VlmIHJFa_-lmcWIqnqQmj0Ia-x9lW1GyLShgX3j_DlufYq4oNAnrl7oHMUPlKwEmemBmKRkMghvTSWXYx',
                'term': feeling + " food",
                'location': location,
                'price': budget,
                'limit': 50,

            }).on('success', function(payload) {
                console.log(payload);
                results = payload.businesses;
                for (var j = 0; j < results.length; j++) {
                    div = $("<div>");
                    div.attr("id", "resturants");
                    var image = $("<img>").attr("src", results[j].image_url).attr("height", "200").attr("width", "200");
                    var p = $("<p>").text(results[j].name);
                    div.append(image);
                    div.append(p);
                    $("#yelp").append(div);
                }

            }).on('error', function(payload) {
                console.log("didn't work")
            });


        }
        function yelpBudget() {
            if (budget === "Under $25") {
                budget = 1;
            } else if (budget === "$25-$50") {
                budget = 2;
            } else if (budget === "$50-$100") {
                budget = 3;
            } else if (budget === "Ballin' Out Tonight") {
                budget = 4;
            }
            console.log(budget);
        }

        $("#sel1").on("change", function() {
            feeling = $("#sel1 :selected").text();
            console.log(feeling + " food");
        });

        $("#sel2").on("change", function() {
            budget = $("#sel2 :selected").text();
            yelpBudget();
            console.log(budget);
        });

        $("#sel3").on("change", function() {
            location = $("#sel3 :selected").text();
            console.log(location);
        });

         $("#submit").on("click", function (){
            console.log("click");
            captain();
            });



    });