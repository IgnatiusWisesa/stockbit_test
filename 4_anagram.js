const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
let temporary_count = 0

// give each letter a weight by index
let letters = "abcdefghijklmnopqrstuvwxyz"
letters = letters.split('')

// counting letters weight by letter index
const letters_count = []
for (var i = 0; i < words.length ; i++) {
    for( var j = 0; j < words[i].split('').length; j++ ) {
        for( var k = 0; k < letters.length; k++ ) {
            if( letters[k] == words[i][j] ) temporary_count = temporary_count + k
        }
    }
    letters_count.push({ word: words[i], count: temporary_count })
    temporary_count = 0
}

// order weighted object from largest to smallest
const sorted_letters_count = []
var test = true
for( var i = 0; i < letters_count.length; i++ ) {
    if( i == 0 ) {
        sorted_letters_count[0] = [ { word: letters_count[i].word, count: letters_count[i].count }]
    } else {
        for( var j = 0; j < sorted_letters_count.length; j ++ ) {
            if( letters_count[i].count == sorted_letters_count[j][0].count ) { 
                sorted_letters_count[j].push(letters_count[i])
                test = false
            }
        }

        if( test == true ) sorted_letters_count.push([letters_count[i]])
    }
    test = true
}

// remove the weighted count
const output = []
for( var i = 0; i < sorted_letters_count.length; i ++ ) {
    output[i] = []
    for( var j = 0 ; j < sorted_letters_count[i].length; j++ ) {
        output[i].push(sorted_letters_count[i][j].word)
    }
}

console.log(output)