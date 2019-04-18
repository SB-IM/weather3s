# weatherS
weather station simple service 气象站简单服务。实时天气信息。

#### 淘宝模块
https://item.taobao.com/item.htm?id=21348003785

专业测量数据格式：

A0789B000C0000D0000E0000F0000G0000H0000I0000J0000K0000L0209M703N10233

每0.5秒输出71个字节，包括数据末尾的换行符（OD,OA）
> 0x0d => /r, carrige return
>
> 0x0a => /n, new line


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

```
传感器 -> 天气模块-> serial -> socket -> http -> database
```

## serial 转 socket 中间件
https://sourceforge.net/projects/ser2net/


```
yarn install

cd dashboard
yarn install
yarn build
```

### Interface
Interface       | Function             | Other
--------------- | -------------------- | -------
GET: /put/:data | Upload data          | Requirement Hmac
GET: /get       | Get the latest data  | Not cors

### 代码分为三部分，可分开部署
0. ser2net 配置文件：`8900:raw:0:/dev/ttyS0:2400 8DATABITS NONE 1STOPBIT` 然后 `systemctl restart ser2net.service`
1. toserver.rb 连接ser2net 的 socket 端口，启动时可指定hmac密钥 `./toserver.rb localhost <token>`
2. 主体是用 `express.js` 写的服务端。启动是载入密钥 eg: `WEATHER_TOKEN='<token>' pm2 start weather:index.js --update-env`
3. dashboard/ 目录下属于单独的模块，使用服务端提供的数据接口，需要编译成静态文件才能使用。`yarn install && yarn build`
4. 数据库是 `mongodb`

### Test 上传数据接口
```sh
curl -H "x_signture: $(echo -n "A0789B000C0000D0000E0000F0000G0000H0000I0000J0000K0000L0209M703N10233" | openssl dgst -sha256 -hmac "key" | cut -d ' ' -f 2)" localhost:1207/put/A0789B000C0000D0000E0000F0000G0000H0000I0000J0000K0000L0209M703N10233
```

