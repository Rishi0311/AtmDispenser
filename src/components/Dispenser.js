import React from 'react';
import ReturnResult from './ReturnResult';
import MinNotes from './MinNotes';

const Dispenser = (props) => {
    var amount = props.value;
    let denom = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
    let n = denom.length;
    let ans = [];
    for (let i = n - 1; i >= 0; i--) {

        while (amount >= denom[i]) {
            amount = amount - denom[i];
            ans.push(denom[i]);

        }
    }

    console.log('Possible min notes:', ans);

    let res = ans.reduce((counter, item) => {
        counter[item] ? counter[item]++ : counter[item] = 1;
        return counter;
    }, {});

    let initialObj = { 1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 500: 0, 1000: 0 };
    let finalRes = { ...initialObj, ...res };


    return(
        <React.Fragment>
            <ReturnResult value={finalRes} />
        <MinNotes count={ans.length}/>
        </React.Fragment>
    )
    



    //console.log(finalRes);

}
export default Dispenser;