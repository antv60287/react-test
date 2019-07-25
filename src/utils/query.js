export function getQueryParams(data) {
  const params = Object.keys(data).map(function (k) {
    if (typeof data[k] === 'object') {
      data[k] = JSON.stringify(data[k]);
    };
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
  return '?' + params;
}

export default { getQueryParams };