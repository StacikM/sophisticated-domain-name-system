# How to add your domain
First, create a fork of the repository, and then create in the domains/ folder a json file:

## Name:

(domain).(ending (any)).json

Example:

example.ctk.json

## Contents:

{
    "ip": "(ip of your server)"
}

Valid examples:

1.Normal

{
    "ip": "51.255.202.28"
}

2.Normal with port

{
    "ip": "51.255.202.28:8000"
}

3.Router

{
    "ip": "51.255.202.28/public/" 
} (also supports port)

4.An actual domain

{
    "ip": "hosting.ctksystem.com"
}

## How to know if the user came on my website from SDNS
When we send a user on your site, they will always have ?sdns=(domain) in params

## How to redirect my user immediately?
Redirect your user to https://sdns.stacik.dev?goto=(domain)

## Rules
If your requested domain is offensive it will be rejected

If your pull request modifies a domain thats not yours, it will be rejected

If your json is partly incorrect, we will fix your mistake and accept

A domain may be removed if its used for phishing or shady stuff