require 'socket'
require 'net/http'

socket = TCPSocket.new 'localhost', 8900

while line = socket.gets.delete("\r\n")
  puts line if line.length == 72
  Net::HTTP.get('localhost', "/put/#{line}", '1207') if line.length == 72
end

s.close

