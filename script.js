function semak() {

    var user = $("#username").val();
    var pass = $("#password").val();
    
    if (user === "" || pass === "") {
        $("#msg").text("Sila isi semua maklumat!");
        $("#popupMsg").popup("open");
        return false;
    }

    $("#msg").text("Login berjaya!");
    $("#popupMsg").popup("open");

    setTimeout(function () {
        $.mobile.changePage("#successPage");
    }, 1500);

    return false;
}