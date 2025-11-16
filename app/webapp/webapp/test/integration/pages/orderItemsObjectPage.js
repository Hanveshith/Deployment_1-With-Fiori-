sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fiori.deployment.webapp',
            componentId: 'orderItemsObjectPage',
            contextPath: '/orderHeader/to_orderitems'
        },
        CustomPageDefinitions
    );
});