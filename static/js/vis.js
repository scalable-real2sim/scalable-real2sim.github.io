$(function () {
    $('#visual-selector').change(function () {
        $('.visual').hide();
        $('.visual.' + $(this).val()).show();
    });
    let defaultModel = "large_mustard"; // Set default model
    let defaultMesh = $('.mesh.' + defaultModel);

    // Load the default model into the div
    defaultMesh.html(`
        <div class="columns is-centered">
            <div class="column">
                <div class="content is-centered">
                    <model-viewer class="is-centered" style="height: 480px; width: 480px;" 
                        alt="Raw Mesh" field-of-view="45"
                        src="./static/models/${defaultModel}.glb" ar camera-controls 
                        auto-rotate rotation-per-second="30deg" camera-orbit="auto auto 5%" 
                        ar-status="not-presenting">
                    </model-viewer>
                </div>
            </div>
            <div class="column">
                <div class="content is-centered">
                    <model-viewer class="is-centered" style="height: 480px; width: 480px;" 
                        alt="Collision Geometry" field-of-view="45"
                        src="./static/models/${defaultModel}_convex.glb" ar camera-controls 
                        auto-rotate rotation-per-second="30deg" camera-orbit="auto auto 5%" 
                        ar-status="not-presenting">
                    </model-viewer>
                </div>
            </div>
        </div>
    `);
    $('#mesh-selector').change(function () {
        let selectedValue = $(this).val(); // Get the selected model
        let selectedMesh = $('.mesh.' + selectedValue);

        // Hide all mesh divs and remove existing content
        $('.mesh').hide().empty();

        // Insert model-viewer elements dynamically only for the selected mesh
        selectedMesh.html(`
            <div class="columns is-centered">
                <div class="column">
                    <div class="content is-centered">
                        <model-viewer class="is-centered" style="height: 480px; width: 480px;" 
                            alt="Raw Mesh" field-of-view="45"
                            src="./static/models/${selectedValue}.glb" ar camera-controls 
                            auto-rotate rotation-per-second="30deg" camera-orbit="auto auto 5%" 
                            ar-status="not-presenting">
                        </model-viewer>
                    </div>
                </div>
                <div class="column">
                    <div class="content is-centered">
                        <model-viewer class="is-centered" style="height: 480px; width: 480px;" 
                            alt="Collision Geometry" field-of-view="45"
                            src="./static/models/${selectedValue}_convex.glb" ar camera-controls 
                            auto-rotate rotation-per-second="30deg" camera-orbit="auto auto 5%" 
                            ar-status="not-presenting">
                        </model-viewer>
                    </div>
                </div>
            </div>
        `);

        // Show the selected mesh
        selectedMesh.show();
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
