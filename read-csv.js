var column0 = [];
var column1 = [];
var column2 = [];

var csvFileArray = [];

// var testArray = [
//     'DesignJobs_10_3_2023__10_00_00_PM.csv',
//     // 'DesignJobs_10_3_2023__9_43_14_PM.csv',
//     // 'DesignJobs_10_3_2023__10_31_00_PM.csv'
// ];

// var testArray = [
//     'DesignJobs_10_3_2023__10_31_00_PM.csv',
//     // 'DesignJobs_10_3_223__10_3_00_PM.csv',
//     'DesignJobs_10_3_2023__10_00_00_PM.csv'
// ];


window.onload = () => {


    csvGenerator(); //PRODUCES csvFileArray

    for (let i = 0; i < csvFileArray.length; i++) {

        fetch(csvFileArray[i])
            .then(res => res.text())
            .then(csv => {

                csvChecker = findWord('GET', csv);

                // console.log(csvChecker)
                // console.log(csv.length)


                if (csvChecker === false && csv.length < 20000) {
                // if (csvChecker === false || ) {
                    // console.log('yuss')

                    // createParagraphElement('title', 'title-div', 'ph1')
                    console.log(csvFileArray[i])
                    fetchCSV(csvFileArray[i])
                } 


            })
    }

    // fetch(csvFileArray[35])
    //     .then(res => res.text())
    //     .then(csv => {

    //         console.log(csv)
    //         csvChecker = findWord('GET', csv);

    //         console.log(csvChecker)



    //         var rows = csv.split('\n');
    //         var values = csv.split(',');

            

    //         for (let i = 0; i < rows.length; i++) {

    //             if (i > 1) {
    //                 values = rows[i].split(',');
    //                 column0.push(`${values[0]}`);
    //                 column1.push(`${values[1]}`);
    //                 column2.push(`${values[2]}`);
    //             }

    //         }



    //         for (let i = 0; i < column2.length - 1; i++){

    //             const url = column2[i]

    //             if (column1[i] == "undefined") {
    //             } else {
    //                 createLinkElement(url, 'dink', 'links-container');
    //                 createParagraphElement(column1[i], 'p0-container', 'p1')
    //                 createParagraphElement(column0[i], 'p1-container', 'p2')
    //             }

    //         }


    //     })

    

    
}

function createLinkElement(link, title, appendedTo) {
    
    var a = document.createElement('a');
    var linkText = document.createTextNode(title);
    a.appendChild(linkText);

    a.title = title;
    a.href = link;

    const element = document.getElementById(appendedTo);
    element.appendChild(a);

}

function createParagraphElement(text, appendedTo, ID) {
    
    const para = document.createElement("p");
    const node = document.createTextNode(text);
    para.appendChild(node);

    const element = document.getElementById(appendedTo);
    element.appendChild(para);

    para.setAttribute('id', ID)
    
}


function fetchCSV(file) {
    // AJAX FETCH CSV
    fetch(file)
        .then(res => res.text())
        .then(csv => {



            var rows = csv.split('\n');
            var values = csv.split(',');

            
            for (let i = 0; i < rows.length; i++) {
                if (i > 1) {
                    values = rows[i].split(',');
                    column0.push(`${values[0]}`);
                    column1.push(`${values[1]}`);
                    column2.push(`${values[2]}`);
                }

            }

            // column0 = column0.toString().replace(/,/g, "");
            // column1 = column1.toString().replace(/,/g, "");
            // column2 = column2.toString().replace(/\s/g, '');


            for (let i = 0; i < column2.length - 1; i++){

                const url = column2[i]

                if (column1[i] == "undefined") {
                } else {
                    createLinkElement(url, 'dink', 'links-container');
                    createParagraphElement(column1[i], 'p0-container', 'p1')
                    createParagraphElement(column0[i], 'p1-container', 'p2')
                }

            }


        })
}

function findWord(word, str) {
  return str.split(' ').some(function(w){return w === word})
}


function csvGenerator() {

    var numberDays = 5;
    var monthLength = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 }
    var dates2023 = ['1_1_2023__',
'1_2_2023__',
'1_3_2023__',
'1_4_2023__',
'1_5_2023__',
'1_6_2023__',
'1_7_2023__',
'1_8_2023__',
'1_9_2023__',
'1_10_2023__',
'1_11_2023__',
'1_12_2023__',
'1_13_2023__',
'1_14_2023__',
'1_15_2023__',
'1_16_2023__',
'1_17_2023__',
'1_18_2023__',
'1_19_2023__',
'1_20_2023__',
'1_21_2023__',
'1_22_2023__',
'1_23_2023__',
'1_24_2023__',
'1_25_2023__',
'1_26_2023__',
'1_27_2023__',
'1_28_2023__',
'1_29_2023__',
'1_30_2023__',
'1_31_2023__',
'2_1_2023__',
'2_2_2023__',
'2_3_2023__',
'2_4_2023__',
'2_5_2023__',
'2_6_2023__',
'2_7_2023__',
'2_8_2023__',
'2_9_2023__',
'2_10_2023__',
'2_11_2023__',
'2_12_2023__',
'2_13_2023__',
'2_14_2023__',
'2_15_2023__',
'2_16_2023__',
'2_17_2023__',
'2_18_2023__',
'2_19_2023__',
'2_20_2023__',
'2_21_2023__',
'2_22_2023__',
'2_23_2023__',
'2_24_2023__',
'2_25_2023__',
'2_26_2023__',
'2_27_2023__',
'2_28_2023__',
'3_1_2023__',
'3_2_2023__',
'3_3_2023__',
'3_4_2023__',
'3_5_2023__',
'3_6_2023__',
'3_7_2023__',
'3_8_2023__',
'3_9_2023__',
'3_10_2023__',
'3_11_2023__',
'3_12_2023__',
'3_13_2023__',
'3_14_2023__',
'3_15_2023__',
'3_16_2023__',
'3_17_2023__',
'3_18_2023__',
'3_19_2023__',
'3_20_2023__',
'3_21_2023__',
'3_22_2023__',
'3_23_2023__',
'3_24_2023__',
'3_25_2023__',
'3_26_2023__',
'3_27_2023__',
'3_28_2023__',
'3_29_2023__',
'3_30_2023__',
'3_31_2023__',
'4_1_2023__',
'4_2_2023__',
'4_3_2023__',
'4_4_2023__',
'4_5_2023__',
'4_6_2023__',
'4_7_2023__',
'4_8_2023__',
'4_9_2023__',
'4_10_2023__',
'4_11_2023__',
'4_12_2023__',
'4_13_2023__',
'4_14_2023__',
'4_15_2023__',
'4_16_2023__',
'4_17_2023__',
'4_18_2023__',
'4_19_2023__',
'4_20_2023__',
'4_21_2023__',
'4_22_2023__',
'4_23_2023__',
'4_24_2023__',
'4_25_2023__',
'4_26_2023__',
'4_27_2023__',
'4_28_2023__',
'4_29_2023__',
'4_30_2023__',
'5_1_2023__',
'5_2_2023__',
'5_3_2023__',
'5_4_2023__',
'5_5_2023__',
'5_6_2023__',
'5_7_2023__',
'5_8_2023__',
'5_9_2023__',
'5_10_2023__',
'5_11_2023__',
'5_12_2023__',
'5_13_2023__',
'5_14_2023__',
'5_15_2023__',
'5_16_2023__',
'5_17_2023__',
'5_18_2023__',
'5_19_2023__',
'5_20_2023__',
'5_21_2023__',
'5_22_2023__',
'5_23_2023__',
'5_24_2023__',
'5_25_2023__',
'5_26_2023__',
'5_27_2023__',
'5_28_2023__',
'5_29_2023__',
'5_30_2023__',
'5_31_2023__',
'6_1_2023__',
'6_2_2023__',
'6_3_2023__',
'6_4_2023__',
'6_5_2023__',
'6_6_2023__',
'6_7_2023__',
'6_8_2023__',
'6_9_2023__',
'6_10_2023__',
'6_11_2023__',
'6_12_2023__',
'6_13_2023__',
'6_14_2023__',
'6_15_2023__',
'6_16_2023__',
'6_17_2023__',
'6_18_2023__',
'6_19_2023__',
'6_20_2023__',
'6_21_2023__',
'6_22_2023__',
'6_23_2023__',
'6_24_2023__',
'6_25_2023__',
'6_26_2023__',
'6_27_2023__',
'6_28_2023__',
'6_29_2023__',
'6_30_2023__',
'7_1_2023__',
'7_2_2023__',
'7_3_2023__',
'7_4_2023__',
'7_5_2023__',
'7_6_2023__',
'7_7_2023__',
'7_8_2023__',
'7_9_2023__',
'7_10_2023__',
'7_11_2023__',
'7_12_2023__',
'7_13_2023__',
'7_14_2023__',
'7_15_2023__',
'7_16_2023__',
'7_17_2023__',
'7_18_2023__',
'7_19_2023__',
'7_20_2023__',
'7_21_2023__',
'7_22_2023__',
'7_23_2023__',
'7_24_2023__',
'7_25_2023__',
'7_26_2023__',
'7_27_2023__',
'7_28_2023__',
'7_29_2023__',
'7_30_2023__',
'7_31_2023__',
'8_1_2023__',
'8_2_2023__',
'8_3_2023__',
'8_4_2023__',
'8_5_2023__',
'8_6_2023__',
'8_7_2023__',
'8_8_2023__',
'8_9_2023__',
'8_10_2023__',
'8_11_2023__',
'8_12_2023__',
'8_13_2023__',
'8_14_2023__',
'8_15_2023__',
'8_16_2023__',
'8_17_2023__',
'8_18_2023__',
'8_19_2023__',
'8_20_2023__',
'8_21_2023__',
'8_22_2023__',
'8_23_2023__',
'8_24_2023__',
'8_25_2023__',
'8_26_2023__',
'8_27_2023__',
'8_28_2023__',
'8_29_2023__',
'8_30_2023__',
'8_31_2023__',
'9_1_2023__',
'9_2_2023__',
'9_3_2023__',
'9_4_2023__',
'9_5_2023__',
'9_6_2023__',
'9_7_2023__',
'9_8_2023__',
'9_9_2023__',
'9_10_2023__',
'9_11_2023__',
'9_12_2023__',
'9_13_2023__',
'9_14_2023__',
'9_15_2023__',
'9_16_2023__',
'9_17_2023__',
'9_18_2023__',
'9_19_2023__',
'9_20_2023__',
'9_21_2023__',
'9_22_2023__',
'9_23_2023__',
'9_24_2023__',
'9_25_2023__',
'9_26_2023__',
'9_27_2023__',
'9_28_2023__',
'9_29_2023__',
'9_30_2023__',
'10_1_2023__',
'10_2_2023__',
'10_3_2023__',
'10_4_2023__',
'10_5_2023__',
'10_6_2023__',
'10_7_2023__',
'10_8_2023__',
'10_9_2023__',
'10_10_2023__',
'10_11_2023__',
'10_12_2023__',
'10_13_2023__',
'10_14_2023__',
'10_15_2023__',
'10_16_2023__',
'10_17_2023__',
'10_18_2023__',
'10_19_2023__',
'10_20_2023__',
'10_21_2023__',
'10_22_2023__',
'10_23_2023__',
'10_24_2023__',
'10_25_2023__',
'10_26_2023__',
'10_27_2023__',
'10_28_2023__',
'10_29_2023__',
'10_30_2023__',
'10_31_2023__',
'12_1_2023__',
'12_2_2023__',
'12_3_2023__',
'12_4_2023__',
'12_5_2023__',
'12_6_2023__',
'12_7_2023__',
'12_8_2023__',
'12_9_2023__',
'12_10_2023__',
'12_11_2023__',
'12_12_2023__',
'12_13_2023__',
'12_14_2023__',
'12_15_2023__',
'12_16_2023__',
'12_17_2023__',
'12_18_2023__',
'12_19_2023__',
'12_20_2023__',
'12_21_2023__',
'12_22_2023__',
'12_23_2023__',
'12_24_2023__',
'12_25_2023__',
'12_26_2023__',
'12_27_2023__',
'12_28_2023__',
'12_29_2023__',
'12_30_2023__',
'12_1_2023__',
'12_2_2023__',
'12_3_2023__',
'12_4_2023__',
'12_5_2023__',
'12_6_2023__',
'12_7_2023__',
'12_8_2023__',
'12_9_2023__',
'12_10_2023__',
'12_11_2023__',
'12_12_2023__',
'12_13_2023__',
'12_14_2023__',
'12_15_2023__',
'12_16_2023__',
'12_17_2023__',
'12_18_2023__',
'12_19_2023__',
'12_20_2023__',
'12_21_2023__',
'12_22_2023__',
'12_23_2023__',
'12_24_2023__',
'12_25_2023__',
'12_26_2023__',
'12_27_2023__',
'12_28_2023__',
'12_29_2023__',
'12_30_2023__',
'12_31_2023__'
]
    var cumulativeDays = 0;
    var fileNameArray1 = [];
    

    const dateMillis = new Date().getMilliseconds();

    const dateDay = new Date().getDate();
    const dateMonth = new Date().getMonth() + 1;

    for (let i = 1; i < dateMonth; i++) {
        cumulativeDays += monthLength[i]
    }

    cumulativeDays += dateDay


    for (let i = 0; i < numberDays; i++) {
        fileNameArray1.push(dates2023[cumulativeDays - i])

        for (let j = 8; j <= 12; j+=2) {
            csvFileArray.push(`DesignJobs_${fileNameArray1[i]}${j}_00_00_AM.csv`)
        }

        for (let k = 2; k <= 12; k+=2) {
            csvFileArray.push(`DesignJobs_${fileNameArray1[i]}${k}_00_00_PM.csv`) 
        }

    }


}
