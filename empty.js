define(function() {
	return ['$scope', 'HttpService', 'close', ShowMapCtrl];

	function ShowMapCtrl($scope, HttpService, close) {	
		var GLOBAL_OBJECT = {};
		$scope.isOnline = true;
		
		var cb = function(map){
			map.centerAndZoom(new BMap.Point(116.417854,39.921988), 17);
		}
		
		GLOBAL_OBJECT.isHidden = true;
		GLOBAL_OBJECT.NodeList = [];
		GLOBAL_OBJECT.currentNode = null;
		
		$scope.close = close;
		$scope.mapOptions = {
	    	center: {
	            longitude: 116.417854,
	            latitude: 39.921988
	        },
	        zoom: 17,
	        navCtrl:true,
	        scaleCtrl:true,
	        overviewCtrl:true,
	        enableScrollWheelZoom:true,
	        maxZoomLevel: 18,
	        minZoomLevel: 15,
	        externalCallBack: cb
	    };
		
	}
})
