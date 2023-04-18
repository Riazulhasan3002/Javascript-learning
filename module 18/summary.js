var phones = ['iphone', 'xiomi', 'samsung', 'lg', 'htc']
phones[3] = 'walton'

// check oppo exists in an array
if(phones.indexOf('oppo') == -1) // kono element na thakle tar index -1 hobe
{
    console.log("oppo is not available")

}
else
{
console.log('Oppo is available')
}

//if htc is availabe
if(phones.indexOf('htc') != -1)
{
    console.log('htc is available')
}