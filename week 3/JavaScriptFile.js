const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
const qrdownload = document.querySelector('qr-footer');


let size = sizes.value;

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size =e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img ==null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute('href',imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    if(qrText.value.length>0){
        generateQRCode();
    }
    else{
        alert("Enter the Text or URL to generate your QR Code");
    }
};

function generateQRCode(){
    const clrDark=document.getElementById('colorDark').value;
    const clrLight=document.getElementById('colorLight').value;
  
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark : clrDark,
        colorLight : clrLight,
    });
}