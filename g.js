
function ThreeSum(arr) {
    let sum = arr[0];
    let arr_length = arr.length;
    let res = [];


    for (let i = 0; i < arr_length - 2; i++) {

        // Fix the second element as arr[j]
        for (let j = i + 1; j < arr_length - 1; j++) {

            // Now look for the third number
            for (let k = j + 1; k < arr_length; k++) {
                if (arr[i] + arr[j] + arr[k] == sum) {
                    console.log("3 distinct elements are: " + arr[i] +
                        ", " + arr[j] + ", " + arr[k]);
                    res.push(arr[i], arr[j], arr[k]);
                    console.log(res);
                    return true;
                }
            }
        }
    }

    return false;
}



let arr = [50, 30, 30, -10, -10, 25, 15];

ThreeSum(arr);

