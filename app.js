
// let btnCalc= document.getElementById("btn-calc");
// btnCalc.addEventListener('click', async()=>{
//     let res = await fetch("https://localhost:7238/api/Values", {
//             "method": "POST",
//             "mode": "cors",
//             "cache": "no-cache",
//             "credentials": "same-origin",
//             "headers": {
//                 "Content-Type": "application/json",
//             },
//             "body": JSON.stringify({ height: height, weight: weight })
//         });
// });


const apiUrl = "https://localhost:7238/api/values";
const calcedIndex = document.getElementById("result");
const btnCalc = document.getElementById('btn-calc');

btnCalc.addEventListener('click', async () => {
    const height = document.getElementById('height').value;  // Get the value of the input field
    const weight = document.getElementById('weight').value;  // Get the value of the input field
        let res = await fetch(apiUrl, {
            'method': "POST",
            'mode': "cors",
            'cache': "no-cache",
            'credentials': "same-origin",
            'headers': {
                "Content-Type": "application/json",
            },
            'body': JSON.stringify({ height: height, weight: weight })
        });

        if (!res.ok) {
            throw new Error('HTTP error! Status: ${res.status}');
        }

        const data = await res.json();
        calcedIndex.textContent = data;
});