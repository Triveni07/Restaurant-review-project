# Restaurant Reviews - Stage 1
  For the Restaurant Reviews projects, incrementally converted a static webpage to a mobile-ready web application. In Stage One, a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. Also converting this to a Progressive Web Application by caching some assets for offline use.

## Table of Contents :
* ### Specification
* ### Installation
* ### Usage
* ### Credits
* ### License

### 1. _Specification_
You will be provided code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

* Responsive Design:

   > a) Site UI compatibility with a range of display sizes- 
        1. All content is responsive and displays on a range of display sizes.
        2. Content should make use of available screen real estate and should display correctly at all screen sizes.
        3. An image's associated title and text renders next to the image in all viewport sizes.
      
   > b) Images responsiveness-
        1. Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size. 
  
   > c)  Application elements visible and usable in all viewports-
         1. On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

 * Accessibility:
    > a) Images accessibility-
        1. All content-related images include appropriate alternate text that clearly describes the content of the image.

    > b) Focus used appropriately to allow easy navigation of the site-
        1. Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

    > c) Site elements defined semantically-
        1. Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

* Offline Availability:
    > a) Offline availability of pages that have been visited-
        1. When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.


### 3. _Installation_
After cloning or downloading this project, you will need a local server to run it.
    The simplest method is using Python's simple HTTP server.
    
    Install Python 2.x or Python 3.x from the Python website
    In your terminal or command line, navigate to the directory containing this project
    If you installed Python 2, Type python -m SimpleHTTPServer 3000 or, if you installed Python 3, Type python3 -m http.server 3000

Another, more convenient method is the following:

    Install Node.js
    Install Browersync typing in the terminal or command line npm install -g browser-sync
    In your terminal or command line, navigate to the directory containing this project
    Type browser-sync -w

### 4. _Usage_
To see the Google Maps served by the website, you need to get a Google Maps API Key and substitute the YOUR_GOOGLE_MAP_API_KEY text with your own API key in both the index.html and the restaurant.html files.
_Then, with your server running, point your browser to http://localhost:3000 and enjoy!_
You can search restaurants in New York by neighborhood or by cuisine. You can learn each restaurant's address and opening hours, find the restaurant on the map, and read the reviews other customers wrote.

### 5. _Credits_
__The starter code for the static restaurant reviews website is from Udacity__
_And the static web page looks like this:_

![Starter static restaurant review web page](https://d17h27t6h515a5.cloudfront.net/topher/2017/August/598b4108_starter-mobile-page-1/starter-mobile-page-1.png)

### 6. _License_
MIT License
Copyright (c) [2018] [Triveni Vikrant Londhe]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


