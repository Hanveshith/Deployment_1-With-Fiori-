sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fiori/deployment/webapp/test/integration/pages/orderHeaderList",
	"fiori/deployment/webapp/test/integration/pages/orderHeaderObjectPage",
	"fiori/deployment/webapp/test/integration/pages/orderItemsObjectPage"
], function (JourneyRunner, orderHeaderList, orderHeaderObjectPage, orderItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fiori/deployment/webapp') + '/test/flp.html#app-preview',
        pages: {
			onTheorderHeaderList: orderHeaderList,
			onTheorderHeaderObjectPage: orderHeaderObjectPage,
			onTheorderItemsObjectPage: orderItemsObjectPage
        },
        async: true
    });

    return runner;
});

