ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoLight_1 = new ol.layer.Tile({
            'title': 'Carto Light',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_jarimariyukta_2 = new ol.format.GeoJSON();
var features_jarimariyukta_2 = format_jarimariyukta_2.readFeatures(json_jarimariyukta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jarimariyukta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jarimariyukta_2.addFeatures(features_jarimariyukta_2);
var lyr_jarimariyukta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jarimariyukta_2, 
                style: style_jarimariyukta_2,
                popuplayertitle: "jarimari yukta",
                interactive: true,
                title: '<img src="styles/legend/jarimariyukta_2.png" /> jarimari yukta'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_CartoLight_1.setVisible(true);lyr_jarimariyukta_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_CartoLight_1,lyr_jarimariyukta_2];
lyr_jarimariyukta_2.set('fieldAliases', {'id': 'id', 'build_hght': 'build_hght', 'build_area': 'build_area', 'build_grnd': 'build_grnd', 'build_flr': 'build_flr', 'build_type': 'build_type', 'build_use': 'build_use', 'no_labour': 'no_labour', 'no_res': 'no_res', 'layer': 'layer', 'path': 'path', });
lyr_jarimariyukta_2.set('fieldImages', {'id': 'TextEdit', 'build_hght': 'TextEdit', 'build_area': 'TextEdit', 'build_grnd': 'TextEdit', 'build_flr': 'TextEdit', 'build_type': 'TextEdit', 'build_use': 'TextEdit', 'no_labour': 'TextEdit', 'no_res': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_jarimariyukta_2.set('fieldLabels', {'id': 'inline label - always visible', 'build_hght': 'no label', 'build_area': 'inline label - always visible', 'build_grnd': 'no label', 'build_flr': 'inline label - always visible', 'build_type': 'inline label - visible with data', 'build_use': 'no label', 'no_labour': 'header label - always visible', 'no_res': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_jarimariyukta_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});