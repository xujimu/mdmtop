function FindProxyForURL(url, host) {
	if (shExpMatch(host, "iprofiles.apple.com")) {
	  return "PROXY 8.8.8.8:53";
	}
	return "DIRECT";
}