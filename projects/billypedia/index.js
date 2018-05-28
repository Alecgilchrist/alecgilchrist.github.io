/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {

      $('#section-bio').css('color', 'rgba(51, 12, 24, 0.78)');
      $('body').css("background-color", 'rgba(129, 126, 149, 0.76)');
      $('header').css("background-color", 'rgba(172, 146, 186, 0.78)');
      $('nav').css("background-color", 'rgba(24, 24, 24, 0.36)')
      $('#section-quotes').css('color', 'rgba(51, 12, 24, 0.78)')
      $('#section-praise').css('color', 'rgba(51, 12, 24, 0.78)')
      $('#image-billy').css('border-radius', '20px')


      const headshots = data.images.billy;
      const $headshotSwap = $('#image-billy');
      $headshotSwap.on('click', click => {
        let i = $headshotSwap.attr('i');
        const pacifier = opspark.makePacifier($('#image-container-billy')[0]);
        $headshotSwap.attr('src', headshots[++i] || headshots[i = 0])
        .attr('i', i)
        .on('load', event => {
          pacifier.stop()
          $(event.currentTarget).fadeIn(200)
        })
      })

      const topRated = data.discography.topRated;
      const $imageContainerTopRated = $('<div>').attr('id', 'image-container-top-rated').addClass('image-container');
      $imageContainerTopRated.append(findImage(_.find(topRated, {'title': 'Voice in the Night'}).art));
      $('#header-top-rated').after($imageContainerTopRated);

      const topRatedListItems = _.map(topRated, function(recording) {
            return $('<li>').addClass('top-rated')
                .attr('art', recording.art)
                .append($('<div>').addClass('#list-top-rated').text(recording.title));
        });
        $('#list-top-rated').append(topRatedListItems);
        $('.top-rated').on('click', {id: 'image-container-top-rated'}, swapImage);


        const recordings = data.discography.recordings;
        const recordingsListItems = _.map(recordings, recording => {
          return $('<li>').addClass('recording')
          .attr('art', recording.art)
          // .append($('<div>').attr('id', 'image-container-recordings').addClass('image-container').append("<img id='recording-image' src='recording.art'>"))
          .append($('<div>').addClass('title').text(recording.title))
          .append($('<div>').addClass('artist').text(recording.artist))
          .append($('<div>').addClass('release').text(recording.release))
          .append($('<div>').addClass('year').text(recording.year))
        })
        const $sectionRecordings = $('<section>').attr('id', 'section-recordings').addClass('recordings');
        const $headerRecordings = $('<header>').addClass('header-recordings').text('General Recordings');
        const $listRecordings = $('<ul>').attr('id', 'list-recordings').append(recordingsListItems);
        const $recordingImages = $('<div>').attr('id', 'recording-image').addClass('image')
        .append($('<div>').attr('id', 'image-container-recordings')
        .addClass('image-container')
        .append("<img id='recording-image' src='images/album/eastern-rebellion.jpg'>"));

        $sectionRecordings
            .append($headerRecordings)
            .append($recordingImages)
            .append($listRecordings)
            .appendTo('#sidebar');

        $('.recording').on('click', {id: 'image-container-recordings'}, swapImage);

        const rider = data.rider
        const riderItems = _.map(rider, item => {
          return item.type
        })
        const riderDesc = _.map(rider, item => {
          return item.desc
        })
console.log(riderItems, riderDesc)
console.log(data.rider)
var createTable = list => {
    var createRow = function(item){
        var $row = $("<tr>");
        var $itemType = $("<td>").text(item.type);
        var $itemDesc = $("<td>").text(item.desc);
        $row.append($itemType);
        $row.append($itemDesc);
        return $row;
    }
    var $table = $("<table>");
    var $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
};
        $(createTable(rider).appendTo('#sidebar'))
// let people = [{nameFirst: "John", nameLast: "Doe"}, {nameFirst: "Dick", nameLast: "Jones"}]
// createTable(people).appendTo("body");

            // <div id="image-container-recording" class="image-container">
            //     <img id="recording-image" src="images/album/eastern-rebellion.jpg" class="image">
            // </div>

        // YOUR CODE BELOW HERE //

        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        //
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });


        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
function swapImage(event) {
    const $imageContainer = $(`#${event.data.id}`).empty();
    const pacifier = opspark.makePacifier($imageContainer[0]);
    const path = $(event.currentTarget).attr('art');
    $imageContainer.append(findImage(path, pacifier));
}

function findImage(path, pacifier) {
    const $image = $('<img>')
        .attr('id', 'recording-image')
        .attr('src', path)
        .addClass('image')
        .on('load', function(event) {
            if(pacifier) pacifier.stop();
            $image.fadeIn(200)
        });
    return $image;
}
