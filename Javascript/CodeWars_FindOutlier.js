function findOutlierMine(integers) {

    let isSetEven = (integers[0] % 2 === 0 && integers[1] % 2 === 0)
        || (integers[0] % 2 === 0 && integers[2] % 2 === 0)
        || (integers[1] % 2 === 0 && integers[2] % 2 === 0);


    let outlier
    integers.forEach(myInt => {

        let numberIsEven = (myInt % 2 === 0)
        let thisIsOutlier = (isSetEven && !numberIsEven) || (!isSetEven && numberIsEven)

        console.log(`Set provided is ${isSetEven ? 'EVEN. ' : 'ODD. '}Testing ${myInt}. ${thisIsOutlier ? 'YES: IS THE OUTLIER' : ''}`)
        if (thisIsOutlier) outlier = myInt
    })

    return outlier;
}

function findOutlier2(int) {
    var evenNumbers = int.filter(a => a % 2 == 0);
    var oddNumbers = int.filter(a => a % 2 !== 0);
    return evenNumbers.length == 1 ? even[0] : odd[0];
}