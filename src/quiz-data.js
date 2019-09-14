const questionData = [];

questionData[1] = {
    question: "What was the best album from the 1980s?",
    options: [
        ["Purple Rain", true],
        ["Thriller", false],
        ["Like a Virgin", false]
    ],
    incorrectText: "Incorrect.  Purple Rain was the best album of the 1980s.",
    hintText: "It was a movie soundtrack."
    //resultBoxId: "result1"
}

questionData[2] = {
    question: "Which rap group had a song including the lyrics: 'The name's McDaniels, not McDonalds. / The rhymes are Darryl's and the burgers are Ronald's'",
    options: [
        ["2 Live Crew", false],
        ["Public Enemy", false],
        ["Run-DMC", true],
    ],
    incorrectText: "Incorrect.  Darryl McDaniels is the DMC of Run-DMC.",
    hintText: "It's Tricky! (To rock a rhyme)",
    //resultBoxId: "result2"
}

questionData[3] = {
    question: "What does TARDIS stand for?",
    options: [
        ["Totally Awesome Retro DJ in Seattle", false],
        ["Time and Relative Dimension in Space", true],
        ["Torque and Rotational Deceleration in Spin", false],
    ],
    incorrectText: "Incorrect.  TARDIS is Time and Relative Dimension in Space",
    hintText: "The Daleks are coming!  Call the Doctor!"
    //resultBoxId: "result3"
}

export default questionData;