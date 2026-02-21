def ips_between(start, end):
    def ip_to_number(ip):
        parts = ip.split('.')
        return (int(parts[0]) * 256**3 +
                int(parts[1]) * 256**2 +
                int(parts[2]) * 256 +
                int(parts[3]))

    return ip_to_number(end) - ip_to_number(start)
