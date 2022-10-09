function passFileURL(param, e){
    console.log(param.value)
    //create a storage reference
    var storage = firebase.storage().ref('SBL Projects/Files/Images/'+param.value);
    // upload file
        var upload = storage.put(e);
        // Progress
        upload.on('state_changed', function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            document.getElementById("progress").value = percentage;
        },
        
        function error() {
            M.toast({html: "Error uploading file"});
          },
          
          function complete() {
            M.toast({html: 'Success!'})
          })
}

// https://www.naishare.com/blog/how-to-upload-files-to-firebase-cloud-storage-using-javascript#:~:text=%20how%20to%20upload%20files%20to%20firebase%20cloud,add%20Javascript%20code%20that%20aids%20in...%20More%20