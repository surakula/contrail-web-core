/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

var config = {};

config.orchestration = {};
config.orchestration.Manager = 'openstack';

/****************************************************************************
 * This boolean flag indicates to communicate with Orchestration
 * modules(networkManager, imageManager, computeManager,
 * storageManager), should the webServer communicate using the
 * ip/port/authProtocol/apiVersion as specified in this file, or as returned
 * from auth catalog list.
 * Note: config.identityManager is not controlled by this boolean
 * flag.
 *
 * true  - These values should be taken from this config
 *         file.
 * false - These values should be taken from auth catalog list 
 *
 * Default: false
 ****************************************************************************/
config.orchestrationModuleEndPointFromConfig = false;

/****************************************************************************
 * This boolean flag indicates to communicate with contrail services Api Server
 * and Analytics Server, should the webServer communicate using the
 * ip/port/authProtocol as specified in this file, or as returned  from auth
 * catalog list.
 *
 * true  - These values should be taken from this config
 *         file.
 * false - These values should be taken from auth catalog list
 *
 * Note: If this flag is set as false, we must have two services ApiServer and
 * OpServer, variables as defined in config.endpoints to be provisioned in
 * keystone
 *
 * Default: true
 ****************************************************************************/
config.contrailEndPointFromConfig = true;

/****************************************************************************
 * This boolean flag specifies wheather region list should be taken from config
 * file or from keystone endpoint
 * true  - If set as true, then keystone endpoint is taken from
 *         config.regions
 * false - If set as false, then keystone endpoint is taken from
 *         config.identityManager
 *
 ****************************************************************************/
config.regionsFromConfig = false;

/****************************************************************************
 * Below are the configs for Api Server and analytics Service type & name as
 * provisioned in keystone
 *
 * apiServiceType - Service Type for apiServer, default value is apiServer
 * opServiceType  - Service Type for analytics, default value is opServer
 *
 * Note: If there are multiple api server or analytices nodes in a specific
 *       region, then provision service type/name as ApiServer0, ApiServer1,
 *       ApiServer2 etc, similarly for analytics node: OpServer0, OpServer1,
 *       OpServer2 etc.
 *
 ****************************************************************************/
config.endpoints = {};
config.endpoints.apiServiceType = 'ApiServer';
config.endpoints.opServiceType = 'OpServer';

/****************************************************************************
 * Mapping to region name with keystone endpoint
 *
 * For example:
 * config.regions.RegionOne = 'http://nodeIp:5000/v2.0';
 * config.regions.RegionTwo = 'http://nodeIp:5000/v3';
 *
 ****************************************************************************/
config.regions = {};
config.regions.RegionOne = 'http://127.0.0.1:5000/v2.0';

/****************************************************************************
 * This boolean flag indicates if orchestrationModuleEndPointFromConfig or
 * contrailEndPointFromConfig is set as false,
 * then to take IP/Port/Protocol/Version information from auth catalog, 
 * should publicURL OR internalURL will be used.
 *
 * true  - publicURL in endpoint will be used to retrieve IP/Port/Protocol/
 *         Version information
 * false - internalURL in endpoint will be used to retrieve
 *         IP/Port/Protocol/Version information
 *
 * NOTE: if config.orchestrationModuleEndPointFromConfig is set as true, then
 *       this flag does not have any effect on orchestration modules.
 *       if config.contrailEndPointFromConfig is set as true, then this flag
 *       does not have effect on contrail modules as defined in config.endpoints
 *
*****************************************************************************/
config.serviceEndPointTakePublicURL = true;

/****************************************************************************
 * Below are the config options for all Orchestration Modules below:
 *  - networkManager
 *  - imageManager
 *  - computeManager
 *  - identityManager
 *  - storageManager
 *  - cnfg
 *  - analytics
 *
 * Options:
 * ip:
 *      IP to connect to for this Server.
 * port:
 *      Port to connect to for this server
 * authProtocol:        
 *      Specify authProtocol either 'http' or 'https'
 * apiVersion:
 *      REST API Version for this server to connect to.
 *      Specify a list of Versions in array notation.
 *      Below are the supported list of apiVersion for the modules as of now:
 *      imageManager    -   ['v1', 'v2']
 *      computeManager  -   ['v1.1', 'v2']
 *      identityManager -   ['v2.0']
 *      storageManager  -   ['v1']
 *
 *      Not applicable for cnfg/analytics as of now
 * strictSSL:
 *      If true, requires certificates to be valid
 * ca: 
 *      An authority certificate to check the remote host against,
 *      if you do not want to specify then use ''
*****************************************************************************/
config.networkManager = {};
config.networkManager.ip = '127.0.0.1';
config.networkManager.port = '9696'
config.networkManager.authProtocol = 'http';
config.networkManager.apiVersion = [];
config.networkManager.strictSSL = false;
config.networkManager.ca = '';

config.imageManager = {};
config.imageManager.ip = '127.0.0.1';
config.imageManager.port = '9292';
config.imageManager.authProtocol = 'http';
config.imageManager.apiVersion = ['v1', 'v2'];
config.imageManager.strictSSL = false;
config.imageManager.ca = '';

config.computeManager = {};
config.computeManager.ip = '127.0.0.1';
config.computeManager.port = '8774';
config.computeManager.authProtocol = 'http';
config.computeManager.apiVersion = ['v1.1', 'v2'];
config.computeManager.strictSSL = false;
config.computeManager.ca = '';

config.identityManager = {};
config.identityManager.ip = '127.0.0.1';
config.identityManager.port = '5000';
config.identityManager.authProtocol = 'http';
/******************************************************************************
 * Note: config.identityManager.apiVersion is not controlled by boolean flag 
 * config.orchestrationModuleEndPointFromConfig. If specified apiVersion here,
 * then these API versions will be used while using REST API to identityManager.
 * If want to use with default apiVersion(v2.0), then can specify it as 
 * empty array.
******************************************************************************/
config.identityManager.apiVersion = ['v2.0'];
config.identityManager.strictSSL = false;
config.identityManager.ca = '';
config.identityManager.urlPrefix = '';
/******************************************************************************
 * The hash algorithm to use for PKI tokens. This can be set to any algorithm
 * that keystone hashlib supports, this should match with value of
 * hash_algorithm in keystone.conf.
 *
 * default: 'md5'
 *
******************************************************************************/
config.identityManager.pkiTokenHashAlgorithm = 'md5';

config.storageManager = {};
config.storageManager.ip = '127.0.0.1';
config.storageManager.port = '8776';
config.storageManager.authProtocol = 'http';
config.storageManager.apiVersion = ['v1'];
config.storageManager.strictSSL = false;
config.storageManager.ca = '';

// VNConfig API server and port.
config.cnfg = {};
config.cnfg.server_ip = ['127.0.0.1'];
config.cnfg.server_port = '8082';
config.cnfg.authProtocol = 'http';
config.cnfg.strictSSL = false;
config.cnfg.ca = '';
config.cnfg.statusURL = "/global-system-configs";

// Analytics API server and port.
config.analytics = {};
config.analytics.server_ip = ['127.0.0.1'];
config.analytics.server_port = '8081';
config.analytics.authProtocol = 'http';
config.analytics.strictSSL = false;
config.analytics.ca = '';
config.analytics.statusURL = "/analytics/uves/bgp-peers";

//DNS API Server and port.
/* Please note: being introspect port, SSL options for dns should come from
   config.introspect.ssl configuration
 */
config.dns = {};
config.dns.server_ip = ['127.0.0.1'];
config.dns.server_port = '8092';
config.dns.statusURL = "/Snh_PageReq?x=AllEntries%20VdnsServersReq";

/* Job Server */
config.jobServer = {};
config.jobServer.server_ip = '127.0.0.1';
config.jobServer.server_port = '3000';

/* Upload/Download Directory */
config.files = {};
config.files.download_path = '/tmp';

/* Cassandra Server */
config.cassandra = {};
config.cassandra.server_ips = ['127.0.0.1'];
config.cassandra.server_port = '9042';
config.cassandra.enable_edit = false;
config.cassandra.username = '';
config.cassandra.password = '';

/* KUE Job Scheduler */
config.kue = {};
config.kue.ui_port = '3002'

/* IP List to listen on */
config.webui_addresses = ['0.0.0.0'];

/* Is insecure access to WebUI? 
 * If set as false, then all http request will be redirected
 * to https, if set true, then no https request will be processed, but only http
 * request
 */
config.insecure_access = false;

// HTTP port for NodeJS Server.
config.http_port = '8080';

// HTTPS port for NodeJS Server.
config.https_port = '8143';

// Activate/Deactivate Login.
config.require_auth = false;

/* Number of node worker processes for cluster. */
config.node_worker_count = 1;

/* Number of Parallel Active Jobs with same type */
config.maxActiveJobs = 10;

/* Redis DB index for Web-UI */
config.redisDBIndex = 3;

/* WebUI Redis Server */
config.redis_server_port = '6379';
config.redis_server_ip = '127.0.0.1';
config.redis_dump_file = '/var/lib/redis/dump-webui.rdb';

/* Logo File: Use complete path of logo file location */
config.logo_file = '/usr/src/contrail/contrail-web-core/webroot/img/juniper-networks-logo.png';

/* Favicon File: Use complete path of favicon file location */
config.favicon_file = '/usr/src/contrail/contrail-web-core/webroot/img/juniper-networks-favicon.ico';

config.featurePkg = {};
/* Add new feature Package Config details below */
config.featurePkg.webController = {};
config.featurePkg.webController.path = '/usr/src/contrail/contrail-web-controller';
config.featurePkg.webController.enable = true;

/* Enable/disable Stat Query Links in Sidebar*/
config.qe = {};
config.qe.enable_stat_queries = false;

/* Configure level of logs, supported log levels are:
   debug, info, notice, warning, error, crit, alert, emerg
 */
config.logs = {};
config.logs.level = 'debug';

/******************************************************************************
 * Container List
 * This list is used to fetch contrail-status and openstack-status in docker
 * environment
 *
 ******************************************************************************/
config.docker = {};
config.docker.container_list = ["controller", "analytics", "analyticsdb"];

/******************************************************************************
 * Boolean flag getDomainProjectsFromApiServer indicates wheather the project
 * list should come from API Server or Identity Manager.
 * If Set 
 *      - true, then project list will come from API Server
 *      - false, then project list will come from Identity Manager
 * Default: false
 *
******************************************************************************/
config.getDomainProjectsFromApiServer = false;

/******************************************************************************
 * Below are the config options to bypass authentication when
 * config.orchestration.Manager is set to 'none', specifies array of username,
 * password details.
 *
 * Add new user details in next array index.
 *
 * username - This username required while login.
 * password - This password required while login.
 * roles    - User role, options are 'cloudAdmin' and 'member';
 *
 * NOTE: This username and password is not used to authenticate using some
 *       identity manager.
 *       If config.orchestration.Manager is set other than 'none', this config
 *       option does not have any effect.
 *
 ******************************************************************************/
config.staticAuth = [];
config.staticAuth[0] = {};
config.staticAuth[0].username = 'admin';
config.staticAuth[0].password = 'contrail123';
config.staticAuth[0].roles = ['cloudAdmin'];

/*****************************************************************************
 * Below are the mappings from external roles provided by identity manager
 * to UI roles. Currently from UI, we have only cloudAdmin role.
 *
 * If any of the external role matches with the list as mapped with cloudAdmin,
 * the user is treated as cloudAdmin, else if any of the external member role
 * matches with the UI member role, user is treated as member.
 *
 * '*' in config.roleMaps.cloudAdmin signifies that if a user role does not
 * match with any role in config.roleMaps.member, then it is treated as
 * non-member role
 *
 * Please note that for orchestration model, no-orch, vcenter and cloudstack, we
 * assume UI role as cloudAdmin
 *
 *****************************************************************************/
config.roleMaps = {};
config.roleMaps.cloudAdmin = ['admin', 'KeystoneAdmin',
    'KeystoneServiceAdmin', 'netadmin', 'sysadmin', '*'];
config.roleMaps.member = ['Member', '_member_'];

/*****************************************************************************
* Below are the delimiter list for physical/logical interface creation.
* Allowed values : [',', ':']
*****************************************************************************/
config.physicaldevices = {};
config.physicaldevices.interface_delimiters = ['.', ':'];

/*****************************************************************************
* Below are the optional feature list which can be enabled/disabled from
* UI Menu.
*
*****************************************************************************/
config.optFeatureList = {};
config.optFeatureList.mon_infra_underlay = false;
config.optFeatureList.mon_infra_mx = false;
config.optFeatureList.query_udd_webController = false;
config.optFeatureList.mon_security_dashboard = true;
/*****************************************************************************
* Below are the configurations used only for ui
*****************************************************************************/
config.ui = {};

/*****************************************************************************
* Below is the flag to indicate UI that node manager is installed or not.
*****************************************************************************/
config.ui.nodemanager = {};
config.ui.nodemanager.installed = true;

/*****************************************************************************
* Below is the delimiter for contrail dropdown.
* By using this able to store more information in dropdown value,
* later used this information in post payload.
* Default value : [';']
*****************************************************************************/
config.ui.dropdown_value_separator = ";";

// vcenter related parameters
config.vcenter = {};
config.vcenter.server_ip = '127.0.0.1';      //vCenter IP
config.vcenter.server_port = '443';             //Port
config.vcenter.authProtocol = 'https';          //http or https
config.vcenter.datacenter = 'vcenter';          //datacenter name
config.vcenter.dvsswitch = 'vswitch';           //dvsswitch name
config.vcenter.strictSSL = false;               //Strictly Validate the certificate
config.vcenter.ca = '';                         //specify the certificate key file

/*****************************************************************************
 * The below configurations descibe the SSL options for connecting to different
 * introspect port.
 *
 * enabled:
 *      Boolean flag to enable or disable ssl while connecting to different
 *      introspect port
 * key:
 *      Private key to use for SSL
 * cert:
 *      Public x509 certificate to use
 * ca:
 *      A string, Buffer or array of strings or Buffers of trusted certificates
 *      in PEM format. These are used to authorize connections.
 * strictSSL:
 *      If true, the server certificate is verified against the list of
 *      supplied CAs
 *****************************************************************************/
config.introspect = {};
config.introspect.ssl = {};
config.introspect.ssl.enabled = false;
config.introspect.ssl.key = '';
config.introspect.ssl.cert = '';
config.introspect.ssl.ca = '';
config.introspect.ssl.strictSSL = false;

/*****************************************************************************
 * The below flag indicates wheather multi_tenancy is enabled or not.
 * If set
 *  true  - Only admin users can login to UI.
 *  false - All users are allowed to login to UI.
 *
 * NOTE: This flag does not implement multi_tenancy at API Server. This flag
 * needs to be in sync with API Server Config file multi_tenancy flag.
 * Default:  true
 */
config.multi_tenancy = {};
config.multi_tenancy.enabled = true;

/*****************************************************************************
 * timeout - Contrail UI Session timeout value in milli seconds
 *
 * NOTE: If the authentication is done via some identity manager (like
 * keystone), and if it is having some token expiry, then session timeout is set
 * to mimimum of token expiry and session.timeout config value
 *
 *****************************************************************************/
config.session = {};
config.session.timeout = 1 * 60 * 60 * 1000;

/*****************************************************************************
 * router_L3Enable flag indicates whether to update external gateway 
 * information on router in neutron.
 *
 * true - Will update external gateway information on router in neutron.
 * false - Will not update external gateway information on router in neutron.
 *****************************************************************************/
config.network = {}
config.network.router_L3Enable = true;

/*****************************************************************************
 * The below section specifies the list of allowed ports when requested through
 * proxy.
 * enabled - if set true, proxy feature will be enabled, else will be disabled, and
 * all proxy request will be responded back with error.
 * vrouter_node_ports - the allowed port list when the ip/host in proxy URL
 *      used has role as vrouter/agent node
 * control_node_ports - the allowed port list when the ip/host in proxy URL
 *      used has role as control node
 * analytics_node_ports - the allowed port list when the ip/host in proxy URL
 *      used has role as analytics node
 * config_node_ports - the allowed port list when the ip/host in proxy URL
 *      used has role as config node
 *
 *
 * allowed_introspect_list_access_by_token - the list of introspect names
 *      (Snh_XXX) allowed to access by keystone token. The token is passed in
 *      X-Auth-Token header along with request.
    Default: Empty list
 *
 * Note: Introspect port must be added inside introspect section, if not a
 *       introspect port, then add that against some key, ex:
 *       config.proxy.vrouter_node_ports = {
 *           "key": "port",
 *           ......
 *       };
 *
 *       The below configuration is used to build the introspect page in
 *       Contrail WebUI.
 *****************************************************************************/
config.proxy = {};
config.proxy.enabled = true;
config.proxy.vrouter_node_ports = {
    "introspect": {
        /* All introspect ports for processes in vrouter/agent */
        "agent"             :"8085",            /* HttpPortAgent */
        "node-manager"      :"8102"             /* HttpPortVRouterNodemgr */
    }
};
config.proxy.control_node_ports = {
    "introspect": {
        /* All introspect ports for processes in control node */
        "control-node"      :"8083",            /* HttpPortControl */
        "dns"               :"8092",            /* HttpPortDns */
        "node-manager"      :"8101"             /* HttpPortControlNodemgr */
    }
};
config.proxy.analytics_node_ports = {
    "analytics"             :"8081",  /* OpServerPort */
    "introspect": {
        /* All introspect ports for processes in analytics */
        "collector"         :"8089",            /* HttpPortCollector */
        "analytics-api"     :"8090",            /* HttpPortOpserver */
        "query-engine"      :"8091",            /* HttpPortQueryEngine */
        "node-manager"      :"8104",            /* HttpPortAnalyticsNodemgr */
        "alarm-generator"   :"5995",            /* HttpPortAlarmGenerator */
        "SNMP-collector"    :"5920",            /* HttpPortSnmpCollector */
        "topology"          :"5921"             /* HttpPortTopology */
    }
};
config.proxy.config_node_ports = {
    "api-server"            :"8082",            /* ApiServerPort */
    "introspect": {
        /* All introspect ports for processes in config */
        "api"               :"8084",            /* HttpPortApiServer */
        "schema"            :"8087",            /* HttpPortSchemaTransformer */
        "service-monitor"   :"8088",            /* HttpPortSvcMonitor */
        "device-manager"    :"8096",            /* HttpPortDeviceManager */
        "node-manager"      :"8100"             /* HttpPortConfigNodemgr */
    }
};
config.proxy.allowed_introspect_list_access_by_token = [];

/*****************************************************************************
 *
 * This section describes the various options for server configurations.
 *
 * ciphers:
 *      A string describing the ciphers to use or exclude. Consult
 *      <http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT> for
 *      details on the format.
 *
 *  key_file:
 *      Private key file path to use for SSL
 *  cert_file:
 *      Public x509 certificate file path to use
 *
 *****************************************************************************/
config.server_options = {};
config.server_options.ciphers =
    'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:' +
    'ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:' +
    'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:' +
    'ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:' +
    'ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:' +
    'AES256-SHA';
config.server_options.key_file = '/etc/contrail/webui_ssl/cs-key.pem';
config.server_options.cert_file = '/etc/contrail/webui_ssl/cs-cert.pem';

/*
 * This is Message of the day(MOTD) configuration
 * file_path: Path of the file where MOTD is specified.
 *
 */
config.motd = {};
config.motd.file_path = "/etc/contrail/contrail-webui-motd";

// Export this as a module.
module.exports = config;
