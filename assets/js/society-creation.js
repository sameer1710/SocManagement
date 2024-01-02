// Password Show / Hide
$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


// Toggle Button for Society Creation Form
function myFunction() {
    var x = document.getElementById("socCreation");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction1() {
    // event.preventDefault();
    var x = document.getElementById("bankDetails");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction2() {

    var x = document.getElementById("otherDocuments");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
    // e.preventDefault();

}


$("#FileInput").on('change', function (e) {
    // e.preventDefault();
    var labelVal = $(".title").text();
    var oldfileName = $(this).val();
    fileName = e.target.value.split('\\').pop();

    if (oldfileName == fileName) { return false; }
    var extension = fileName.split('.').pop();

    if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
        $(".filelabel i").removeClass().addClass('fa fa-file-image-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#208440' });
        $(".filelabel").css({ 'border': ' 2px solid #208440' });
    }
    else if (extension == 'pdf') {
        $(".filelabel i").removeClass().addClass('fa fa-file-pdf-o');
        $(".filelabel i, .filelabel .title").css({ 'color': 'red' });
        $(".filelabel").css({ 'border': ' 2px solid red' });

    }
    else if (extension == 'doc' || extension == 'docx') {
        $(".filelabel i").removeClass().addClass('fa fa-file-word-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#2388df' });
        $(".filelabel").css({ 'border': ' 2px solid #2388df' });
    }
    else {
        $(".filelabel i").removeClass().addClass('fa fa-file-o');
        $(".filelabel i, .filelabel .title").css({ 'color': 'black' });
        $(".filelabel").css({ 'border': ' 2px solid black' });
    }

    if (fileName) {
        if (fileName.length > 10) {
            $(".filelabel .title").text(fileName.slice(0, 4) + '...' + extension);
        }
        else {
            $(".filelabel .title").text(fileName);
        }
    }
    else {
        $(".filelabel .title").text(labelVal);
    }
});


// Occupancy Certificate

$("#FileInput1").on('change', function (e) {
    var labelVal = $(".title").text();
    var oldfileName = $(this).val();
    fileName = e.target.value.split('\\').pop();

    if (oldfileName == fileName) { return false; }
    var extension = fileName.split('.').pop();

    if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
        $(".filelabel1 i").removeClass().addClass('fa fa-file-image-o');
        $(".filelabel1 i, .filelabel1 .title").css({ 'color': '#208440' });
        $(".filelabel1").css({ 'border': ' 2px solid #208440' });
    }
    else if (extension == 'pdf') {
        $(".filelabel1 i").removeClass().addClass('fa fa-file-pdf-o');
        $(".filelabel1 i, .filelabel1 .title").css({ 'color': 'red' });
        $(".filelabel1").css({ 'border': ' 2px solid red' });

    }
    else if (extension == 'doc' || extension == 'docx') {
        $(".filelabel1 i").removeClass().addClass('fa fa-file-word-o');
        $(".filelabel1 i, .filelabel1 .title").css({ 'color': '#2388df' });
        $(".filelabel1").css({ 'border': ' 2px solid #2388df' });
    }
    else {
        $(".filelabel1 i").removeClass().addClass('fa fa-file-o');
        $(".filelabel1 i, .filelabel1 .title").css({ 'color': 'black' });
        $(".filelabel1").css({ 'border': ' 2px solid black' });
    }

    if (fileName) {
        if (fileName.length > 10) {
            $(".filelabel1 .title").text(fileName.slice(0, 4) + '...' + extension);
        }
        else {
            $(".filelabel .title").text(fileName);
        }
    }
    else {
        $(".filelabel .title").text(labelVal);
    }
});


// Deed of Conveyance

$("#FileInput2").on('change', function (e) {
    var labelVal = $(".title").text();
    var oldfileName = $(this).val();
    fileName = e.target.value.split('\\').pop();

    if (oldfileName == fileName) { return false; }
    var extension = fileName.split('.').pop();

    if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
        $(".filelabel2 i").removeClass().addClass('fa fa-file-image-o');
        $(".filelabel2 i, .filelabel2 .title").css({ 'color': '#208440' });
        $(".filelabel2").css({ 'border': ' 2px solid #208440' });
    }
    else if (extension == 'pdf') {
        $(".filelabel2 i").removeClass().addClass('fa fa-file-pdf-o');
        $(".filelabel2 i, .filelabel2 .title").css({ 'color': 'red' });
        $(".filelabel2").css({ 'border': ' 2px solid red' });

    }
    else if (extension == 'doc' || extension == 'docx') {
        $(".filelabel2 i").removeClass().addClass('fa fa-file-word-o');
        $(".filelabel2 i, .filelabel2 .title").css({ 'color': '#2388df' });
        $(".filelabel2").css({ 'border': ' 2px solid #2388df' });
    }
    else {
        $(".filelabel2 i").removeClass().addClass('fa fa-file-o');
        $(".filelabel2 i, .filelabel2 .title").css({ 'color': 'black' });
        $(".filelabel2").css({ 'border': ' 2px solid black' });
    }

    if (fileName) {
        if (fileName.length > 10) {
            $(".filelabel2 .title").text(fileName.slice(0, 4) + '...' + extension);
        }
        else {
            $(".filelabel2 .title").text(fileName);
        }
    }
    else {
        $(".filelabel2 .title").text(labelVal);
    }
});


// Society Bye Laws

$("#FileInput3").on('change', function (e) {
    var labelVal = $(".title").text();
    var oldfileName = $(this).val();
    fileName = e.target.value.split('\\').pop();

    if (oldfileName == fileName) { return false; }
    var extension = fileName.split('.').pop();

    if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
        $(".filelabel3 i").removeClass().addClass('fa fa-file-image-o');
        $(".filelabel3 i, .filelabel3 .title").css({ 'color': '#208440' });
        $(".filelabel3").css({ 'border': ' 2px solid #208440' });
    }
    else if (extension == 'pdf') {
        $(".filelabel3 i").removeClass().addClass('fa fa-file-pdf-o');
        $(".filelabel3 i, .filelabel3 .title").css({ 'color': 'red' });
        $(".filelabel3").css({ 'border': ' 2px solid red' });

    }
    else if (extension == 'doc' || extension == 'docx') {
        $(".filelabel3 i").removeClass().addClass('fa fa-file-word-o');
        $(".filelabel3 i, .filelabel3 .title").css({ 'color': '#2388df' });
        $(".filelabel3").css({ 'border': ' 2px solid #2388df' });
    }
    else {
        $(".filelabel3 i").removeClass().addClass('fa fa-file-o');
        $(".filelabel3 i, .filelabel3 .title").css({ 'color': 'black' });
        $(".filelabel3").css({ 'border': ' 2px solid black' });
    }

    if (fileName) {
        if (fileName.length > 10) {
            $(".filelabel3 .title").text(fileName.slice(0, 4) + '...' + extension);
        }
        else {
            $(".filelabel3 .title").text(fileName);
        }
    }
    else {
        $(".filelabel3 .title").text(labelVal);
    }
});


// Other Documents

$("#FileInput4").on('change', function (e) {
    var labelVal = $(".title").text();
    var oldfileName = $(this).val();
    fileName = e.target.value.split('\\').pop();

    if (oldfileName == fileName) { return false; }
    var extension = fileName.split('.').pop();

    if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
        $(".filelabel4 i").removeClass().addClass('fa fa-file-image-o');
        $(".filelabel4 i, .filelabel4 .title").css({ 'color': '#208440' });
        $(".filelabel4").css({ 'border': ' 2px solid #208440' });
    }
    else if (extension == 'pdf') {
        $(".filelabel4 i").removeClass().addClass('fa fa-file-pdf-o');
        $(".filelabel4 i, .filelabel4 .title").css({ 'color': 'red' });
        $(".filelabel4").css({ 'border': ' 2px solid red' });

    }
    else if (extension == 'doc' || extension == 'docx') {
        $(".filelabel4 i").removeClass().addClass('fa fa-file-word-o');
        $(".filelabel4 i, .filelabel4 .title").css({ 'color': '#2388df' });
        $(".filelabel4").css({ 'border': ' 2px solid #2388df' });
    }
    else {
        $(".filelabel4 i").removeClass().addClass('fa fa-file-o');
        $(".filelabel4 i, .filelabel4 .title").css({ 'color': 'black' });
        $(".filelabel4").css({ 'border': ' 2px solid black' });
    }

    if (fileName) {
        if (fileName.length > 10) {
            $(".filelabel4 .title").text(fileName.slice(0, 4) + '...' + extension);
        }
        else {
            $(".filelabel4 .title").text(fileName);
        }
    }
    else {
        $(".filelabel4 .title").text(labelVal);
    }
});


// preview file for Registration Number
function PreviewImage() {
    pdffile = document.getElementById("uploadPDF").files[0];
    pdffile_url = URL.createObjectURL(pdffile);
    $('#viewer').attr('src', pdffile_url);
    window.open(pdffile_url);
}

// preview file for PAN Number
function PreviewImage1() {
    pdffile = document.getElementById("uploadPDF1").files[0];
    pdffile_url1 = URL.createObjectURL(pdffile);
    $('#viewer').attr('src', pdffile_url1);
    window.open(pdffile_url1);
}

// preview file for GST Number
function PreviewImage2() {
    pdffile = document.getElementById("uploadPDF2").files[0];
    pdffile_url2 = URL.createObjectURL(pdffile);
    $('#viewer').attr('src', pdffile_url2);
    window.open(pdffile_url2);
}





