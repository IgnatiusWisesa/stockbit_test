const findFirstStringInBracket = ( str ) => {
    if( str.length > 0 ) {
        const first_open_bracket = str.indexOf("(") || null
        const first_closing_bracket = str.indexOf(")") || null
        if( first_open_bracket && first_closing_bracket ) {
            return str.slice(first_open_bracket+1,first_closing_bracket)
        }
    }
    return ""
}

console.log(findFirstStringInBracket('ascasbhjsahbc(sjac)(ajscb)'))