cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.awokenwell.proximity/www/proximity.js",
        "id": "org.awokenwell.proximity.proximity",
        "pluginId": "org.awokenwell.proximity",
        "clobbers": [
            "navigator.proximity"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "org.awokenwell.proximity": "1.1.0"
}
// BOTTOM OF METADATA
});