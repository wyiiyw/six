$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https//api.airtable.com/v0/appwL9Dtl54LTLPOH/Concert%20Tickets?api_key=YOUR_API_KEY"
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.artist_name);
                       items.push(value.fields.artist_gross);
                       items.push(value.fields.artist_artist_tourname);
                       items.push(value.fields.artist_artist_attendance);
                       items.push(value.fields.artist_artist_averageattdance);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "artist_name",
                       defaultContent:""},
                     { title: "artist_gross",
                         defaultContent:"" },
                     { title: "artist_artist_tourname",
                       defaultContent:"" },
                     { title: "artist_artist_attendance",
                       defaultContent:""},
                     { title: "artist_artist_averageattdance",
                       defaultContent:""},
                   
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
