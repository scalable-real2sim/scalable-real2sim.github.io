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
    $('#collision-tomato-selector').change(function () {
        $('.collision-tomato').hide();
        $('.collision-tomato.' + $(this).val()).show();
    });
    $('#collision-dumbell-selector').change(function () {
        $('.collision-dumbell').hide();
        $('.collision-dumbell.' + $(this).val()).show();
    });
});
