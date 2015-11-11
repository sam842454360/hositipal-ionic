//
// Definitions for schema: http://service/
//  http://localhost:9000/Service/PatientService?xsd=1
//
//
// Constructor for XML Schema item {http://service/}getAllPatients
//
function service__getAllPatients () {
    this.typeMarker = 'service__getAllPatients';
}

//
// Serialize {http://service/}getAllPatients
//
function service__getAllPatients_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

service__getAllPatients.prototype.serialize = service__getAllPatients_serialize;

function service__getAllPatients_deserialize (cxfjsutils, element) {
    var newobject = new service__getAllPatients();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://service/}getAllPatientsResponse
//
function service__getAllPatientsResponse () {
    this.typeMarker = 'service__getAllPatientsResponse';
    this._return = null;
}

//
// accessor is service__getAllPatientsResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is service__getAllPatientsResponse.prototype.setReturn
//
function service__getAllPatientsResponse_getReturn() { return this._return;}

service__getAllPatientsResponse.prototype.getReturn = service__getAllPatientsResponse_getReturn;

function service__getAllPatientsResponse_setReturn(value) { this._return = value;}

service__getAllPatientsResponse.prototype.setReturn = service__getAllPatientsResponse_setReturn;
//
// Serialize {http://service/}getAllPatientsResponse
//
function service__getAllPatientsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      xml = xml + '<return>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._return);
      xml = xml + '</return>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

service__getAllPatientsResponse.prototype.serialize = service__getAllPatientsResponse_serialize;

function service__getAllPatientsResponse_deserialize (cxfjsutils, element) {
    var newobject = new service__getAllPatientsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setReturn(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Definitions for schema: null
//  http://localhost:9000/Service/PatientService?wsdl#types1
//
//
// Definitions for service: {http://service/}PatientServiceService
//

// Javascript for {http://service/}PatientService

function service__PatientService () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://service/}getAllPatients'] = service__getAllPatients_serialize;
    this.globalElementDeserializers['{http://service/}getAllPatients'] = service__getAllPatients_deserialize;
    this.globalElementSerializers['{http://service/}getAllPatientsResponse'] = service__getAllPatientsResponse_serialize;
    this.globalElementDeserializers['{http://service/}getAllPatientsResponse'] = service__getAllPatientsResponse_deserialize;
    this.globalElementSerializers['{http://service/}getAllPatients'] = service__getAllPatients_serialize;
    this.globalElementDeserializers['{http://service/}getAllPatients'] = service__getAllPatients_deserialize;
    this.globalElementSerializers['{http://service/}getAllPatientsResponse'] = service__getAllPatientsResponse_serialize;
    this.globalElementDeserializers['{http://service/}getAllPatientsResponse'] = service__getAllPatientsResponse_deserialize;
}

function service__getAllPatients_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling service__getAllPatientsResponse_deserializeResponse');
     responseObject = service__getAllPatientsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

service__PatientService.prototype.getAllPatients_onsuccess = service__getAllPatients_op_onsuccess;

function service__getAllPatients_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

service__PatientService.prototype.getAllPatients_onerror = service__getAllPatients_op_onerror;

//
// Operation {http://service/}getAllPatients
// Wrapped operation.
//
function service__getAllPatients_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getAllPatients_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAllPatients_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAllPatients_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

service__PatientService.prototype.getAllPatients = service__getAllPatients_op;

function service__getAllPatients_serializeInput(cxfjsutils, args) {
    var wrapperObj = new service__getAllPatients();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://service/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAllPatients', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

service__PatientService.prototype.getAllPatients_serializeInput = service__getAllPatients_serializeInput;

function service__getAllPatientsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = service__getAllPatientsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function service__PatientService_service__PatientServicePort () {
  this.url = 'http://localhost:1337/localhost:9000/Service/PatientService';
}
service__PatientService_service__PatientServicePort.prototype = new service__PatientService;
