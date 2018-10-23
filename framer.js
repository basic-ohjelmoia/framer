
/**
 * Here we split a String into invidual words, list these words on separate rows and frame it all with a nice star boundary.
 * @param {*} text The string which is being split into words and then framed
 */
const framer = (text) => {

    var arr = text.split(" ")               // Here we split the string into invidual words

    var width = 0;
    var height = arr.length - 1             // The star boundary height (i.e. number of rows) is determined by the number of words in the array 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > width) {
            width = arr[i].length           // Here we detect the longest word in the string. This longest word will determine the width of the star boundary.
        }
    }

    for (var h = -1; h < height + 2; h++) {
        var line = ''
        var wordForThisRowHasBeenPrinted = false
        for (var w = -2; w < width + 2; w++) {
            if (h < 0 || h > height || w < -1 || w > width) {      // The boundaries are 'filled' with stars
                line = line + '*'
            } else if (h < 0 || h > height || w < 0 || w > width || wordForThisRowHasBeenPrinted) {  // Inside the boundaries are 'filled' with empty spaces. Also, any void between the end of the word and beginning of the rightmost boundary will be 'filled' with spaces
                line = line + ' '
            } else if (h >= 0 || h < height) {      // Here we print the word for this row
                line = line + arr[h]
                w += arr[h].length - 1
                wordForThisRowHasBeenPrinted = true;
            }
        }
        console.log(line)
    }
}

var frameThis = "Hello World in a Frame OR SOMETHINGGGGGGGGG SAIPPUAKAUPPIASAIPPUAKAUPPIASaippuakauppias lol :)"
framer(frameThis)





