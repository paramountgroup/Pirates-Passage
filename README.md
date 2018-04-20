
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
 
