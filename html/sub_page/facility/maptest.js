function initializeMap(containerId, lat, lng) {
    var container = document.getElementById(containerId);
    // 지도를 생성할 때 사용할 옵션
    var mapOptions = {
        center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    var map = new kakao.maps.Map(container, mapOptions);
        
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커 이미지 설정
    var imageSrc = "https://dau2wmhjxkxtx.cloudfront.net/web-static/static_webapp_v2/img/icons/location-red.svg",
        imageSize = new kakao.maps.Size(64, 69),
        imageOption = { offset: new kakao.maps.Point(27, 69) };
    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
    // 지도 객체 생성
    var maps = [];
    var geocoder = new kakao.maps.services.Geocoder();

    var containers = document.querySelectorAll('.map-container > div[id^="map"]');
    containers.forEach(function(container) {
        
    
        // 지도 이벤트 추가
        // kakao.maps.event.addListener(map, "idle", function () {
        // searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        // });
    
        // 마커 추가
        var markerPosition = map.getCenter(); // 마커가 표시될 위치를 지도의 중심으로 설정합니다.
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });
        marker.setMap(map);

    
        // maps.push(map); // 생성된 지도를 배열에 추가
    });
    
    // 주소 검색 후 지도 중심을 변경하는 예제 함수
    function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }
    
    function searchDetailAddrFromCoords(coords, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
    
    // 특정 주소에 마커 표시
    function addMarkerAtAddress(address) {
        geocoder.addressSearch(address, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            maps.forEach(function(map) {
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage
            });
            });
        }
        });
    }
    
    // 주소 정보를 바탕으로 각 지도에 마커를 추가합니다.
    addMarkerAtAddress("갈현로 21길");
}

document.addEventListener('DOMContentLoaded', function() {
    // 각 지도 초기화
    var map1 = initializeMap('map1', 37.499874, 127.035308);
    var map2 = initializeMap('map2', 37.530122, 127.1237479);
    var map3 = initializeMap('map3', 37.4782605, 126.9515208);
    var map4 = initializeMap('map4', 37.4954703, 126.8876391);
    var map5 = initializeMap('map5', 37.5792607, 126.9364946);
    var map6 = initializeMap('map6', 37.499874, 127.035308);
    var map7 = initializeMap('map7', 37.499874, 127.035308);
    var map8 = initializeMap('map8', 37.499874, 127.035308);
    var map9 = initializeMap('map9', 37.499874, 127.035308);
    var map10 = initializeMap('map10', 37.499874, 127.035308);


});