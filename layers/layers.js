var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1 = new ol.format.GeoJSON();
var features_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1 = format_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1.readFeatures(json_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1.addFeatures(features_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1);
var lyr_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1, 
                style: style_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1,
                popuplayertitle: 'Taiz ozel — yem_admbnda_adm3_govyem_cso_20191002',
                interactive: true,
    title: 'Taiz ozel — yem_admbnda_adm3_govyem_cso_20191002<br />\
    <img src="styles/legend/Taizozelyem_admbnda_adm3_govyem_cso_20191002_1_0.png" /> ١HH<br />\
    <img src="styles/legend/Taizozelyem_admbnda_adm3_govyem_cso_20191002_1_1.png" /> IRG<br />\
    <img src="styles/legend/Taizozelyem_admbnda_adm3_govyem_cso_20191002_1_2.png" /> Mix<br />\
    <img src="styles/legend/Taizozelyem_admbnda_adm3_govyem_cso_20191002_1_3.png" /> <br />' });
var format_YemenDistrictsYPC_2 = new ol.format.GeoJSON();
var features_YemenDistrictsYPC_2 = format_YemenDistrictsYPC_2.readFeatures(json_YemenDistrictsYPC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YemenDistrictsYPC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YemenDistrictsYPC_2.addFeatures(features_YemenDistrictsYPC_2);
var lyr_YemenDistrictsYPC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YemenDistrictsYPC_2, 
                style: style_YemenDistrictsYPC_2,
                popuplayertitle: 'Yemen Districts YPC',
                interactive: true,
                title: '<img src="styles/legend/YemenDistrictsYPC_2.png" /> Yemen Districts YPC'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1.setVisible(true);lyr_YemenDistrictsYPC_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1,lyr_YemenDistrictsYPC_2];
lyr_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1.set('fieldAliases', {'fid': 'fid', 'ADM0_EN': 'ADM0_EN', 'ADM0_AR': 'ADM0_AR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_AR': 'ADM1_AR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_AR': 'ADM2_AR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_AR': 'ADM3_AR', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3REF_EN': 'ADM3REF_EN', 'ADM3REF_AR': 'ADM3REF_AR', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT1AR': 'ADM3ALT1AR', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM3ALT2AR': 'ADM3ALT2AR', 'date_': 'date_', 'validOn': 'validOn', 'validTo': 'validTo', 'Classfiction': 'Classfiction', });
lyr_YemenDistrictsYPC_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '__________': '__________', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1.set('fieldImages', {'fid': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_AR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_AR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_AR': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_AR': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3REF_EN': 'TextEdit', 'ADM3REF_AR': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT1AR': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM3ALT2AR': 'TextEdit', 'date_': 'TextEdit', 'validOn': 'TextEdit', 'validTo': 'TextEdit', 'Classfiction': 'Range', });
lyr_YemenDistrictsYPC_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '__________': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Taizozelyem_admbnda_adm3_govyem_cso_20191002_1.set('fieldLabels', {'fid': 'no label', 'ADM0_EN': 'no label', 'ADM0_AR': 'no label', 'ADM0_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_AR': 'no label', 'ADM1_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_AR': 'no label', 'ADM2_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_AR': 'no label', 'ADM3_PCODE': 'no label', 'ADM3REF_EN': 'no label', 'ADM3REF_AR': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT1AR': 'no label', 'ADM3ALT2EN': 'no label', 'ADM3ALT2AR': 'no label', 'date_': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Classfiction': 'no label', });
lyr_YemenDistrictsYPC_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', '__________': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_YemenDistrictsYPC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});