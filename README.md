[On Github node-red-arcgis-rest](https://github.com/MetaCEscher/node-red-arcgis-rest)  
[On npm node-red-arcgis-rest](https://www.npmjs.com/package/node-red-arcgis-rest) 

###### **This node leverages The ArcGIS Rest js API to return the following functions:** 


To install use npm,

npm install node-red-arcgis-rest

Use the following link for proper documentation on both ArcGIS Rest js and ArcGIS Rest

[ArcGIS Rest API Documentation](https://developers.arcgis.com/rest/) 

[ArcGIS Rest Js GitHub](https://github.com/Esri/arcgis-rest-js)

All functions use the msg.arcgis array it is possible to set more values than what is listed but not everything has been tested out

**For all options the output returns to the following:**

msg.arcgis.response

msg.arcgis.error

msg.arcgis.errorDetails


**If the service requires authentication pass the following to:**
msg.arcgis.authentication.server (required)

msg.arcgis.authentication.username (required)

msg.arcgis.authentication.password (required)

msg.arcgis.authentication.tokenDuration (required)



**Query Features:** 

[queryFeatures](https://esri.github.io/arcgis-rest-js/api/feature-layer/queryFeatures/) 

See ESRI's Documentation on queryFeatures It may be possible to pass all values

 Pass the following to query back features from a rest service
 
msg.arcgis.queryFeatures.url

msg.arcgis.queryFeatures.where


**Update Features:**

[updateFeatures](https://esri.github.io/arcgis-rest-js/api/feature-layer/updateFeatures/) 

See ESRI's Documentation on updateFeatures It may be possible to pass all values
 
Pass the following to update features to a rest service
 
msg.arcgis.updateFeatures.url (required)

msg.arcgis.updateFeatures.features[0].attributes.ObjectId (required)

msg.arcgis.updateFeatures.features[0].attributes.GlobalID (optional)

msg.arcgis.updateFeatures.features[0].attributes.[COLUMN NAME] (optional)

msg.arcgis.updateFeatures.features[0].geometry.x (optional)

msg.arcgis.updateFeatures.features[0].geometry.y (optional)

msg.arcgis.updateFeatures.features[0].geometry.spatialReference.wkid (required if passing x,y)


**Add Features:** 

[addFeatures](https://esri.github.io/arcgis-rest-js/api/feature-layer/addFeatures/)

See ESRI's Documentation on addFeatures It may be possible to pass all values

Pass the following to add features to a rest service
 
msg.arcgis.addFeatures.url (required)

msg.arcgis.addFeatures.features[0].attributes.[COLUMN NAME] (optional)

msg.arcgis.addFeatures.features[0].geometry.x (optional)

msg.arcgis.addFeatures.features[0].geometry.y (optional)

msg.arcgis.addFeatures.features[0].geometry.spatialReference.wkid (required if passing x,y)

Delete Features: https://esri.github.io/arcgis-rest-js/api/feature-layer/deleteFeatures/ See ESRI's Documentation on deleteFeatures It may be possible to pass all values
 Pass the following to delete features to a rest service
 
msg.arcgis.deleteFeatures.url (required)

msg.arcgis.deleteFeatures.objectIds[0] (required)


**Get Attachments:** 

[getAttachments](https://esri.github.io/arcgis-rest-js/api/feature-layer/getAttachments/)

See ESRI's Documentation on getAttachments  It may be possible to pass all values

 Pass the following to return attachment features from a rest service
 
msg.arcgis.getAttachments.url (required)

msg.arcgis.getAttachments.featureId (required)


**Query Related:** 

[queryRelated](https://esri.github.io/arcgis-rest-js/api/feature-layer/queryRelated/)
 
See ESRI's Documentation on queryRelated It may be possible to pass all values

Pass the following to return related records from a rest service
 
msg.arcgis.queryRelated.url (required)

msg.arcgis.queryRelated.objectIds[0] (required)



