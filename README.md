# Sample steps to deploy on Azure from local git repo

* Create a new Mobile App via the portal.
* In the App's ```Settings / Deployment source``` select ```Local git repository```.
* Also set ```User Credentials``` if required. Not this appears to be per Azure user account, not per App.
* Add the ```git clone url``` listed on the Azure App overview blade as a git remote. eg ```git remote add azure <git clone url>```.
* Make a change and commit (or make an empty commit with ```--allow-empty)```
* Push to the new remote eg ```git push azure master```. Progress is logged to the console and ```Settings / Deployment Source``` shows all deployments.
* Add a SQL database and server to hold it.
* In ```Settings / Data Connections``` conect up your new database.
* Browse to the url listed on the App overview blade to see the deployed site.
* Use the web app.

# Debugging notes

## Run on local dev PC
* Locally connect to the Azure SQL DB by setting the correct DB connection string. This can be done via an environment variable (found in the App's ```tools / kudu / environment```) or a ```data:``` literal object in ```azureMobile.js```. See this [blog post](https://shellmonger.com/2016/04/01/30-days-of-zumo-v2-azure-mobile-apps-day-2-local-development/) for details.
* Alternatively, use a local SQLite 3 database by setting ```data:``` in ```azureMobile.js```as desribed in [data providers docs](http://azure.github.io/azure-mobile-apps-node/module-azure-mobile-apps_configuration_Data%2520Providers.html).
* Add a ```logging:``` section to ```azureMobile.js``` to redirect debug output to the console. Details can be found in this [blog post](https://shellmonger.com/2016/04/01/30-days-of-zumo-v2-azure-mobile-apps-day-2-local-development/).
* Add ```azureMobile.js``` to ```.gitignore``` as it contains private information.

## Get visibility into the deployed App
* Turn on logs in the Portal App's ```settings / diagnostic logs```.
* View logs in the App's ```tools / log streaming``` console or by using the Azure CLI commands ```log``` and ```tail```.
* Interact in ```tools / console``` but note this is not the exact deploymnet environment (eg node version may be different).
