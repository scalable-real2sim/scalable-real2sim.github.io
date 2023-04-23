$(function () {
    $('#visual-selector').change(function () {
        $('.visual').hide();
        $('.visual.' + $(this).val()).show();
    });
    $('#collision-selector').change(function () {
        $('.collision').hide();
        $('.collision.' + $(this).val()).show();
    });
});
