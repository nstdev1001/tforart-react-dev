export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastItem {
  dt: number; // Thời gian (timestamp)
  main: {
    temp: number; // Nhiệt độ hiện tại
    feels_like: number; // Nhiệt độ cảm giác
    temp_min: number; // Nhiệt độ thấp nhất
    temp_max: number; // Nhiệt độ cao nhất
    pressure: number; // Áp suất
    sea_level?: number; // Áp suất mực nước biển (tùy chọn)
    grnd_level?: number; // Áp suất mặt đất (tùy chọn)
    humidity: number; // Độ ẩm
    temp_kf?: number; // Hệ số nhiệt độ (tùy chọn)
  };
  weather: {
    id: number; // Mã thời tiết
    main: string; // Loại thời tiết (ví dụ: Rain, Clouds)
    description: string; // Mô tả thời tiết
    icon: string; // Mã icon thời tiết
  }[];
  clouds: {
    all: number; // Phần trăm mây che phủ
  };
  wind: {
    speed: number; // Tốc độ gió (m/s)
    deg: number; // Hướng gió (độ)
    gust?: number; // Gió giật (tùy chọn)
  };
  visibility: number; // Tầm nhìn (mét)
  pop: number; // Xác suất mưa
  rain?: {
    "3h": number; // Lượng mưa trong 3 giờ (tùy chọn)
  };
  sys: {
    pod: string; // Phân biệt ngày/đêm (d: ngày, n: đêm)
  };
  dt_txt: string; // Thời gian dạng chuỗi (ISO 8601)
}

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: {
    id: number; // ID thành phố
    name: string; // Tên thành phố
    coord: {
      lat: number; // Vĩ độ
      lon: number; // Kinh độ
    };
    country: string; // Quốc gia
  };
}
