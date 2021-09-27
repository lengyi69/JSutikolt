// JavaScript source code
function valasztas(szam)
{
    switch (szam.value) {
        case "0":
            elrejtes();
            break;
        case "1":
            buszvonatelszamolas();
            break;
       
        case "2":
            buszvonatelszamolas();
            break;
        case "3":
            kocsielszamolas();
            break;
    }
}
function elrejtes()
{
    kocsi.style.display = "none";
    buszvonat.style.display = "none";
}
function kocsielszamolas()
    {
    kocsi.style.display = "block";
    buszvonat.style.display = "none";
}
function buszvonatelszamolas()
{
    kocsi.style.display = "none";
    buszvonat.style.display = "block";
}