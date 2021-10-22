var getTemp = function() {
    var apiUrl = "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            console.log(response);                                                    {
            response.json().then(function(data) {
                console.log(data);
            });
        }
    }
        else {
            console.log("NOT working");
        }
    });
};

getTemp();
// VARIABLES
var roverContainer = document.getElementById("rover-container");
var roverImgUrl;

// GET ROVER IMAGE
var getRoverImg = function () {
    var roverApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY";
    // make fetch request
    fetch(roverApi).then(function (response) {
        // if request successful
        if (response.ok) {
            // get data from response
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
                // set image url
                roverImgUrl = data.latest_photos[0].img_src;
                // run display rover function
                console.log(roverImgUrl);
                var roverImg = document.getElementById("rover");
                roverImg.src = roverImgUrl;
                roverContainer.appendChild(roverImg);
            });
        } else {
            alert("Error getting api response");
        };
    });
};

// CALL FUNCTION
getRoverImg();
