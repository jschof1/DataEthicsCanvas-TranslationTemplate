# Data Ethics Canvas

Make sure your ***.ts*** file or ***.json*** file is inside of the same folder as the index.html and main.html

If it is a .ts file, change the file name to .json.

In order to create a new translation file duplicate the index.html and main.js file and rename it indexY*ourTranslationName*.html. and main*YourTranslationName.js*

Inside of your new index.html file scroll to the bottom of the page and change the main.js file name to your newly named js file:

From:

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled.png)

To:

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%201.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%201.png)

Next, open your newly created main*YourTranslationName*.js file. On line 2 you will see a path which  references a json file. Make sure the path matches the name of the json file in your root folder. 

From:

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%202.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%202.png)

To:

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%203.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%203.png)

**IMPORTANT! - DO NOT REMOVE THE *./* FROM THE FILE NAME**

Finally — assuming you want to choose the where the data is placed with in the bubbles — we will use something called appendChild. Append child is how we put an item inside of another item.

So, lets say we want to put the the first piece of text inside the 3rd bubble

This text

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%204.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%204.png)

Inside of 

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Screenshot_2021-06-03_at_10.23.04.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Screenshot_2021-06-03_at_10.23.04.png)

To look like this

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%205.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%205.png)

We use append child. Append child is exactly the same as saying 'container 3 will contain the data in container 1'. So lets do this directly below where it says //CHANGE CODE HERE  in your main.js file: 

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%206.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%206.png)

Repeat this process deciding where you want to insert the text into which bubbles. 

Here is a finished example:

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Screenshot_2021-06-03_at_22.50.26.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Screenshot_2021-06-03_at_22.50.26.png)

Double click on the html file and press print

Change the destination to 'save as PDF'. Change it from portrait to landscape. Click on more settings and change the scale to 24.

![Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%207.png](Data%20Ethics%20Canvas%20f68240d5f61549089b616b2854e17716/Untitled%207.png)