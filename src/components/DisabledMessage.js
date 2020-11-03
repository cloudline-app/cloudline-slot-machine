import React from 'react'

// ED - ASCII flamingo just because
//             __
//            /(`o
//      ,-,  //  \\
//     (,,,) ||   V
//    (,,,,)\//
//    (,,,/w)-'
//    \,,/w)
//    `V/uu
//      / |
//      | |
//      o o
//      \ |
// \,/  ,\|,.  \,/

const DisabledMessage = ({ disabled }) => disabled ? <h3>The slot machine has been disabled for your own good. Yes, this message is rendered in an h3 tag.</h3> : null;

export default DisabledMessage