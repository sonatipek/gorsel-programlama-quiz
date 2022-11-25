// This example shows how to prepopulate the UI on
    // load using the "Canadian Parliament 2012" dataset.

    $(function(){
        $.getJSON("mps.json", function(mps) {
            $("#output").pivotUI(mps, {
                rows: ["Province"],
                cols: ["Party"],
                aggregatorName: "Integer Sum",
                vals: ["Age"],
                rendererName: "Heatmap",
                rendererOptions: {
                    table: {
                        clickCallback: function(e, value, filters, pivotData){
                            var names = [];
                            pivotData.forEachMatchingRecord(filters,
                                function(record){ names.push(record.Name); });
                            alert(names.join("\n"));
                        }
                    }
                }
            });
        });
     });