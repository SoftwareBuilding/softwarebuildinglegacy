function readURL(input){
  


    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#profile')
            .attr('src', e.target.result)
            // .width(150)
            // .height(200);
           passFileURL(input, e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
      }
}

// var input = 'C:\fakepath\pexels-sora-shimazaki-5926393.jpg'

// var filename = input.replace( /^.*?([^\/]+)\..+?$/, '$1' );
// console.log(filename)
