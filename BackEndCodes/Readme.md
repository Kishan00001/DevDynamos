# BackEndCode Uploaded Here

# Steps to replicate:
- create a new project of type ASP.NET Core Web API
- Name the project
- Uncheck the "Configure for HTTPs option
- Delete that WeatherController.cs file from root folder and controller folder
- Install the packages mentioned in the base Readme.md file
- Add CORS policy in program.cs
# Configure the appsettings.json by adding the connectionstring
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ConnectionStrings": {
    "conString": "Data Source=W-674PY03-2;Initial Catalog=Your_Db_Name;Persist Security Info=True;User ID=SA;Password=Password@123456-=;TrustServerCertificate=true;Multiple Active Result Sets=True;Application Name=EntityFramework"
  },
  "AllowedHosts": "*"
}
# Add Transient Service to the builder in program.cs using
- builder.Services.AddTransient<InterfaceName, ImplementedClassName>();
