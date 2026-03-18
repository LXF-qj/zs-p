const locations = [
    { name: "北京中山公园", type: "park", lat: 39.9088, lng: 116.3876, address: "北京市东城区中华路4号", description: "原为明清两代的社稷坛，是皇帝祭祀土地神和五谷神的地方。1914年，为纪念孙中山先生，朱启钤将社稷坛改建为中央公园，1928年改名为中山公园。园内古柏参天，保存着明清时期的建筑风格，是北京最具历史底蕴的公园之一。", city: "北京", image: "" },
    { name: "上海中山公园", type: "park", lat: 31.2195, lng: 121.4258, address: "上海市长宁区长宁路780号", description: "始建于1914年，由英国园艺师设计，是上海最早的现代公园之一。公园以英式园林风格著称，园内有著名的玫瑰园、音乐喷泉和百年古树。这里曾是租界时期的公共花园，见证了上海近代历史的发展变迁。", city: "上海", image: "" },
    { name: "广州中山公园", type: "park", lat: 23.1288, lng: 113.2644, address: "广州市越秀区东风中路", description: "广州最早的公园之一，始建于1921年。公园位于广州市中心，原为清代官署旧址，后改建为公园以纪念孙中山先生。园内绿树成荫，环境优美，是广州市民休闲娱乐的重要场所，也是广州近代城市发展的见证。", city: "广州", image: "" },
    { name: "南京中山公园", type: "park", lat: 32.0603, lng: 118.7969, address: "南京市玄武区中山东路", description: "位于南京市中心，原为明故宫的一部分，1927年改建为中山公园。南京作为孙中山先生就任临时大总统的地方，这座公园具有特殊的历史意义。园内保留了明代园林风格，古树名木众多，是南京重要的城市公园和文化地标。", city: "南京", image: "" },
    { name: "武汉中山公园", type: "park", lat: 30.5806, lng: 114.2734, address: "武汉市江汉区解放大道", description: "始建于1910年，原名西园，1929年为纪念孙中山先生改名为中山公园。是武汉最大的城市公园之一，园内有著名的湖心亭、音乐喷泉和大型游乐设施。这里曾是武汉市民重要的文化娱乐场所，见证了武汉近代城市的发展历程。", city: "武汉", image: "" },
    { name: "西安中山公园", type: "park", lat: 34.2594, lng: 108.9470, address: "西安市新城区西五路", description: "位于西安市中心，是西安历史最悠久的公园之一。原为清代满城的一部分，1927年改建为中山公园。园内保存着明清时期的建筑风格，古树参天，环境幽静。这里是西安市民休闲健身的重要场所，也是西安历史文化的重要组成部分。", city: "西安", image: "" },
    { name: "成都中山公园", type: "park", lat: 30.6586, lng: 104.0648, address: "成都市青羊区人民中路", description: "位于成都市中心，是成都重要的城市绿地。原为清代官署旧址，1928年改建为中山公园以纪念孙中山先生。园内绿树成荫，环境优美，是成都市民休闲娱乐的重要场所。公园融合了川西园林特色，体现了成都悠闲的生活文化。", city: "成都", image: "" },
    { name: "杭州中山公园", type: "park", lat: 30.2592, lng: 120.1694, address: "杭州市上城区南山路", description: "位于西湖附近，环境优美，是杭州著名的公园。原为清代私家园林，1927年改建为中山公园。园内保存着江南园林的精致风格，小桥流水，亭台楼阁，与西湖美景相得益彰。这里是杭州人休闲赏景的好去处，也是杭州园林艺术的代表。", city: "杭州", image: "" },
    { name: "天津中山公园", type: "park", lat: 39.1580, lng: 117.2010, address: "天津市河北区中山路", description: "始建于1905年，是天津最早的公园之一，原名劝业会场。1928年为纪念孙中山先生改名为中山公园。园内保存着民国时期的建筑风格，有著名的音乐喷泉和古树名木。这里见证了天津近代商业和工业的发展，是天津历史文化的重要载体。", city: "天津", image: "" },
    { name: "重庆中山公园", type: "park", lat: 29.5630, lng: 106.5516, address: "重庆市渝中区中山三路", description: "位于重庆市中心，是重庆重要的城市公园。原为清代官署旧址，1927年改建为中山公园。园内地形起伏，体现了山城特色，绿树成荫，环境优美。这里是重庆市民休闲娱乐的重要场所，也是重庆近代城市发展的见证。", city: "重庆", image: "" },
    { name: "沈阳中山公园", type: "park", lat: 41.7922, lng: 123.4325, address: "沈阳市和平区中山路", description: "位于沈阳市中心，是沈阳最大的公园之一。原为清代皇家园林的一部分，1924年改建为中山公园。园内有著名的湖心亭、音乐喷泉和大型游乐设施。这里见证了沈阳从清朝陪都到现代化城市的发展历程，是沈阳历史文化的重要组成部分。", city: "沈阳", image: "" },
    { name: "大连中山公园", type: "park", lat: 38.9140, lng: 121.6147, address: "大连市沙河口区中山路", description: "位于大连市中心，是大连重要的城市绿地。原为日据时期的公园，1945年后改名为中山公园。园内保存着日式园林风格，环境优美，绿树成荫。这里是大连市民休闲娱乐的重要场所，也是大连近代历史发展的见证。", city: "大连", image: "" },
    { name: "长沙中山公园", type: "park", lat: 28.2282, lng: 112.9388, address: "长沙市天心区中山路", description: "位于长沙市中心，是长沙历史悠久的公园。原为清代官署旧址，1927年改建为中山公园。园内保存着湘楚园林风格，古树参天，环境幽静。这里是长沙市民休闲健身的重要场所，也是长沙历史文化的重要组成部分。", city: "长沙", image: "" },
    { name: "郑州中山公园", type: "park", lat: 34.7466, lng: 113.6253, address: "郑州市金水区人民路", description: "位于郑州市中心，是郑州重要的城市公园。原为清代官署旧址，1927年改建为中山公园。园内绿树成荫，环境优美，是郑州市民休闲娱乐的重要场所。这里见证了郑州从县城到现代化大都市的发展历程，是郑州历史文化的重要组成部分。", city: "郑州", image: "" },
    { name: "济南中山公园", type: "park", lat: 36.6512, lng: 117.1201, address: "济南市市中区经三路", description: "位于济南市中心，是济南历史悠久的公园。原为清代私家园林，1927年改建为中山公园。园内保存着济南园林的特色，小桥流水，亭台楼阁，体现了泉城的文化底蕴。这里是济南市民休闲赏景的好去处，也是济南园林艺术的代表。", city: "济南", image: "" },
    { name: "青岛中山公园", type: "park", lat: 36.0575, lng: 120.3833, address: "青岛市市南区文登路", description: "始建于1901年，是青岛最早的公园之一，原为德国殖民时期的公园。1922年中国收回青岛后改名为中山公园。园内保存着德式园林风格，有著名的樱花大道和玫瑰园。这里见证了青岛从德国租界到现代化城市的发展历程，是青岛历史文化的重要组成部分。", city: "青岛", image: "" },
    { name: "厦门中山公园", type: "park", lat: 24.4798, lng: 118.0894, address: "厦门市思明区公园南路", description: "位于厦门市中心，是厦门历史悠久的公园。原为清代官署旧址，1927年改建为中山公园。园内保存着闽南园林特色，环境优美，绿树成荫。这里是厦门市民休闲娱乐的重要场所，也是厦门历史文化的重要组成部分。", city: "厦门", image: "" },
    { name: "福州中山公园", type: "park", lat: 26.0745, lng: 119.2965, address: "福州市鼓楼区八一七路", description: "位于福州市中心，是福州重要的城市公园。原为清代官署旧址，1927年改建为中山公园。园内保存着闽都园林风格，古树参天，环境幽静。这里是福州市民休闲健身的重要场所，也是福州历史文化的重要组成部分。", city: "福州", image: "" },
    { name: "南昌中山公园", type: "park", lat: 28.6829, lng: 115.8579, address: "南昌市东湖区中山路", description: "位于南昌市中心，是南昌历史悠久的公园。原为清代官署旧址，1927年改建为中山公园。园内保存着赣鄱园林风格，环境优美，绿树成荫。这里是南昌市民休闲娱乐的重要场所，也是南昌历史文化的重要组成部分。", city: "南昌", image: "" },
    { name: "合肥中山公园", type: "park", lat: 31.8206, lng: 117.2272, address: "合肥市庐阳区长江中路", description: "位于合肥市中心，是合肥重要的城市绿地。原为清代官署旧址，1927年改建为中山公园。园内绿树成荫，环境优美，是合肥市民休闲娱乐的重要场所。这里见证了合肥从县城到现代化省会城市的发展历程，是合肥历史文化的重要组成部分。", city: "合肥", image: "" },
    { name: "北京中山路", type: "road", lat: 39.9054, lng: 116.3976, address: "北京市东城区", description: "位于北京市中心，是北京重要的商业街之一。中山路历史悠久，见证了北京从古都到现代化国际大都市的变迁。街道两旁商铺林立，既有老字号店铺，也有现代商场，是北京商业文化的重要代表。", city: "北京", image: "" },
    { name: "上海中山路", type: "road", lat: 31.2317, lng: 121.4902, address: "上海市黄浦区", description: "位于上海市中心，是上海重要的商业街。中山路历史悠久，见证了上海从小渔村到国际大都市的崛起。街道两旁汇集了各种商铺和餐厅，是上海繁华商业的缩影，体现了上海海纳百川的城市精神。", city: "上海", image: "" },
    { name: "广州中山路", type: "road", lat: 23.1255, lng: 113.2668, address: "广州市越秀区", description: "广州最繁华的商业街之一，历史悠久。中山路见证了广州两千多年的城市发展史，街道两旁既有传统骑楼建筑，也有现代摩天大楼。这里是广州商业文化的集中体现，也是广府文化的重要载体。", city: "广州", image: "" },
    { name: "南京中山路", type: "road", lat: 32.0584, lng: 118.7899, address: "南京市玄武区", description: "南京重要的商业街，连接多个重要景点。中山路见证了南京六朝古都到现代化城市的发展历程，街道两旁既有民国建筑，也有现代商业设施。这里是南京历史文化与现代商业的交汇点，体现了南京的城市魅力。", city: "南京", image: "" },
    { name: "武汉中山路", type: "road", lat: 30.5786, lng: 114.2755, address: "武汉市武昌区", description: "武汉重要的交通干道和商业街。中山路见证了武汉从三镇合一到现代化大都市的发展历程，街道两旁商铺林立，热闹非凡。这里是武汉商业文化的重要代表，体现了武汉九省通衢的地理优势。", city: "武汉", image: "" },
    { name: "西安中山路", type: "road", lat: 34.2619, lng: 108.9486, address: "西安市新城区", description: "西安重要的商业街，历史悠久。中山路见证了西安十三朝古都到现代化城市的发展历程，街道两旁既有历史建筑，也有现代商业设施。这里是西安历史文化与现代商业的融合，体现了西安的城市底蕴。", city: "西安", image: "" },
    { name: "成都中山路", type: "road", lat: 30.6601, lng: 104.0667, address: "成都市青羊区", description: "成都重要的商业街，繁华热闹。中山路体现了成都悠闲而充满活力的城市性格，街道两旁茶馆、商铺林立，是成都慢生活文化的集中体现。这里是成都商业文化的重要代表，展现了天府之国的独特魅力。", city: "成都", image: "" },
    { name: "杭州中山路", type: "road", lat: 30.2578, lng: 120.1711, address: "杭州市上城区", description: "杭州历史悠久的商业街，文化底蕴深厚。中山路见证了杭州从南宋都城到现代化旅游城市的发展历程，街道两旁既有历史建筑，也有现代商铺。这里是杭州商业与文化的交汇点，体现了杭州的城市品质。", city: "杭州", image: "" },
    { name: "天津中山路", type: "road", lat: 39.1567, lng: 117.2028, address: "天津市河北区", description: "天津重要的商业街，历史悠久。中山路见证了天津从北方商埠到现代化城市的发展历程，街道两旁既有欧式建筑，也有现代商业设施。这里是天津中西文化交融的体现，展现了天津独特的城市风貌。", city: "天津", image: "" },
    { name: "重庆中山路", type: "road", lat: 29.5614, lng: 106.5534, address: "重庆市渝中区", description: "重庆重要的商业街，地形独特。中山路依山而建，体现了重庆山城特色，街道两旁商铺林立，热闹非凡。这里是重庆商业文化的重要代表，展现了重庆人坚韧不拔的城市精神。", city: "重庆", image: "" },
    { name: "沈阳中山路", type: "road", lat: 41.7938, lng: 123.4344, address: "沈阳市和平区", description: "沈阳重要的商业街，历史悠久。中山路见证了沈阳从清朝陪都到现代化工业城市的发展历程，街道两旁既有历史建筑，也有现代商业设施。这里是沈阳商业文化的重要代表，体现了东北城市的独特魅力。", city: "沈阳", image: "" },
    { name: "大连中山路", type: "road", lat: 38.9154, lng: 121.6162, address: "大连市沙河口区", description: "大连重要的商业街，风景优美。中山路沿海而建，体现了大连海滨城市的特色，街道两旁绿树成荫，商铺林立。这里是大连商业文化的重要代表，展现了浪漫之都的城市风貌。", city: "大连", image: "" },
    { name: "长沙中山路", type: "road", lat: 32.2296, lng: 112.9403, address: "长沙市天心区", description: "长沙重要的商业街，文化底蕴深厚。中山路见证了长沙从楚汉名城到现代化城市的发展历程，街道两旁既有历史建筑，也有现代商铺。这里是长沙商业与文化的交汇点，体现了湖湘文化的独特魅力。", city: "长沙", image: "" },
    { name: "郑州中山路", type: "road", lat: 34.7480, lng: 113.6268, address: "郑州市金水区", description: "郑州重要的商业街，繁华热闹。中山路见证了郑州从交通枢纽到现代化国家中心城市的发展历程，街道两旁商铺林立，是郑州商业文化的重要代表。这里体现了中原文化的深厚底蕴和现代商业的活力。", city: "郑州", image: "" },
    { name: "济南中山路", type: "road", lat: 36.6526, lng: 117.1216, address: "济南市市中区", description: "济南重要的商业街，历史悠久。中山路体现了泉城济南的文化特色，街道两旁既有历史建筑，也有现代商铺。这里是济南商业文化的重要代表，展现了泉城独特的城市魅力。", city: "济南", image: "" },
    { name: "青岛中山路", type: "road", lat: 36.0589, lng: 120.3847, address: "青岛市市南区", description: "青岛著名的商业街，德式建筑风格。中山路见证了青岛从德国租界到现代化海滨城市的发展历程，街道两旁保存着大量德式建筑，是青岛历史文化的重要载体。这里体现了青岛中西文化交融的独特魅力。", city: "青岛", image: "" },
    { name: "厦门中山路", type: "road", lat: 24.4812, lng: 118.0908, address: "厦门市思明区", description: "厦门最繁华的商业街，骑楼建筑特色。中山路是厦门骑楼建筑的集中展示地，街道两旁的骑楼既有南洋风情，又有闽南特色。这里是厦门商业文化的重要代表，展现了海上花园城市的独特魅力。", city: "厦门", image: "" },
    { name: "福州中山路", type: "road", lat: 26.0759, lng: 119.2979, address: "福州市鼓楼区", description: "福州重要的商业街，历史悠久。中山路见证了福州从闽都古城到现代化城市的发展历程，街道两旁既有历史建筑，也有现代商铺。这里是福州商业文化的重要代表，体现了闽都文化的深厚底蕴。", city: "福州", image: "" },
    { name: "南昌中山路", type: "road", lat: 28.6843, lng: 115.8593, address: "南昌市东湖区", description: "南昌重要的商业街，文化底蕴深厚。中山路见证了南昌从洪都古城到现代化英雄城的发展历程，街道两旁既有历史建筑，也有现代商铺。这里是南昌商业文化的重要代表，体现了赣鄱文化的独特魅力。", city: "南昌", image: "" },
    { name: "合肥中山路", type: "road", lat: 31.8220, lng: 117.2286, address: "合肥市庐阳区", description: "合肥重要的商业街，繁华热闹。中山路见证了合肥从江淮小邑到现代化大湖名城的发展历程，街道两旁商铺林立，是合肥商业文化的重要代表。这里体现了合肥科技创新与传统文化融合的城市特色。", city: "合肥", image: "" },
    { name: "深圳中山路", type: "road", lat: 22.5431, lng: 114.0579, address: "深圳市福田区", description: "深圳重要的商业街，现代化程度高。中山路体现了深圳作为改革开放前沿城市的特色，街道两旁高楼林立，商铺云集。这里是深圳商业文化的重要代表，展现了创新之城的活力与魅力。", city: "深圳", image: "" },
    { name: "苏州中山路", type: "road", lat: 31.2989, lng: 120.5853, address: "苏州市姑苏区", description: "苏州重要的商业街，园林特色。中山路体现了苏州园林城市的文化底蕴，街道两旁既有古典建筑，也有现代商铺。这里是苏州商业文化的重要代表，展现了人间天堂的独特魅力。", city: "苏州", image: "" },
    { name: "宁波中山路", type: "road", lat: 29.8683, lng: 121.5440, address: "宁波市海曙区", description: "宁波重要的商业街，历史悠久。中山路见证了宁波从海港商埠到现代化港口城市的发展历程，街道两旁既有历史建筑，也有现代商铺。这里是宁波商业文化的重要代表，体现了甬商文化的深厚底蕴。", city: "宁波", image: "" },
    { name: "石家庄中山路", type: "road", lat: 38.0428, lng: 114.5149, address: "石家庄市桥西区", description: "石家庄重要的商业街，繁华热闹。中山路见证了石家庄从小村庄到现代化省会城市的发展历程，街道两旁商铺林立，是石家庄商业文化的重要代表。这里体现了燕赵文化的深厚底蕴和现代商业的活力。", city: "石家庄", image: "" },
    { name: "太原中山路", type: "road", lat: 37.8706, lng: 112.5489, address: "太原市杏花岭区", description: "太原重要的商业街，历史悠久。中山路见证了太原从晋阳古城到现代化城市的发展历程，街道两旁既有历史建筑，也有现代商铺。这里是太原商业文化的重要代表，体现了三晋文化的深厚底蕴。", city: "太原", image: "" },
    { name: "哈尔滨中山路", type: "road", lat: 45.8038, lng: 126.5350, address: "哈尔滨市南岗区", description: "哈尔滨重要的商业街，欧式建筑风格。中山路体现了哈尔滨作为东方小巴黎的城市特色，街道两旁保存着大量欧式建筑，是哈尔滨历史文化的重要载体。这里展现了冰城独特的城市魅力。", city: "哈尔滨", image: "" },
    { name: "长春中山路", type: "road", lat: 43.8171, lng: 125.3235, address: "长春市朝阳区", description: "长春重要的商业街，现代化程度高。中山路体现了长春作为汽车城和电影城的城市特色，街道两旁规划整齐，商铺云集。这里是长春商业文化的重要代表，展现了北国春城的独特魅力。", city: "长春", image: "" },
    { name: "昆明中山路", type: "road", lat: 25.0389, lng: 102.7183, address: "昆明市五华区", description: "昆明重要的商业街，四季如春。中山路体现了昆明作为春城的城市特色，街道两旁绿树成荫，商铺林立。这里是昆明商业文化的重要代表，展现了彩云之南的独特魅力。", city: "昆明", image: "" },
    { name: "贵阳中山路", type: "road", lat: 26.6470, lng: 106.6302, address: "贵阳市南明区", description: "贵阳重要的商业街，山城特色。中山路体现了贵阳作为林城的城市特色，街道两旁绿树成荫，商铺云集。这里是贵阳商业文化的重要代表，展现了爽爽贵阳的独特魅力。", city: "贵阳", image: "" },
    { name: "南宁中山路", type: "road", lat: 22.8170, lng: 108.3665, address: "南宁市青秀区", description: "南宁重要的商业街，绿城特色。中山路体现了南宁作为绿城的城市特色，街道两旁绿树成荫，商铺林立。这里是南宁商业文化的重要代表，展现了壮乡首府的独特魅力。", city: "南宁", image: "" },
    { name: "海口中山路", type: "road", lat: 20.0458, lng: 110.2009, address: "海口市龙华区", description: "海口重要的商业街，热带风情。中山路体现了海口作为滨海旅游城市的特色，街道两旁既有骑楼建筑，也有现代商铺。这里是海口商业文化的重要代表，展现了椰城的热带魅力。", city: "海口", image: "" },
    { name: "兰州中山路", type: "road", lat: 36.0611, lng: 103.8343, address: "兰州市城关区", description: "兰州重要的商业街，黄河风情。中山路体现了兰州作为黄河之都的城市特色，街道两旁商铺林立，热闹非凡。这里是兰州商业文化的重要代表，展现了金城的独特魅力。", city: "兰州", image: "" },
    { name: "西宁中山路", type: "road", lat: 36.6171, lng: 101.7782, address: "西宁市城中区", description: "西宁重要的商业街，高原特色。中山路体现了西宁作为夏都的城市特色，街道两旁商铺云集，是西宁商业文化的重要代表。这里展现了青藏高原门户的独特魅力。", city: "西宁", image: "" },
    { name: "银川中山路", type: "road", lat: 38.4872, lng: 106.2309, address: "银川市兴庆区", description: "银川重要的商业街，塞上江南。中山路体现了银川作为塞上江南的城市特色，街道两旁商铺林立，是银川商业文化的重要代表。这里展现了凤城的独特魅力。", city: "银川", image: "" },
    { name: "乌鲁木齐中山路", type: "road", lat: 43.8256, lng: 87.6168, address: "乌鲁木齐市天山区", description: "乌鲁木齐重要的商业街，西域风情。中山路体现了乌鲁木齐作为丝绸之路重镇的城市特色，街道两旁商铺云集，是乌鲁木齐商业文化的重要代表。这里展现了亚心之都的独特魅力。", city: "乌鲁木齐", image: "" },
    { name: "拉萨中山路", type: "road", lat: 29.6525, lng: 91.1721, address: "拉萨市城关区", description: "拉萨重要的商业街，高原圣城。中山路体现了拉萨作为日光城的城市特色，街道两旁既有传统建筑，也有现代商铺。这里是拉萨商业文化的重要代表，展现了雪域高原的独特魅力。", city: "拉萨", image: "" },
    { name: "呼和浩特中山路", type: "road", lat: 40.8414, lng: 111.7519, address: "呼和浩特市回民区", description: "呼和浩特重要的商业街，草原风情。中山路体现了呼和浩特作为青城的城市特色，街道两旁商铺林立，是呼和浩特商业文化的重要代表。这里展现了草原之都的独特魅力。", city: "呼和浩特", image: "" }
];

const API_KEY = 'RFX3GyHAgRkCvE8MgDnlAI1ohlCbcdIA';

let map;
let markers = [];
let currentFilter = 'all';

function loadBaiduMapScript() {
    const encodedApiKey = encodeURIComponent(API_KEY);
    const script = document.createElement('script');
    script.src = `https://api.map.baidu.com/api?v=3.0&ak=${encodedApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

function initMap() {
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);
    map.enableScrollWheelZoom(true);
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    }));

    addMarkers();
    updateStats();
    renderLocationList();
}

function addMarkers() {
    locations.forEach((location, index) => {
        const point = new BMap.Point(location.lng, location.lat);
        const marker = new BMap.Marker(point);
        
        const icon = new BMap.Icon(
            location.type === 'park' ? 
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzI4YTc0NSI+PHBhdGggZD0iTTEyIDJMNCAxMmgxNkwxMiAyeiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTQiIHI9IjMiLz48L3N2Zz4=' :
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwNzNmZiI+PHBhdGggZD0iTTAgMTJoMjR2MmgtMjR6Ii8+PHBhdGggZD0iTTAgOGgyNHYyaC0yNHoiLz48cGF0aCBkPSJNMCAxNmgyNHYyaC0yNHoiLz48L3N2Zz4=',
            new BMap.Size(32, 32),
            {
                anchor: new BMap.Size(16, 32)
            }
        );
        marker.setIcon(icon);

        const infoWindow = new BMap.InfoWindow(
            `<div class="info-window">
                <h3>${location.name}</h3>
                <div class="info-row">
                    <span class="info-label">类型：</span>
                    <span class="info-value">${location.type === 'park' ? '🏞️ 中山公园' : '🛣️ 中山路'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">城市：</span>
                    <span class="info-value">${location.city}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">地址：</span>
                    <span class="info-value">${location.address}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">介绍：</span>
                    <span class="info-value">${location.description}</span>
                </div>
            </div>`,
            {
                width: 320,
                height: 200
            }
        );

        marker.addEventListener('click', function() {
            map.openInfoWindow(infoWindow, point);
            highlightLocation(index);
        });

        marker.customData = { index, type: location.type };
        markers.push(marker);
        map.addOverlay(marker);
    });
}

function updateStats() {
    const parkCount = locations.filter(l => l.type === 'park').length;
    const roadCount = locations.filter(l => l.type === 'road').length;
    
    document.getElementById('parkCount').textContent = parkCount;
    document.getElementById('roadCount').textContent = roadCount;
    document.getElementById('totalCount').textContent = locations.length;
}

function renderLocationList() {
    const listContainer = document.getElementById('locationList');
    listContainer.innerHTML = '';

    const filteredLocations = currentFilter === 'all' 
        ? locations 
        : locations.filter(l => l.type === currentFilter);

    filteredLocations.forEach((location, index) => {
        const originalIndex = locations.indexOf(location);
        const item = document.createElement('div');
        item.className = 'location-item';
        item.innerHTML = `
            <div class="name">${location.name}</div>
            <div class="address">${location.address}</div>
            <span class="type ${location.type === 'park' ? 'type-park' : 'type-road'}">
                ${location.type === 'park' ? '🏞️ 中山公园' : '🛣️ 中山路'}
            </span>
        `;
        
        item.addEventListener('click', () => {
            const point = new BMap.Point(location.lng, location.lat);
            map.centerAndZoom(point, 15);
            markers[originalIndex].dispatchEvent('click');
        });

        listContainer.appendChild(item);
    });
}

function highlightLocation(index) {
    const items = document.querySelectorAll('.location-item');
    items.forEach(item => item.style.background = 'white');
    
    const filteredLocations = currentFilter === 'all' 
        ? locations 
        : locations.filter(l => l.type === currentFilter);
    
    const filteredIndex = filteredLocations.indexOf(locations[index]);
    if (filteredIndex >= 0 && items[filteredIndex]) {
        items[filteredIndex].style.background = '#e7f3ff';
        items[filteredIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.type;
            renderLocationList();
            
            markers.forEach(marker => {
                if (currentFilter === 'all' || marker.customData.type === currentFilter) {
                    marker.show();
                } else {
                    marker.hide();
                }
            });
        });
    });
}

window.onload = function() {
    loadBaiduMapScript();
    setupFilterButtons();
};