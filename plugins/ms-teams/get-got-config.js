import { HttpProxyAgent, HttpsProxyAgent } from 'hpagent';

// Copied from Rob Wu's great proxy-from-env library: https://github.com/Rob--W/proxy-from-env/blob/96d01f8fcfdccfb776735751132930bbf79c4a3a/index.js#L62
const shouldProxy = (url, NO_PROXY) => {
  const DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443,
  };
  const parsedUrl =
    typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'))
      ? new URL(url)
      : url || {};
  let proto = parsedUrl.protocol;
  let hostname = parsedUrl.host;
  let { port } = parsedUrl;
  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
    return ''; // Don't proxy URLs without a valid scheme or host.
  }

  proto = proto.split(':', 1)[0];
  // Stripping ports in this way instead of using parsedUrl.hostname to make
  // sure that the brackets around IPv6 addresses are kept.
  hostname = hostname.replace(/:\d*$/, '');
  port = Number.parseInt(port, 10) || DEFAULT_PORTS[proto] || 0;

  if (!NO_PROXY) {
    return true; // Always proxy if NO_PROXY is not set.
  }

  if (NO_PROXY === '*') {
    return false; // Never proxy if wildcard is set.
  }

  return NO_PROXY.split(/[,\s]/).every((proxy) => {
    if (!proxy) {
      return true; // Skip zero-length hosts.
    }

    const parsedProxy = proxy.match(/^(.+):(\d+)$/);
    let parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    const parsedProxyPort = parsedProxy ? Number.parseInt(parsedProxy[2], 10) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true; // Skip if ports don't match.
    }

    if (!/^[.*]/.test(parsedProxyHostname)) {
      // No wildcards, so stop proxying if there is an exact match.
      return hostname !== parsedProxyHostname;
    }

    if (parsedProxyHostname.charAt(0) === '*') {
      // Remove leading wildcard.
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }

    // Stop proxying if the hostname ends with the no_proxy host.
    return !hostname.endsWith(parsedProxyHostname);
  });
}

// Copied from https://github.com/semantic-release/gitlab/blob/master/lib/resolve-config.js
const getProxyConfiguration = (url, HTTP_PROXY, HTTPS_PROXY, NO_PROXY) => {
  const sharedParameters = {
    keepAlive: true,
    keepAliveMsecs: 1000,
    maxSockets: 256,
    maxFreeSockets: 256,
    scheduling: 'lifo',
  };

  if (shouldProxy(url, NO_PROXY)) {
    if (HTTP_PROXY && url.startsWith('http://')) {
      return {
        agent: {
          http: new HttpProxyAgent({
            ...sharedParameters,
            proxy: HTTP_PROXY,
          }),
        },
      };
    }

    if (HTTPS_PROXY && url.startsWith('https://')) {
      return {
        agent: {
          https: new HttpsProxyAgent({
            ...sharedParameters,
            proxy: HTTPS_PROXY,
          }),
        },
      };
    }
  }

  return {};
}

/**
 * Gets the got configuration.
 * @returns {*} The got configuration.
 */
export default (url, HTTP_PROXY, HTTPS_PROXY, NO_PROXY) => {
  const headers = { 'Content-Type': 'application/json' };
  const proxy = getProxyConfiguration(url, HTTP_PROXY, HTTPS_PROXY, NO_PROXY);

  return { headers, ...proxy };
};
