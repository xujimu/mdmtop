function FindProxyForURL(url, host) {
	if (shExpMatch(host, "iprofiles.apple.com")) {
	  return "PROXY 0.0.0.0:53";
	}
	return "DIRECT";
}