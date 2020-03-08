# INITIAL SETUP
### Planning folder structure
1. Figure out what your jobs' `brand-name` is, as a lower-case hyphenated string (e.g. bonds, celebrity-cruises)
2. Figure out what your jobs' `page-title` will be, as a lower-case hyphenated string that DOES NOT USE [SEO stop words](https://jacobstoops.com/blog/seo-stop-words/#A) (e.g. baby-search-2020, message-bottle)

### Create folder structure

Within your `native-paid-content` folder make a sub-folder that matches the brand name  - if one does not already exist.

```
mkdir brand-name
cd ./brand-name
```

* Now get your HTTPS template repo-url copied for cloning
* clone your repo
* make your output/dist folder
* and navigate to your repo folder to start development

```
git clone repo-url
mkdir page-title
cd ./cloned-repo-url
```

You should end up with something like this

```
.
├── native-paid-content           # Pantheon site root
│   └── brand-name                # Brand root
│       ├── page-title            # Compiled production files (e.g. dist)
│       └── cloned-template       # Your cloned repo for development
└── ...
```

### Create and setup repo

Now go to [Stash](https://stash.9msn.net/projects/PSW/repos?create) and create a new repository. Name it with the job number first, followed by the type of project, then brand name. E.g.
```7400-immersive-APT```

After creating the repo, you will then have instructions on how to change your remote origin.

```
git remote set-url origin https://stash.9msn.net/scm/psw/REPO-NAME-HERE.git
git push -u origin --all
git push origin --tags
```

Now in your local folder, rename your cloned-repo-url folder from `000-pantheon-website-template` to `REPO-NAME-HERE`
E.g. `7400-immersive-APT`

You should be able to refresh your repo on stash and see all your files there.

You are now ready to begin developing!

# INSTALLATION
```
nvm use
npm i
```



# RUNNING 
```
npm start
```



# DEPLOYMENT
* Change `[root]/webpack.prod.js` path `./dist` to `../page-title`
```
path : path.resolve(__dirname ,'./baby-search-2020'),
```
```
npm run build
```
* Go to your 'Native Paid Content' repo
```
git add .
git commit -m 'page-title immersive - initial build'
git push origin master
```
* Check site via [https://dev-brandedcontent.smh.com.au/brand-name/page-title/](https://dev-brandedcontent.smh.com.au/brand-name/page-title/)


# GOING LIVE
## Checklist
1. Login to __Facebook__ and visit https://developers.facebook.com/tools/debug/ and paste the final production URL and ensure the canonical URL is not redirecting or causing problems. This is essential for swift SimpleReach QA'ing!
2. Visit [https://metatags.io/](https://metatags.io/) and paste the production url and ensure social sharing image and other text is sensible and correct.
3. Change the url/path in the `apple-touch-icon` section of the `<meta>` to ensure the correct logos are showing for the primary domain being used on the site. Login to [Pantheon Media Upload](https://live-native-paid-content.pantheonsite.io/wp-admin/upload.php) to find the correct url's for these assets.

### SimpleReach
4. Check that you have added your __SimpleReach__ code above the `</body>` tag, changing the items below marked with `xxxx`'s. Visit the [SimpleReach guide](https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.wiki/tab::1d4ae9f3-53d9-44d6-9f41-9df311b3486c?context=%7B%22subEntityId%22%3A%22%7B%5C%22pageId%5C%22%3A14%2C%5C%22sectionId%5C%22%3A17%2C%5C%22origin%5C%22%3A2%7D%22%2C%22channelId%22%3A%2219%3Aa93b5960fc604e5a9d3fdacbc25f1f23%40thread.skype%22%7D&tenantId=1211f5b7-bd34-4621-8eef-3ebbcb827794) on Teams for more details.
```
<!-- SIMPLE REACH -->
 <script>
 __reach_config = {
 // pid: "54c16760371c84291c00014e",
 pid: "000000000000000000000000",
 title: document.title,
 date: "xxxx-xx-xx 00:00:00",
 channels: ["xxxx"],
 article_id: "xxxx-xxxx-xxxx",
 ignore_errors: false,
 scroll_depth: true
 };
 (function() {
 var e = document.createElement("script");
 (e.async = !0),
 (e.type = "text/javascript"),
 (e.src =
 document.location.protocol +
 "//d8rk54i4mohrb.cloudfront.net/js/reach.js"),
 (
 document.getElementsByTagName("head")[0] ||
 document.getElementsByTagName("body")[0]
 ).appendChild(e);
 })();
 </script>
 ```
### Titan Datalayer
5. Check that you have added your Titan Datalayer code accordingly. Visit the [Titan Datalayer guide](https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.wiki/tab::1d4ae9f3-53d9-44d6-9f41-9df311b3486c?context=%7B%22subEntityId%22%3A%22%7B%5C%22pageId%5C%22%3A14%2C%5C%22sectionId%5C%22%3A15%2C%5C%22origin%5C%22%3A2%7D%22%2C%22channelId%22%3A%2219%3Aa93b5960fc604e5a9d3fdacbc25f1f23%40thread.skype%22%7D&tenantId=1211f5b7-bd34-4621-8eef-3ebbcb827794) for more information.

```
<!-- TITAN GTM -->
 <script>
 var dataLayer = window.dataLayer || [];
 var isMobile = false;
 var sysEnv = "desktop";
 document.addEventListener("DOMContentLoaded", function() {
 if (isMobile || screen.width < 700) {
 sysEnv = "mobile";
 digitalData.page.pageInfo.sysEnv = sysEnv;
 dataLayer.client.deviceType = sysEnv;
 }
 });
 dataLayer.push({
 page: {
 author: "",
 publishDate: "XX-XX-XXAEST00:00:0000000",
 updateDate: "XX-XX-XXAEST00:00:0000000",
 renderedPlatform: "WEB",
 authoredPlatform: "Pantheon",
 viewID: "",
 type: "Article",
 assetId: "xxxx-xxxx",
 contentSource: "Fairfax Media",
 primaryTag: "",
 tags: "",
 components: "",
 promotedType: "sponsored",
 sponsored: "true",
 name: "xxxx xxxx",
 template: "paidcontent",
 didMount: "false",
 customReferrer: document.referrer,
 lifecycleType: "single"
 },
 network: {
 deviceID: "",
 marketingID: ""
 },
 client: {
 deviceType: "desktop"
 },
 section: {
 primaryCategory: "brandDiscover",
 subCategory: ""
 },
 session: {
 adBlocked: "",
 gCookie: "",
 privateBrowsingMode: ""
 },
 subs: {
 memberID: "",
 memberType: "visitor",
 meterCount: "",
 meterPeriodStart: "",
 meterPeriodEnd: ""
 },
 brand: {
 name: "smh",
 Engagement: ""
 }
 });
 // TITAN BASE CONFIG
 var titanEnabled = true;
 var digitalData = {
 page: {
 pageInfo: {
 sysEnv: "desktop"
 }
 },
 titan: {
 spa: true,
 adSite: "xxxx",
 adZone: "SinglePageArchitechture",
 adKeyValues: {
 cat: "xxxx",
 cat1: "xxxx",
 ctype: "brandexperience"
 }
 }
 };
 var titan = titan || {};
 titan.cmd = titan.cmd || []; // TITAN BASE CONFIG EN
 </script>
```

Then add the corresponding GTM script above the closing `</head>` tag.

``` 
<!-- Google Tag Manager -->
 <script>
 (function(w, d, s, l, i) {
 w[l] = w[l] || [];
 w[l].push({
 "gtm.start": new Date().getTime(),
 event: "gtm.js"
 });
 var f = d.getElementsByTagName(s)[0],
 j = d.createElement(s),
 dl = l != "dataLayer" ? "&l=" + l : "";
 j.async = true;
 j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
 f.parentNode.insertBefore(j, f);
 })(window, document, "script", "dataLayer", "GTM-WV7FLW7");
 </script>
 <!-- End Google Tag Manager -->
```

Then add the corresponding closing GTM script above the closing `</body>` tag.

 ```
<!-- Google Tag Manager (noscript) -->
 <noscript>
 <iframe
 src="https://www.googletagmanager.com/ns.html?id=GTM-WV7FLW7"
 height="0"
 width="0"
 style="display:none;visibility:hidden"
 ></iframe>
 </noscript>
 <!-- End Google Tag Manager (noscript) -->
```
### Backup Studio Google Analytics
6. This is shared and identical on all implementations, and does not require any tweaking.
Place this code above the closing `</head>` tag. Please see the [Teams GA guide](https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.wiki/tab::1d4ae9f3-53d9-44d6-9f41-9df311b3486c?context=%7B%22subEntityId%22%3A%22%7B%5C%22pageId%5C%22%3A14%2C%5C%22sectionId%5C%22%3A16%2C%5C%22origin%5C%22%3A2%7D%22%2C%22channelId%22%3A%2219%3Aa93b5960fc604e5a9d3fdacbc25f1f23%40thread.skype%22%7D&tenantId=1211f5b7-bd34-4621-8eef-3ebbcb827794) for more information.

```
<!-- Global site tag (gtag.js) - Google Analytics -->
 <script
 async
 src="https://www.googletagmanager.com/gtag/js?id=UA-101266782-31"
 ></script>
 <script>
 window.dataLayer = window.dataLayer || [];
 function gtag() {
 dataLayer.push(arguments);
 }
 gtag("js", new Date());
 gtag("config", "UA-101266782-31");
 </script>
```

## Pantheon deployment
1. Login to [Pantheon](https://pantheon.io) and go to your `Native Paid Content` dashboard.
2. When pushing to `Native Paid Content` you are only pushing to the dev environment.
3. You will need to deploy your code from dev, to test, and then to live within the browser-based dashboard using the tabs.

Each dev/test/live environment has its own subdomains for testing/sharing links with clients and stakeholders. Use the following url convention:

<table>
    <tr>
        <td><b>Environment</b></td>
        <td><b>URL</b></td>
    </tr>
    <tr>
        <td>Dev</td>
        <td>https://dev-brandedcontent.[masthead].com.au</td>
    </tr>
    <tr>
        <td>Test / Staging</td>
        <td>https://stage-brandedcontent.[masthead].com.au</td>
    </tr>
    <tr>
        <td>Live / Production</td>
        <td>https://brandedcontent.[masthead].com.au</td>
    </tr>
</table>

We also have a range of supported mastheads, across mostly all 3 environments:

<table>
    <tr>
        <td><b>Masthead</b></td>
        <td><b>URL</b></td>
        <td><b>Environ</b></td>
    </tr>
    <tr>
        <td>AFR</td>
        <td>afr.com</td>
        <td>live only</td>
    </tr>
    <tr>
        <td>Brisbane Times</td>
        <td>brisbanetimes.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>Canberra Times</td>
        <td>canberratimes.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>Essential Baby</td>
        <td>essentialbaby.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>Essential Kids</td>
        <td>essentialkids.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>Executive Style</td>
        <td>executivestyle.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>Good Food</td>
        <td>goodfood.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>Sydney Morning Herald</td>
        <td>smh.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>The Age</td>
        <td>theage.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>Traveller</td>
        <td>traveller.com.au</td>
        <td>dev/test/live</td>
    </tr>
    <tr>
        <td>WA Today</td>
        <td>watoday.com.au</td>
        <td>dev/test/live</td>
    </tr>
    
</table>

