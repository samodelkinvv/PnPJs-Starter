Connect-PnPOnline -Url http://sp2013:9216 -CurrentCredentials
Apply-PnPProvisioningTemplate .\Provisioning.xml
Disconnect-PnPOnline