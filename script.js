
function showDiv(divNum) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('div' + i).style.display = 'none';

        document.getElementsByTagName('a')[i-1].style.color = ''; // Reset background color
    }
    document.getElementById('div' + divNum).style.display = 'block';

    document.getElementsByTagName('a')[divNum-1].style.color = 'red'; // Set background color for selected menu option
}
