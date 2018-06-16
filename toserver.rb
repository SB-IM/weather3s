require 'socket'
require 'net/http'

remote = ARGV[0] || "localhost"

socket = TCPSocket.new 'localhost', 8900

while line = socket.gets.delete("\r\n")
  puts line if line.length == 72

  begin
    Net::HTTP.get(remote, "/put/#{line}", '1207') if line.length == 72
  rescue Exception => e
    puts e.message
    puts e.backtrace.inspect
  end

end

s.close

