const url = "https://data.covid19india.org/v4/min/data.min.json";


async function getData() {
    let tArr, tConfirmed, tRecovered, tDeath, tActive;

    let state = {
        0: "Andaman & Nicobar", 1: "Andhra Pradesh", 2: "Arunachal Pradesh", 3: "Assam", 4: "Bihar", 5: "Chandigarh",
        6: "Chhattisgarh", 7: "Delhi", 8: "Dadra and Nagar Haveli", 9: "Goa", 10: "Gujrat", 11: "Himachal Pradesh",
        12: "Haryana", 13: "Jharkhand", 14: "Jammu & Kashmir", 15: "Karnataka", 16: "Kerala", 17: "Ladakh",
        18: "Lakshadweep", 19: "Maharashtra", 20: "Meghalaya", 21: "Manipur", 22: " Madhya Pradesh", 23: "Mizoram",
        24: "Nagaland", 25: "Odisha", 26: "Punjab", 27: "Puducherry", 28: "Rajasthan", 29: "Sikkim",
        30: "Telangana", 31: "Tamil Nadu", 32: "Tripura", 34: "Uttar Pradesh", 35: "Uttarakhand", 36: "West Bengal"
    }

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    tArr = Object.values(data);
    console.log(tArr);

    let cArr = new Array(35);

    for(let i=0; i<36; i++){
        if(i==33)
        {
            continue;
        }
        else{
            cArr[i] = tArr[i]['total']['confirmed'];
        }
    }

    cArr.sort(function(a, b){return b -a});         //sort numerically
 
    // for(let i=0; i<35; i++){

    //         console.log(cArr[i]);
    // }


    for(let i=0; i<36; i++)
    {
        if(tArr[i]['total']['confirmed']==cArr[0])
        {
            if(typeof tArr[i]['delta'] !== 'undefined' && tArr[i]['delta']['confirmed'] > 0)
            {
                document.getElementById("firstConfDelta").innerHTML = tArr[i]['delta']['confirmed'];
                document.getElementById("firstRecvDelta").innerHTML = tArr[i]['delta']['recovered'];
                document.getElementById("firstDeathDelta").innerHTML = tArr[i]['delta']['deceased'];
            }
            else
            {
                document.getElementById("firstConfDelta").innerHTML =  0;
                document.getElementById("firstRecvDelta").innerHTML =  0;
                document.getElementById("firstDeathDelta").innerHTML = 0;
            }
            document.getElementById("firstState").innerHTML = state[i];
            document.getElementById("firstConf").innerHTML = tArr[i]['total']['confirmed'];
            document.getElementById("firstActive").innerHTML = tArr[i]['total']['confirmed']-(tArr[i]['total']['recovered']+tArr[i]['total']['deceased']);
            document.getElementById("firstRecv").innerHTML = tArr[i]['total']['recovered'];
            document.getElementById("firstDeath").innerHTML = tArr[i]['total']['deceased'];


            // console.log("Confirmed in ",state[i],": ",tArr[i]['total']['confirmed']);
            // console.log("Active in ",state[i],": ",tArr[i]['total']['confirmed']-(tArr[i]['total']['recovered']+tArr[i]['total']['deceased']));
            // console.log("Recovered in ",state[i],": ",tArr[i]['total']['recovered']);
            // console.log("Deceased in ",state[i],": ",tArr[i]['total']['deceased']);
        }
    }

    for(let i=0; i<36; i++)
    {
        if(tArr[i]['total']['confirmed']==cArr[1])
        {
            if(typeof tArr[i]['delta'] !== 'undefined' && tArr[i]['delta']['confirmed'] > 0)
            {
                document.getElementById("secondConfDelta").innerHTML = tArr[i]['delta']['confirmed'];
                document.getElementById("secondRecvDelta").innerHTML = tArr[i]['delta']['recovered'];
                document.getElementById("secondDeathDelta").innerHTML = tArr[i]['delta']['deceased'];
            }
            else
            {
                document.getElementById("secondConfDelta").innerHTML =  0;
                document.getElementById("secondRecvDelta").innerHTML =  0;
                document.getElementById("secondDeathDelta").innerHTML = 0;
            }

            document.getElementById("secondState").innerHTML = state[i];
            document.getElementById("secondConf").innerHTML = tArr[i]['total']['confirmed'];
            document.getElementById("secondActive").innerHTML = tArr[i]['total']['confirmed']-(tArr[i]['total']['recovered']+tArr[i]['total']['deceased']);
            document.getElementById("secondRecv").innerHTML = tArr[i]['total']['recovered'];
            document.getElementById("secondDeath").innerHTML = tArr[i]['total']['deceased'];

            // console.log("Confirmed in ",state[i],": ",tArr[i]['total']['confirmed']);
            // console.log("Active in ",state[i],": ",tArr[i]['total']['confirmed']-(tArr[i]['total']['recovered']+tArr[i]['total']['deceased']));
            // console.log("Recovered in ",state[i],": ",tArr[i]['total']['recovered']);
            // console.log("Deceased in ",state[i],": ",tArr[i]['total']['deceased']);
        }
    }

    for(let i=0; i<36; i++)
    {
        if(tArr[i]['total']['confirmed']==cArr[2])
        {

            if(typeof tArr[i]['delta'] !== 'undefined' && tArr[i]['delta']['confirmed'] > 0)
            {
                document.getElementById("thirdConfDelta").innerHTML = tArr[i]['delta']['confirmed'];
                document.getElementById("thirdRecvDelta").innerHTML = tArr[i]['delta']['recovered'];
                document.getElementById("thirdDeathDelta").innerHTML = tArr[i]['delta']['deceased'];
            }
            else
            {
                document.getElementById("thirdConfDelta").innerHTML = 0;
                document.getElementById("thirdRecvDelta").innerHTML = 0;
                document.getElementById("thirdDeathDelta").innerHTML = 0;
            }

            document.getElementById("thirdState").innerHTML = state[i];
            document.getElementById("thirdConf").innerHTML = tArr[i]['total']['confirmed'];
            document.getElementById("thirdActive").innerHTML = tArr[i]['total']['confirmed']-(tArr[i]['total']['recovered']+tArr[i]['total']['deceased']);
            document.getElementById("thirdRecv").innerHTML = tArr[i]['total']['recovered'];
            document.getElementById("thirdDeath").innerHTML = tArr[i]['total']['deceased'];

            // console.log("Confirmed in ",state[i],": ",tArr[i]['total']['confirmed']);
            // console.log("Active in ",state[i],": ",tArr[i]['total']['confirmed']-(tArr[i]['total']['recovered']+tArr[i]['total']['deceased']));
            // console.log("Recovered in ",state[i],": ",tArr[i]['total']['recovered']);
            // console.log("Deceased in ",state[i],": ",tArr[i]['total']['deceased']);
        }
    }

    tConfirmed = tArr[33]['total']['confirmed'];
    tConfDelta = tArr[33]['delta']['confirmed'];
    tRecovered = tArr[33]['total']['recovered'];
    tRecvDelta = tArr[33]['delta']['recovered'];
    tDeath = tArr[33]['total']['deceased'];
    tDeathDelta = tArr[33]['delta']['deceased'];

    tActive = tConfirmed - (tRecovered + tDeath);

    document.getElementById("tConfirmed").innerHTML = tConfirmed;
    document.getElementById("tConfDelta").innerHTML = tConfDelta;
    document.getElementById("tRecovered").innerHTML = tRecovered;
    document.getElementById("tRecvDelta").innerHTML = tRecvDelta;
    document.getElementById("tDeath").innerHTML = tDeath;
    document.getElementById("tDeathDelta").innerHTML = tDeathDelta;
    document.getElementById("tActive").innerHTML = tActive;






    // tot_confirmed = 0;
    // for (let i = 0; i < 36; i++) {
    //     console.log(arr[i]['total']['confirmed']);                //Total India stat at index 33
    // }

    // console.log(tot_confirmed);



}

getData();

// var intervalId = window.setInterval(function(){
//     getData();
//   }, 100000);




//   console.log("Confirmed:", tConfirmed);
//   console.log("Active:", tActive);
//   console.log("Recovered:", tRecovered);
//   console.log("Deceased:", tDeath);
  
// let arr1;
// let d = getData();
// d.then((data) => {
//     arr1 = Object.values(data);
// })

// console.log(arr1);

// console.log(arr1);
// console.log("asd");

// let tot_confirmed = 0;
// for (let i = 0; i < 37; i++) {
//     tot_confirmed = tot_confirmed + arr[i]['total']['confirmed'];
// }

// console.log(tot_confirmed);