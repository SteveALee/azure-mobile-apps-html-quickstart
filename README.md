# Sample steps to deploy on Azure from local git repo

* Create a new Web App
* In ```Settings / Deployment source``` select ```Local git repository```.
* Also set ```User Credentials``` if required. Not this appears to be per Azure user account, not per App
* Add the ```git clone url``` listed on the Azure App overview blade as a git remote. eg ```git remote add azure <git clone url>```
* Make a change and commit (or make an empty commit with ```--allow-empty)```
* Push to the new remote eg ```git push azure master```. Progress is logged to the console and ```Settings / Deployment Source``` shows all deployments
* Add a SQL database and server to hold it
* In ```Settings / Data Connections``` conect up your new database
* Browse to the url listed on the App overview blade to see the deployed site
* Use the web app
* 
# Debugging notes

## Run on local dev PC
* Set the DB connection string by prefixing command with env var setting (found in ```tools / kudu / environment```)
* Create a ```azureMobile.js``` (and add to ```.gitignore```. This can contain logging code and DB connection 
* Details of both in this [blog post](https://shellmonger.com/2016/04/01/30-days-of-zumo-v2-azure-mobile-apps-day-2-local-development/)

## Get visibility into deployed App
* view logs in ```tools / log streming``` or using Azure CLI ```log``` and ```tail``` commands
* Turn on logs in ```settings / diagnostic logs```
* Explore in ```tools / console``` but this is not the exact deploymnet environment (eg node version may be different)
