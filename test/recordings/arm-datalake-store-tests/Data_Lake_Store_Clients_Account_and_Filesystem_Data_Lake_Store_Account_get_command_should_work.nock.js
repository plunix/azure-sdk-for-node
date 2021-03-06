// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls2879?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls2879.azuredatalakestore.net\",\"accountId\":\"bf72cf14-9ca5-4af6-912c-78be6473772f\",\"creationTime\":\"2016-11-11T21:54:41.2817266Z\",\"lastModifiedTime\":\"2016-11-11T21:54:41.2817266Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls2879\",\"name\":\"xplattestadls2879\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '700',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1015382f-5111-4521-9680-ac186bbb72ca',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2c260192-b9c2-4718-9929-792694189f6c',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215544Z:2c260192-b9c2-4718-9929-792694189f6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls2879?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls2879.azuredatalakestore.net\",\"accountId\":\"bf72cf14-9ca5-4af6-912c-78be6473772f\",\"creationTime\":\"2016-11-11T21:54:41.2817266Z\",\"lastModifiedTime\":\"2016-11-11T21:54:41.2817266Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls2879\",\"name\":\"xplattestadls2879\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '700',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1015382f-5111-4521-9680-ac186bbb72ca',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2c260192-b9c2-4718-9929-792694189f6c',
  'x-ms-routing-request-id': 'WESTUS2:20161111T215544Z:2c260192-b9c2-4718-9929-792694189f6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:44 GMT',
  connection: 'close' });
 return result; }]];