/**
 * The loading animations run as soon as the window loads
 * Remove this part if you want to start the animations in your own code
 * Just add "new HTMLElementLoadingAnimation().run();" to your code
 */
window.onload = function(){
    new HTMLElementLoadingAnimation().run();
}

/**
###################### HERE YOU CAN MAKE CONFIGURATIONS ######################
*/
function HTMLElementLoadingAnimation(){

    // define the delay between the animation of each element
    this.delay = 150;

}

/**
###################### I WOULD NOT RECOMMEND TO CHANGE THE FOLLOWING CODE ######################

 *
 * The run method adds the is-visible class to the elements to start the animation
 */
HTMLElementLoadingAnimation.prototype.run = function(){

    var self = this;

    // loop all aco-load-animation elements and add the .is-visible class
    var i=0;
    document.querySelectorAll('.eac-mount-animation').forEach(function(node) {

        // set a timeout between the animation of each element
        setTimeout(function(){

            // add the is-visible class
            node.classList.add("is-visible");

        }, self.delay * i);

        i++;
    });
}
