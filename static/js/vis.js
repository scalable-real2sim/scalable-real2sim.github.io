$(function () {
    $('#visual-selector').change(function () {
        $('.visual').hide();
        $('.visual.' + $(this).val()).show();
    });
    $('#mesh-selector').change(function () {
        $('.mesh').hide();
        $('.mesh.' + $(this).val()).show();
    });
    $('#collision-selector').change(function () {
        $('.collision').hide();
        $('.collision.' + $(this).val()).show();
    });
});
