module.exports = function(RED) {
    function arcgisFeaturesNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
                require('isomorphic-form-data');
                const fetch = require("node-fetch");
                const { setDefaultRequestOptions } = require('@esri/arcgis-rest-request');
                const { queryFeatures,updateFeatures,deleteFeatures,addFeatures,getAttachments  } =require('@esri/arcgis-rest-feature-layer');
                const { UserSession, getToken } =require('@esri/arcgis-rest-auth');
                setDefaultRequestOptions({ fetch });

            if(msg.arcgis.authentication){
                switch(config.arcgisType) {
                    case 'queryFeatures':
                        authentication  = new UserSession(msg.arcgis.authentication);
                        authentication.getToken(msg.arcgis.queryFeatures.url).catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        });
                        msg.arcgis.queryFeatures.authentication = authentication;
                        break;
                    case 'updateFeatures':
                        authentication  = new UserSession(msg.arcgis.authentication);
                        authentication.getToken(msg.arcgis.updateFeatures.url).catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        });
                        msg.arcgis.updateFeatures.authentication = authentication;
                        break;
                    case 'addFeatures':
                        authentication  = new UserSession(msg.arcgis.authentication);
                        authentication.getToken(msg.arcgis.addFeatures.url).catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        });
                        msg.arcgis.addFeatures.authentication = authentication;
                        break;
                    case 'deleteFeatures':
                        authentication  = new UserSession(msg.arcgis.authentication);
                        authentication.getToken(msg.arcgis.deleteFeatures.url).catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        });
                        msg.arcgis.deleteFeatures.authentication = authentication;
                        break;
                    case 'getAttachments':
                        authentication  = new UserSession(msg.arcgis.authentication);
                        authentication.getToken(msg.arcgis.getAttachments.url).catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        });
                        msg.arcgis.getAttachments.authentication = authentication;
                        break;
                    case 'queryRelated':
                        authentication  = new UserSession(msg.arcgis.authentication);
                        authentication.getToken(msg.arcgis.queryRelated.url).catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        });
                        msg.arcgis.queryRelated.authentication = authentication;
                        break;

                }
            }
                if(config.arcgisType==='queryFeatures') {
                    queryFeatures(msg.arcgis.queryFeatures)
                        .catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        }).then(response => {
                        msg.arcgis.response = response;
                        node.send(msg)
                    });
                } else if(config.arcgisType==='updateFeatures') {
                updateFeatures(msg.arcgis.updateFeatures)
                    .catch(error => {
                        msg.arcgis.error = error;
                        if(error.response){
                            msg.arcgis.errorDetails = error.response.error;
                        }
                        node.send(msg);
                    })
                    .then(response => {
                        msg.arcgis.response = response;
                        node.send(msg);
                    })
            } else if(config.arcgisType=== 'addFeatures') {
                addFeatures(msg.arcgis.addFeatures)
                    .catch(error => {
                        msg.arcgis.error = error;
                        if(error.response){
                            msg.arcgis.errorDetails = error.response.error;
                        }
                        node.send(msg);
                    }).then(response => {
                    msg.arcgis.response = response;
                    node.send(msg);
                });
            } else if(config.arcgisType=== 'deleteFeatures') {
                deleteFeatures(msg.arcgis.deleteFeatures)
                    .catch(error => {
                        msg.arcgis.error = error;
                        if(error.response){
                            msg.arcgis.errorDetails = error.response.error;
                        }
                        node.send(msg);
                    })
                    .then(response => {
                        msg.arcgis.response = response;
                        node.send(msg);
                    });
            }else if(config.arcgisType=== 'getAttachments') {
                    getAttachments(msg.arcgis.getAttachments)
                        .catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        })
                        .then(response => {
                            msg.arcgis.response = response;
                            node.send(msg);
                        });
                }else if(config.arcgisType=== 'queryRelated') {
                    queryRelated(msg.arcgis.queryRelated)
                        .catch(error => {
                            msg.arcgis.error = error;
                            if(error.response){
                                msg.arcgis.errorDetails = error.response.error;
                            }
                            node.send(msg);
                        })
                        .then(response => {
                            msg.arcgis.response = response;
                            node.send(msg);
                        });
                }   else {
                msg.arcgis.error = "No Option Selected!";
                node.send(msg);
            }



            

        });

    }
    RED.nodes.registerType("ArcGIS-Rest-Feature-Layer",arcgisFeaturesNode);
}