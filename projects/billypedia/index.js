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
        .on('load', click => {
          pacifier.stop()
          $(click.currentTarget).fadeIn(200)
        })
      })

      const topRated = data.discography.topRated;
      const topRatedListItems = _.map(topRated, function(recording) {
            return $('<li>').addClass('top-rated')
                .append($('<div>').addClass('#list-top-rated').text(recording.title));
        });
        $('#list-top-rated').append(topRatedListItems);

        const recordings = data.discography.recordings;
        const recordingsListItems = _.map(recordings, recording => {
          return $('<li>').addClass('recording')
          // .append($('<div>').attr('id', 'image-container-recordings').addClass('image-container').append("<img id='recording-image' src='recording.art'>"))
          .append($('<div>').addClass('title').text(recording.title))
          .append($('<div>').addClass('artist').text(recording.artist))
          .append($('<div>').addClass('release').text(recording.release))
          .append($('<div>').addClass('year').text(recording.year))
        })
        const $sectionRecordings = $('<section>').attr('id', 'section-recordings').addClass('recordings');
        const $headerRecordings = $('<header>').addClass('header-recordings').text('General Recordings');
        const $listRecordings = $('<ul>').attr('id', 'list-recordings').append(recordingsListItems);
        const $recordingImages = $('<div>').attr('id', 'recording-image').addClass('image').append($('<div>').attr('id', 'image-container-recordings').addClass('image-container').append("<img id='recording-image' src='images/album/eastern-rebellion.jpg'>"));

        $sectionRecordings
            .append($headerRecordings)
            .append($recordingImages)
            .append($listRecordings)
            .appendTo('#sidebar');

        // $('.recording').on('click', {id: 'image-container-recording'}, swapImage);


console.log(data.discography)

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
