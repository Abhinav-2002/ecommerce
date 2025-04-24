const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AWzfJqDNgdgi35PghhRgrRMICSiaS8a5c-x6kVkgqA5OonglWRCOHYJfI6Hwd-lH00hra7DYKpGtaiGi",
  client_secret: "EHATzb07VN-RbPeai5klCw8dEgUXWdgLVc1Xj2x1LngW9POkFD2_wHMAgG4xMisCZ-7OCK8-cxQcWGkM",
});

module.exports = paypal;
