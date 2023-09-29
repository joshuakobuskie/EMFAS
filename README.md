#  [Englishtown Manalapan First Aid Squad Website](https://emfas.org/)
## Made By: William Kaminski, Joshua Kobuske, Angelo Velardi, Caterine Tapia, Justin Bautista
## Tools Used: React JS, PHP, MySQL, National Weather Service API, CPanel
The EMFAS is a volunteer first aid squad that serves the towns of Englishtown and Manalapan and hosts a website at emfas.org. The website’s main function is to have information about the organization to show community impact and to provide a way for those interested to donate or contact the organization about joining as a volunteer. This website previously consisted of a few pages that contained long paragraphs of text and sporadically placed links and lacked much functionality beyond that. The EMFAS tasked our team with completely overhauling their existing website to properly represent the good work the organization does in their community. 

The main goals during the development of the new website were multi-platform accessibility, statistics to emphasize the impact of the EMFAS, a weather alert system, more accessible contact and donation methods, and easy updating of officer information. Using React JS, we were able to incorporate all of these features with modern styling. The website consists of 4 main pages, Home, Join, Donate, and Officers.

Since the website is created using React webpack, there is no way to update the source code without re-compiling the application. This is a complicated process, so we wanted to make it simple for members of EMFAS to change the content of the pages. To solve this, all content is stored in a MySQL database. The organization has access to a url on the site that they can navigate to in order to change this content using forms.

## Site Breakdown

### Landing Page
The landing page displays weekly statistics about the effectiveness of the EMFAS, provided by EMSCharts. Statistics on the response time, calls taken, and miles driven are updated via an automated email system. The email is parsed for the statistics, stored in a mysql database, and then retrieved using javascript’s fetch API. The landing page also includes 3 separate boxes summarizing key information about the EMFAS such as their history, what equipment they use, and billing information. The information is displayed in a Z-layout, which is proven to allow for information to be read quickly by users. Images of EMFAS officers and trucks are displayed in the boxes to show their equipment and involvement in the community.

### Donation Page
The EMFAS accepts donations, as they are a non-profit organization. The original website only contained the address for a P.O. box. For added accessibility, both a link button and QR code to the EMFAS paypal account have been added. Now users have the option to donate online, or they have the address information to mail in physical donations.

### Join Us Page 
The join page consists of an accordion-style information hub about becoming a member of the EMFAS and a form to send contact information. The accordion layout allows for lots of pertinent information to be available on the page in a clean and organized manner. The join form is sent to a php script which will automatically send an email to the organization that includes the user's contact information. This feature makes the recruiting process easier for both the potential recruits and the organization, as the contact information is stored in one place and in a standard format.

### Officer Page
An officer list is displayed on this page that includes all official positions of the officers, as well as their contact information. This information can change frequently, so it is crucial that authorized members of the organization have an easy method to change this information. We created a separate page, that only the organization knows the link to, that can be used to change information about each officer, as well as the ordering of the officers in the list. This information is stored and retrieved from a mysql database, similar to the statistics on the homepage. The form is password protected with hash validation, so unauthorized users cannot edit the information. We decided to only create a desktop version of the edit form as the officers would most likely be edited at a desk.

### Weather Alert System
The weather alert system was created with the goal of providing users local to the EMFAS service zone with realtime hazardous weather reports. The weather reports are fetched from the NOAA, National Weather Service public alerts API. The information is fetched as a json object using the fetch api and parsed for the headline and safety instructions. It is then displayed at the top of each page. The user can choose to close the weather alert, or click the link at the bottom to be redirected to the national weather service site where all active alerts are shown in the Englishtown Manalapan area. Note that the screenshots below are not set to the correct zone. This is simply for demonstration purposes as there were no active alerts in the Englishtown Manalapan Area.




