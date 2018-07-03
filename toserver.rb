require 'socket'
require 'net/http'
require 'openssl'

remote = ARGV[0] || "localhost"
assess_token = ARGV[1] || "key"

socket = TCPSocket.new 'localhost', 8900

#line = 'A0789B000C0000D0000E0000F0000G0000H0000I0000J0000K0000L0209M703N10233'
#mac = OpenSSL::HMAC.hexdigest("SHA256", assess_token, line)
#http = Net::HTTP.new(remote, 1207)
#http.use_ssl = false
#res = http.get("/put/#{line}", { x_signture: mac })

#puts res.body
#puts mac

while line = socket.gets.delete("\r\n")
#  puts line if line.length == 72
  if line.length == 72
    mac = OpenSSL::HMAC.hexdigest("SHA256", assess_token, line)
    http = Net::HTTP.new(remote, 1207)
    http.use_ssl = false

    begin
      res = http.get("/put/#{line}", { x_signture: mac })
      #puts res.body
#      Net::HTTP.get(remote, "/put/#{line}", '1207') if line.length == 72
    rescue Exception => e
      puts e.message
      puts e.backtrace.inspect
    end
  end
end

s.close

