import React, { useState } from 'react';
import { Dimensions, StatusBar, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import ScreenContainer from '@/components/ScreenContainer';
import { mapKey } from '@/secret/mapKey';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const LocationScreen = () => {
  const [html, setHtml] = useState(`
    <html>
        <head>
            <meta name="viewport" content="width=${deviceWidth}, initial-scale=1">
            <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${mapKey}&libraries=services,clusterer,drawing"></script> 
        </head>
        <body style="margin: 0; padding: 0; position: absolute; top:0; left:0; right:0; bottom:0;">
            <div id="map" style="width:${deviceWidth + 10}px; height:${deviceHeight}px;"></div>
            <script type="text/javascript">
                (function () {
                    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                    const options = { //지도를 생성할 때 필요한 기본 옵션
                        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                        level: 3 //지도의 레벨(확대, 축소 정도)
                    };
                    
                    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
                    
                    // 주소-좌표 변환 객체를 생성합니다
                    const geocoder = new kakao.maps.services.Geocoder();
                })();
            </script>       
        </body>
    </html>    
    `);
  return (
    <ScreenContainer type="view" bgColor="black" isPadding={false}>
      <WebView source={{ html }} style={{ flex: 1 }} />
    </ScreenContainer>
  );
};

export default LocationScreen;
