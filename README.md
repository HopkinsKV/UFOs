# UFOs
UFO presentation using JavaScript, HTML, Bootstrap, Flask, D3, and others

## Overview
Stakeholder has requested a webpage that will allow users to view a table of UFO sightings. The table will filter for multiple criteria at the same time. 

## Results
The table will be filtered using the fields to the left of the page. There are multiple fields including date, city, state, country, and shape.

Entering information into a field will filter the search to just the items listed. If information is entered into another field, the search will be filtered further.

When the page loads, the table will show all encounters. <br>
![image](https://user-images.githubusercontent.com/91762315/148849777-c3918f3d-41b9-4424-bdbb-56a8989036c0.png)

Entering a country, such as ca for Canada, will return only the Canadian encounters. <br>
![image](https://user-images.githubusercontent.com/91762315/148850059-0c1b04c9-93c5-40e2-95e3-53e78521bc98.png)

Entering additional fields, such as a shape, will further filter the results. <br>
![image](https://user-images.githubusercontent.com/91762315/148850165-35b007ad-08be-4546-9f84-c69e57fb020c.png)

## Summary 
Quality of Life improvements can be made to improve the use of this site. 

### Recommendations
* We recommend updating the code to allow for common variants of location information. For example, entering Texas or TX should pull the same results as tx.

* We recommend updating the **shape** field to **description**. "Light" is an entry for shape, but light is not a shape.

* We recommend correcting the data to show proper punctuation instead of HTML coded characters, as well as proper capitalization.

