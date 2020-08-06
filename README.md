    <p>This node leverages The ArcGIS Rest js API to return the following functions: </p>
    <p>Use the following link for proper documentation on both ArcGIS Rest js and ArcGIS Rest</p>
    <p><a href="https://developers.arcgis.com/rest/">https://developers.arcgis.com/rest/</a> <a href="https://github.com/Esri/arcgis-rest-js">https://github.com/Esri/arcgis-rest-js</a></p>
    <p>All functions use the msg.arcgis array it is possible to set more values than what is listed but not everything has been tested out</p>

    <p><b>For all options the output returns to the following:</b></p>
    <p>msg.arcgis.response</p>
    <p>msg.arcgis.error</p>
    <p>msg.arcgis.errorDetails</p>


    <p><b>If the service requires authentication pass the following to:</b></p>
    <p>msg.arcgis.authentication.server (required)</p>
    <p>msg.arcgis.authentication.username (required)</p>
    <p>msg.arcgis.authentication.password (required)</p>
    <p>msg.arcgis.authentication.tokenDuration (required)</p>


    <p><b>Query Features:</b><a href="https://esri.github.io/arcgis-rest-js/api/feature-layer/queryFeatures/">See ESRI's Documentation on queryFeatures</a> It may be possible to pass all values</p>
    <p> Pass the following to query back features from a rest service</p>
    <p>msg.arcgis.queryFeatures.url</p>
    <p>msg.arcgis.queryFeatures.where</p>

    <p><b>Update Features:</b><a href="https://esri.github.io/arcgis-rest-js/api/feature-layer/updateFeatures/">See ESRI's Documentation on updateFeatures</a> It may be possible to pass all values</p>
    <p> Pass the following to update features to a rest service</p>
    <p>msg.arcgis.updateFeatures.url (required)</p>
    <p>msg.arcgis.updateFeatures.features[0].attributes.ObjectId (required)</p>
    <p>msg.arcgis.updateFeatures.features[0].attributes.GlobalID (optional)</p>
    <p>msg.arcgis.updateFeatures.features[0].attributes.[COLUMN NAME] (optional)</p>
    <p>msg.arcgis.updateFeatures.features[0].geometry.x (optional)</p>
    <p>msg.arcgis.updateFeatures.features[0].geometry.y (optional)</p>
    <p>msg.arcgis.updateFeatures.features[0].geometry.spatialReference.wkid (required if passing x,y)</p>

    <p><b>Add Features:</b><a href="https://esri.github.io/arcgis-rest-js/api/feature-layer/addFeatures/">See ESRI's Documentation on addFeatures</a> It may be possible to pass all values</p>
    <p> Pass the following to add features to a rest service</p>
    <p>msg.arcgis.addFeatures.url (required)</p>
    <p>msg.arcgis.addFeatures.features[0].attributes.[COLUMN NAME] (optional)</p>
    <p>msg.arcgis.addFeatures.features[0].geometry.x (optional)</p>
    <p>msg.arcgis.addFeatures.features[0].geometry.y (optional)</p>
    <p>msg.arcgis.addFeatures.features[0].geometry.spatialReference.wkid (required if passing x,y)</p>

    <p><b>Delete Features:</b><a href="https://esri.github.io/arcgis-rest-js/api/feature-layer/deleteFeatures/">See ESRI's Documentation on deleteFeatures</a> It may be possible to pass all values</p>
    <p> Pass the following to delete features to a rest service</p>
    <p>msg.arcgis.deleteFeatures.url (required)</p>
    <p>msg.arcgis.deleteFeatures.objectIds[0](required)</p>

    <p><b>Get Attachments:</b><a href="https://esri.github.io/arcgis-rest-js/api/feature-layer/getAttachments /">See ESRI's Documentation on getAttachments </a> It may be possible to pass all values</p>
    <p> Pass the following to return attachment features from a rest service</p>
    <p>msg.arcgis.getAttachments.url (required)</p>
    <p>msg.arcgis.getAttachments.featureId (required)</p>

    <p><b>Query Related:</b><a href="https://esri.github.io/arcgis-rest-js/api/feature-layer/queryRelated/">See ESRI's Documentation on queryRelated</a> It may be possible to pass all values</p>
    <p> Pass the following to return related records from a rest service</p>
    <p>msg.arcgis.queryRelated.url (required)</p>
    <p>msg.arcgis.queryRelated.objectIds[0](required)</p>
