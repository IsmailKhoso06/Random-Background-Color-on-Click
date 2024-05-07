const getColor = () => {
    const randomNumber = Math.ceil(Math.random() * 16777215);
    const hexCode = '#' + randomNumber.toString(16);
    document.body.style.backgroundColor= hexCode;
    document.getElementById('color-code').innerText = hexCode;
    document.getElementById('color-code').style.color= hexCode;
}

function myFunction() {
    var copyText = document.getElementById("color-code");
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Copied the text: " + copyText.innerHTML);
  }


document.getElementById('btn').addEventListener(
    "click",
    getColor
)



getColor();