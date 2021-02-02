$(function(){
     // preload audio
     var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        toast.play();

        $('#product').html($(this).data('name'));
        $('#code').html($(this).data('code'));
        $('#toast').toast({ autohide: false }).toast('show');
    });
    $(document).on("keyup", function(event) {
        if (event.key === "Escape") {
            $("#toast").toast("hide");
        }
    });
});