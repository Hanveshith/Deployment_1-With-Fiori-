
# Step By Step Proccess to deploy CAPM Project along with Fiori and AppRouter.




## Prerequisites

Please go through my repo [**Deployment without fiori**](https://github.com/Hanveshith/Deployment_1-Without-Fiori-). Because we are going to add additional files for the same project.




## Deployment

#### Step-1 : Create Fiori Application form the fiori application generator templet.
    while creating the Fiori application, in the last step it asks for deployment configurations. 
    please select "Cloud Foundry" and choose "None" in the destination.

**Note:** This creates a **xs-app.json** file under the path: **app -> <your-app-name>** move it under **app**.

#### Step-2 : Then under your commond line and execute.
```bash
-> cd app
-> npm init
-> npm i @sap/approuter
```
* This adds "@sap/approuter": "^20.8.3" under the dependecies.

Refer - [package.json](https://github.com/Hanveshith/Deployment_1-With-Fiori-/blob/main/app/package.json)

#### Step-3 : Now in the xs-app.json we need to make the following changes.
```bash
{
  "welcomeFile": "webapp/webapp/",
  "authenticationMethod": "route",
  "sessionTimeout": 100,
  "pluginMetadataEndpoint": "/metadata",
  "routes": [
    {
      "source": "^/webapp/webapp/(.*)",
      "target": "$1",
      "localDir": "webapp/webapp/",
      "authenticationType": "xsuaa"
    },
    {
      "source": "^/(.*)$",
      "destination": "srv-api",
      "authenticationType": "xsuaa"
    }
  ]
}
```
* welcomeFile - **<fiori-app-name>/webapp** under the app folder.
* authenticationMethod - should set to **route**
* under routes
    
    -> source one - "**^/<fiori-app-name>/webapp/(.*)**"
    
    -> source two - "**^/(.*)$**"
* authenticationType - "**xsuaa**" 

#### Checks
```Notepad
1. Check your mta.yaml file look for
    -> <APP-NAME>-srv
    -> <APP-NAME>-db-deployer
    -> <APP> (type: approuter.nodejs)
If you find other than these delete your mta.yaml file.

```

#### Step-4 : 
    1. As mentioned under checks section if you deleted the .yaml file. create is again using the following command.
        ->cds add mta
    2. Once .yaml file is created verify it again.
    3. Right click on the .yaml file and click on "Build MTA Project" or execute "mbt build -p cf".
    4. Wait for the creation of the "mta_archives" folder. Once the .mtar file is available.
    5. execute "cf deploy mta_archives/*.mtar" to deploy you project.



### After Successful Deployment.
**NOTE:** If you already assigned the roles in previous deployment (without fiori) you can ignore the 3, 4, 5 points in below section.

    1. You will find same two instances created under the instances section in your BTP account.
        ->  *-auth
        ->  *-db
    2. Under the spaces in BTP you will have two apps.
        -> One is for srv
        -> Another is for fiori application
    3. Before you access the fiori URL you must assign the roles to the user.
    4. Go to role collection in your BTP platform. In here you will find the role collections that are generated automatically based on your "xs-security.json" file.
    5. Assign that role to the user under the user section of you BTP account.
    6. Now open the fiori URL in incognito window, which asks for login -> enter your BTP credentials to access your application.
    7. Once you success logged in you can access your application. 

