
/*
    Pirates Passage - Classic Arcade Game, Udacity - Front End Web Developer project 3
    ---------------------------------- 
    Bob Ingram - September 20, 2015
    ----------------------------------
	
	This app.js is the primary work space of project 3. In this file the player and enemies are 
	instantiated updated and rendered with the assistance of engine.js and resources.js files. 
	User input is also handled by app.js. Engine.js was updated to handle custom images.
	References for this project were the Udacity discusion board, W3Schools
	Udemy classes, student projects on github (alexx, htm, minkdog, tr12s), Office hours hangouts, 
	recorded office hours, stack overflow and youtube. Barbara Ingram with Paramount Group.us assisted
    with the custom graphics
	
*/





PLAY INSTRUCTIONS

Bob's Pirates Passage Game

This arcade game project is based on the classic frogger game. The game was customized by Bob Ingram
and is now called Pirates Passage. The game opens on the homepage index.html

1. The object is reach the the top of the game board 

2. Use arrow keys to control player movement 

3. If you are eaten by a shark the player will be reset 

4. Press quit to exit and return to the homepage index.html



Website Resources
Main Directory

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        9/20/2015   4:04 PM                css
d-----        9/20/2015   4:04 PM                fonts
d-----        9/20/2015   4:04 PM                images
d-----        9/21/2015   4:44 PM                js
-a----        9/20/2015   3:51 PM           6013 index.html
-a----        9/20/2015   3:34 PM            613 playgame.html
-a----        9/20/2015   3:31 PM            683 README.md


CSS Directory


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        9/19/2015   6:10 PM           6148 .DS_Store
-a----        9/19/2015   6:10 PM         147430 bootstrap.css
-a----        9/19/2015   6:10 PM         122540 bootstrap.min.css
-a----        9/20/2015  11:49 AM         122544 bootstrapbu.min.css
-a----        9/20/2015   2:03 PM            171 gamestyle.css
-a----        9/20/2015   3:04 PM           3518 style.css

Fonts Directory

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        9/19/2015   6:10 PM          20127 glyphicons-halflings-regular.eot
-a----        9/19/2015   6:10 PM         108738 glyphicons-halflings-regular.svg
-a----        9/19/2015   6:10 PM          45404 glyphicons-halflings-regular.ttf
-a----        9/19/2015   6:10 PM          23424 glyphicons-halflings-regular.woff
-a----        9/19/2015   6:10 PM          18028 glyphicons-halflings-regular.woff2

Images Directory

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        9/18/2015  10:10 AM          19995 15657181_M-pirate ship.png
-a----        9/18/2015  11:59 AM          36808 beach.png
-a----        8/24/2015   6:18 AM           7790 char-boy.png
-a----        8/24/2015   6:18 AM           8553 char-cat-girl.png
-a----        8/24/2015   6:18 AM           8724 char-horn-girl.png
-a----        8/24/2015   6:18 AM           8868 char-pink-girl.png
-a----        8/24/2015   6:18 AM           9735 char-princess-girl.png
-a----        8/24/2015   6:18 AM          12635 enemy-bug.png
-a----        8/24/2015   6:18 AM          20160 Gem Blue.png
-a----        8/24/2015   6:18 AM          24029 Gem Green.png
-a----        8/24/2015   6:18 AM          17342 Gem Orange.png
-a----        8/24/2015   6:18 AM           8587 grass-block.png
-a----        8/24/2015   6:18 AM           6419 Heart.png
-a----        8/24/2015   6:18 AM           7455 Key.png
-a----        3/17/2013   2:52 PM           8957 pg-colored-favcon.jpg
-a----        9/19/2015   8:10 PM          30920 pirate-ship-lg.gif
-a----        9/18/2015   5:27 PM          19316 pirate-ship-small.png
-a----        9/18/2015  11:40 AM           9654 pirate-ship.gif
-a----        9/18/2015   7:58 PM          21820 pirate-ship.png
-a----        8/24/2015   6:18 AM           9434 Rock.png
-a----        8/24/2015   6:18 AM          22430 Selector.png
-a----        9/18/2015  11:57 AM           6685 shark-chomping.gif
-a----        9/18/2015  10:15 AM           7313 shark-fin.png
-a----        9/18/2015   5:21 PM           8221 shark-fin2.png
-a----        9/19/2015   9:16 AM           5929 shark-mouth-closed.png
-a----        9/19/2015   9:16 AM           5803 shark-mouth-open.png
-a----        9/19/2015   7:41 PM        5503665 shark-video-2-frames-delayed.gif
-a----        8/24/2015   6:18 AM          13735 Star.png
-a----        8/24/2015   6:18 AM           6085 stone-block.png
-a----        8/24/2015   6:18 AM           9210 water-block.png


Javascript file Directory

----                -------------         ------ ----
-a----        9/19/2015   6:10 PM           6148 .DS_Store
-a----        9/21/2015   4:44 PM           4270 app.js
-a----        9/21/2015   6:58 AM           5090 appv1.js
-a----        9/19/2015   6:10 PM          68890 bootstrap.js
-a----        9/19/2015   6:10 PM          36816 bootstrap.min.js
-a----        9/19/2015   6:10 PM             79 custom.js
-a----        9/19/2015   9:10 AM           7760 engine.js
-a----        9/19/2015   6:10 PM            641 ie10-viewport-bug-workaround.js
-a----        9/19/2015   6:10 PM          95957 jquery-1.11.3.min.js
-a----        9/19/2015   6:10 PM           5564 jquery.easing.min.js
-a----        8/24/2015   6:18 AM           3999 resources.js


This is how the game works behind the scenes after it has been called by the user from the website.
index.html --> playgame.html --> resources.js --> apps.js --> engine.js --> index.html

/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */
 
 /* Resources.js
 * This is simple an image loading utility. It eases the process of loading
 * image files so that they can be used within your game. It also includes
 * a simple "caching" layer so it will reuse cached images if you attempt
 * t
 
 The game is exited by a link back to the homepage index.html.
 