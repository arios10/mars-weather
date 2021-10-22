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