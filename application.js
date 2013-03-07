var nextImages = ""; //empty global variable that onReady and pagination functions can access

$(document).ready(function() {
//run function when window opens, loads the first 20 images.

    //Start with the most recent photo
    var currentindex = 0;

    //Load 20 photos at a time.
    var maxindex = 20;

    //the hashtag you wish to load from on Instagram
    var tagname = 'holaindio';

    while (currentindex < maxindex)
    {
        //grab JSON data from Instagram API
        $.getJSON("http://198.101.229.108/get_screen_photos?printer_id=5&callback=?", function(instagramJSON){

        //console.log(instagramJSON);
        //console.log(instgramJSON.object[0]);

        //Loop through each JSON entry
        $(instagramJSON.photos).each(function(index, temp){
                //console.log(temp.url);

                //Add the image HTML to the Image div.
                $('#images').append('<img class="instagram" src="'+temp.url+'"></img>');
                //$('.tagname').text(tagname);

            });

    }
                //load more images via pagination function, pass in the pagination URL
                nextImages = String(instagramJSON.pagination.next_url);
                //console.log(instagramJSON.pagination.next_url);
                //console.log(nextImages);
        });





});




function pagination(url) {
//takes in the pagination URL from the JSON response from the Instagram API

    //increment the indicies to load next twenty photos.
    currentindex += 20;
    maxindex += 40

    //Load the new JSON
    $.getJSON(temp, function(instagramJSON){
        //console.log(instagramJSON);
        //console.log(instgramJSON.object[0]);

        //Loop through the JSON data
        $(instagramJSON.data).each(function(index, temp){
                //console.log(temp);
                //console.log(temp.images.standard_resolution.url);
                $('#images').append('<img class="instagram" src="'+temp.url+'"></img>');

            });

            //reset the pagination script
            nextImages = String(instagramJSON.pagination.next_url);

    });
}
