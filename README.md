# weatherS
weather station 气象站服务。实时天气信息。开发中。。。。


专业测量数据格式：

A0789B000C0000D0000E0000F0000G0000H0000I0000J0000K0000L0209M703N10233

每0.5秒输出71个字节，包括数据末尾的换行符（OD,OA）



数据解析：

数据库字段 | 天气模块返回数据字段 | 实际意义
---------- | -------------------- | -------
wind_direction_AD |A0789：| 风向测量AD值。
wind_direction |B000： | 风向角度值
wind_speed_Hz |C0000：| 实时风速频率 1Hz
wind_speed |D0000: | 实时风速 0.1M/S
wind_speed_before_1m |E0000: | 前一分钟平均的风速 0.1m/s
wind_speed_before_5m |F0000: | 前5分钟的最高风速 0.1m/s
rainfall_count|G0000: | 实时雨量斗数，0-9999 ，循环计数
rainfall_count_before_1m |H0000：| 前一分钟雨量斗数，0-9999
rainfall_before_1m |I0000: | 前1分钟雨量 0.1mm
rainfall_before_1h |J0000: | 前一小时雨量 0.1mm
rainfall_before_1d |K0000: | 前24小时雨量  0.1mm
temperature |L0209：| 温度（摄氏度），0.1度，低于零度，首位显示符号“-”。零下需传感器支持。
humidity |M703： | 湿度 0.1 （0％= 99％）
air_pressure |N10233 | 气压（0.1 hpa）

