// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=DELETE&api-version=2016-11-01')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '20dfe647-1299-4254-b34e-96c57cadbe32',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:06 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=DELETE&api-version=2016-11-01')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '20dfe647-1299-4254-b34e-96c57cadbe32',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:06 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/movefile.txt [f5313207-50c3-4ee1-b6bb-081f24ba54b1][2016-11-11T13:56:07.1873641-08:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f5313207-50c3-4ee1-b6bb-081f24ba54b1',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:06 GMT',
  connection: 'close',
  'content-length': '249' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/movefile.txt [f5313207-50c3-4ee1-b6bb-081f24ba54b1][2016-11-11T13:56:07.1873641-08:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f5313207-50c3-4ee1-b6bb-081f24ba54b1',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:06 GMT',
  connection: 'close',
  'content-length': '249' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder02?recursive=true&op=DELETE&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c2a54bdf-b32b-4644-aff5-d4b0e73b8e64',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:07 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder02?recursive=true&op=DELETE&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c2a54bdf-b32b-4644-aff5-d4b0e73b8e64',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:07 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder02 [75a78f51-4829-49ef-ac69-7296600d8683][2016-11-11T13:56:08.0758372-08:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75a78f51-4829-49ef-ac69-7296600d8683',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:07 GMT',
  connection: 'close',
  'content-length': '236' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder02 [75a78f51-4829-49ef-ac69-7296600d8683][2016-11-11T13:56:08.0758372-08:00]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75a78f51-4829-49ef-ac69-7296600d8683',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:56:07 GMT',
  connection: 'close',
  'content-length': '236' });
 return result; }]];