export const minSteps = (nSteps: number): number => {
    const CHAR_A = "A";
    // const clipboard = "";
    const notepad = CHAR_A;
    let steps = 0;
    while (notepad.length < nSteps && steps <= nSteps) {
        steps++;
    }

    if (steps > nSteps) throw "Out of bounds";

    return steps;


}

if (require.main === module) {
    const args = process.argv.slice(2);
    const [n] = args;
    console.log(minSteps(parseInt(n)));
}
