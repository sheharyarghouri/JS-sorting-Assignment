var numbers = [5, 7, 9, 8, 10, 3, 2];

document.write(numbers);
document.write("<br>")
document.write("<br>")
document.write("Asscending Order")
document.write("<br>")
document.write("<br>")

var check = [2, 3, 5, 7, 8, 9, 10]

var result = ["", "", "", "", "", "", "",]

for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < check.length; j++) {
        if (numbers[i] == check[j]) {
            result.splice(j, 1, numbers[i])
        }
    }
}
document.write(result);

document.write("<br>")
document.write("<br>")

var numbers = [5, 7, 9, 8, 10, 3, 2];

document.write("<hr>")
document.write(numbers);
document.write("<br>")
document.write("<br>")
document.write("Descending Order")
document.write("<br>")
document.write("<br>")

var check = [10, 9, 8, 7, 5, 3, 2]

var result = ["", "", "", "", "", "", "",]

for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < check.length; j++) {
        if (numbers[j] == check[i]) {
            result.splice(i, 1, numbers[j])
        }
    }
}
document.write(result);