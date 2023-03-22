import socket
from dnslib import *

DNS_PORT = 53

dns_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
dns_socket.bind(('', DNS_PORT))

print(f"DNS-Server hört auf Port {DNS_PORT}...")

def dns_forward(domain):
    try:
        ip_address = socket.gethostbyname(domain)
        return ip_address
    except socket.error:
        return '185.199.111.153' #Error 404

while True:
    data, address = dns_socket.recvfrom(1024)

    dns_message = DNSRecord.parse(data)
    dns_request = str(dns_message.q.qname)
    
    dns_answer = dns_forward(dns_request)
    
    client_ip = address[0]
    client_port = address[1]

    if client.ip == '84.169.93.152':
        dns_response = DNSRecord(DNSHeader(id=dns_message.header.id, qr=1, aa=1, ra=1), q=dns_message.q)
        dns_response.add_answer(RR(dns_request, QTYPE.A, rdata=A(dns_answer)))
        dns_socket.sendto(dns_response.pack(), address)
    
    print(f"DNS-Anfrage von {client_ip} mit Port {client_port} für {dns_request} die Antwort ist {dns_answer}")




















^G Help          ^O Write Out     ^W Where Is      ^K Cut           ^T Execute       ^C Location      M-U Undo
^X Exit          ^R Read File     ^\ Replace       ^U Paste         ^J Justify       ^/ Go To Line    M-E Redo
